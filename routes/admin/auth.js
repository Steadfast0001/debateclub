const pool = require('../db');
const { hashPassword, verifyPassword, generateSecureToken } = require('../auth_utils');
const { sendPasswordResetEmail } = require('../email');

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-admin-key');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const path = req.url || '';

  // 1. LOGIN: POST /api/admin/login
  if (req.method === 'POST' && (path.includes('/login') || req.path === '/login' || !path.includes('/'))) {
    try {
      const { email, password, adminKey } = req.body;

      // Check legacy adminKey if supplied
      if (adminKey && process.env.ADMIN_KEY && adminKey === process.env.ADMIN_KEY) {
        return res.status(200).json({
          success: true,
          token: adminKey,
          email: 'admin@biakahc.org',
          message: 'Authenticated via Admin Key'
        });
      }

      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
      }

      const userResult = await pool.query(
        'SELECT id, email, password_hash, role FROM admin_users WHERE LOWER(email) = LOWER($1)',
        [email.trim()]
      );

      if (userResult.rows.length === 0) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      const user = userResult.rows[0];
      const passwordValid = await verifyPassword(password, user.password_hash);

      if (!passwordValid) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      // Generate session token
      const sessionToken = generateSecureToken(32);
      // We can also store session tokens or use signed admin key
      return res.status(200).json({
        success: true,
        token: process.env.ADMIN_KEY || sessionToken,
        email: user.email,
        message: 'Login successful'
      });

    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({ error: 'Internal server error during login' });
    }
  }

  // 2. FORGOT PASSWORD: POST /api/admin/forgot-password
  if (req.method === 'POST' && (path.includes('/forgot-password') || req.path === '/forgot-password')) {
    try {
      const { email } = req.body;
      if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Valid email address is required' });
      }

      const normalizedEmail = email.trim().toLowerCase();
      const userResult = await pool.query(
        'SELECT id, email FROM admin_users WHERE LOWER(email) = $1',
        [normalizedEmail]
      );

      if (userResult.rows.length > 0) {
        const user = userResult.rows[0];
        const resetToken = generateSecureToken(32);
        // Expiry in 30 minutes
        const expiry = new Date(Date.now() + 30 * 60 * 1000);

        await pool.query(
          'UPDATE admin_users SET reset_token = $1, reset_token_expiry = $2 WHERE id = $3',
          [resetToken, expiry, user.id]
        );

        const origin = req.headers.origin || `https://${req.headers.host}`;
        await sendPasswordResetEmail(user.email, resetToken, origin);
      }

      // Always return a generic success message to prevent user enumeration attacks
      return res.status(200).json({
        success: true,
        message: 'If that email address is registered, a password reset link has been sent to it.'
      });

    } catch (error) {
      console.error('Forgot password error:', error);
      return res.status(500).json({ error: 'Failed to process password reset request' });
    }
  }

  // 3. RESET PASSWORD: POST /api/admin/reset-password
  if (req.method === 'POST' && (path.includes('/reset-password') || req.path === '/reset-password')) {
    try {
      const { email, token, newPassword } = req.body;

      if (!email || !token || !newPassword) {
        return res.status(400).json({ error: 'Email, token, and new password are required' });
      }

      if (newPassword.length < 8) {
        return res.status(400).json({ error: 'New password must be at least 8 characters long' });
      }

      const userResult = await pool.query(
        `SELECT id, email, reset_token, reset_token_expiry 
         FROM admin_users 
         WHERE LOWER(email) = LOWER($1) AND reset_token = $2 AND reset_token_expiry > NOW()`,
        [email.trim(), token.trim()]
      );

      if (userResult.rows.length === 0) {
        return res.status(400).json({ error: 'Invalid or expired password reset link. Please request a new one.' });
      }

      const user = userResult.rows[0];
      const newHash = await hashPassword(newPassword);

      await pool.query(
        `UPDATE admin_users 
         SET password_hash = $1, reset_token = NULL, reset_token_expiry = NULL 
         WHERE id = $2`,
        [newHash, user.id]
      );

      return res.status(200).json({
        success: true,
        message: 'Password has been successfully changed! You can now log in with your new password.'
      });

    } catch (error) {
      console.error('Reset password error:', error);
      return res.status(500).json({ error: 'Failed to reset password' });
    }
  }

  // 4. VERIFY SESSION: GET /api/admin/verify
  if (req.method === 'GET' && (path.includes('/verify') || req.path === '/verify')) {
    const adminKey = req.headers['x-admin-key'];
    if (adminKey && adminKey === process.env.ADMIN_KEY) {
      return res.status(200).json({ success: true, authenticated: true });
    }
    return res.status(401).json({ error: 'Unauthorized' });
  }

  return res.status(404).json({ error: 'Endpoint not found' });
};
