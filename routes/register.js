// API route for registration submission
// Usage: POST /api/register

const pool = require('./db');
const { sendRegistrationEmail } = require('./email');
const { createRateLimiter } = require('./rateLimiter');

const registerRateLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: 'Too many registration attempts from this network. Please wait a few minutes and try again.'
});

function sanitize(str) {
  return String(str || '').trim();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Apply rate limiter
  let rateLimitBlocked = false;
  registerRateLimiter(req, res, () => {
    rateLimitBlocked = false;
  });
  if (res.statusCode === 429) {
    return;
  }

  try {
    let { name, email, department, phone, experience, reason } = req.body;
    name = sanitize(name);
    email = sanitize(email);
    department = sanitize(department);
    phone = sanitize(phone);
    experience = sanitize(experience);
    reason = sanitize(reason);

    // Validate input
    if (!name || !email || !department || !phone || !experience || !reason) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    if (name.length < 2 || name.length > 100) {
      return res.status(400).json({ error: 'Full name must be between 2 and 100 characters.' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    if (phone.length < 8 || phone.length > 25) {
      return res.status(400).json({ error: 'Please provide a valid phone or WhatsApp number.' });
    }

    // Get client IP address
    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    // Insert into database
    const result = await pool.query(
      `INSERT INTO registrations (full_name, email, department, phone, experience, reason, ip_address)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [name, email, department, phone, experience, reason, ipAddress]
    );

    const registration = result.rows[0];

    // Send email notifications asynchronously in background
    sendRegistrationEmail(registration).catch(err => console.error('Background email notification error:', err));

    // Return immediate success response
    return res.status(201).json({
      success: true,
      message: 'Registration submitted successfully. Welcome to the BIAKA Debate Club!',
      registrationId: registration.id,
      registration: {
        id: registration.id,
        full_name: registration.full_name,
        department: registration.department,
        experience: registration.experience,
        created_at: registration.created_at
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Failed to submit registration' });
  }
};
