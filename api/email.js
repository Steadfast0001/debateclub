const nodemailer = require('nodemailer');
require('dotenv').config();

// Create transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Send registration notification email
async function sendRegistrationEmail(registration) {
  const emailHTML = `
    <h2>New Registration Submitted</h2>
    <p><strong>Full Name:</strong> ${escapeHtml(registration.full_name)}</p>
    <p><strong>Department:</strong> ${escapeHtml(registration.department)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(registration.phone)}</p>
    <p><strong>Experience Level:</strong> ${escapeHtml(registration.experience)}</p>
    <p><strong>Why Join:</strong></p>
    <p>${escapeHtml(registration.reason).replace(/\n/g, '<br>')}</p>
    <p><strong>Submitted:</strong> ${new Date(registration.created_at).toLocaleString()}</p>
    <hr>
    <p><small>IP Address: ${registration.ip_address || 'N/A'}</small></p>
  `;

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Registration: ${registration.full_name}`,
      html: emailHTML,
    });
    console.log(`Email sent for registration: ${registration.full_name}`);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

function escapeHtml(text) {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

module.exports = { sendRegistrationEmail };
