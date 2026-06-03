// API route for registration submission
// Usage: POST /api/register

const pool = require('./db');
const { sendRegistrationEmail } = require('./email');

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

  try {
    const { name, department, phone, experience, reason } = req.body;

    // Validate input
    if (!name || !department || !phone || !experience || !reason) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Get client IP address
    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    // Insert into database
    const result = await pool.query(
      `INSERT INTO registrations (full_name, department, phone, experience, reason, ip_address)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [name, department, phone, experience, reason, ipAddress]
    );

    const registration = result.rows[0];

    // Send email notification to admin
    await sendRegistrationEmail(registration);

    // Return success response
    res.status(201).json({
      success: true,
      message: 'Registration submitted successfully. Admin will be notified.',
      registrationId: registration.id,
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Failed to submit registration' });
  }
};
