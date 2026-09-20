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
  const adminEmailHTML = `
    <h2>New Registration Submitted</h2>
    <p><strong>Full Name:</strong> ${escapeHtml(registration.full_name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(registration.email)}</p>
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
      to: `${process.env.ADMIN_EMAIL}, misswhiteblue@gmail.com`,
      subject: `New Registration: ${registration.full_name}`,
      html: adminEmailHTML,
    });
    console.log(`Admin notification email sent for: ${registration.full_name}`);
    
    // 2. Send Welcome Email to the Student
    if (registration.email) {
      const welcomeHTML = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h1 style="color: #0b2e59;">WELCOME TO THE BIAKA AUDACIOUS AGORA DEBATE CLUB</h1>
          <p>Hi ${escapeHtml(registration.full_name.split(' ')[0])},</p>
          <p>Thank you for submitting your application to join the Biaka Audacious Agora Debate Club. We have received your registration!</p>
          <p>After our Pan Africa 2026 success, we are building something massive. Get ready for incredible opportunities in leadership, public speaking, and networking.</p>
          <p><strong>Next Steps:</strong></p>
          <ul>
            <li>Save the Date: Our brief induction meeting is on <strong>Friday, June 5th, 2026</strong>.</li>
            <li>Keep an eye on your email/WhatsApp for the exact time and venue.</li>
          </ul>
          <p>We are thrilled to have you with us. Speak. Reason. Lead.</p>
          <p>Best regards,<br><strong>Tercy Wainwul</strong><br>President, BIAKA Audacious Agora Debate Club</p>
        </div>
      `;

      await transporter.sendMail({
        from: `"BIAKA Audacious Agora Debate Club" <${process.env.GMAIL_USER}>`,
        to: registration.email,
        subject: 'WELCOME TO THE BIAKA AUDACIOUS AGORA DEBATE CLUB',
        html: welcomeHTML,
      });
      console.log(`Welcome email sent to: ${registration.email}`);
    }

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

async function broadcastNewsUpdate(newsItem, emails) {
  if (!emails || emails.length === 0) return false;

  const newsHTML = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <h1 style="color: #0b2e59;">BIAKA Audacious Agora Debate Club: News Update</h1>
      <h2 style="color: #4a5568;">${escapeHtml(newsItem.title)}</h2>
      <p style="color: #718096; font-size: 14px;"><strong>${escapeHtml(newsItem.type)}</strong></p>
      ${newsItem.media ? `<img src="${escapeHtml(newsItem.media)}" alt="News Media" style="max-width: 100%; border-radius: 8px; margin: 10px 0;">` : ''}
      <div style="margin-top: 20px; line-height: 1.6;">
        ${newsItem.text}
      </div>
      <hr style="margin-top: 30px; border: 0; border-top: 1px solid #e2e8f0;">
      <p style="font-size: 12px; color: #a0aec0;">You are receiving this email because you are a registered member of the BIAKA Audacious Agora Debate Club.</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"BIAKA Audacious Agora Debate Club" <${process.env.GMAIL_USER}>`,
      bcc: emails.join(','),
      subject: `New Update: ${newsItem.title}`,
      html: newsHTML,
    });
    console.log(`News broadcast sent to ${emails.length} recipients.`);
    return true;
  } catch (error) {
    console.error('Error broadcasting news update:', error);
    return false;
  }
async function sendPasswordResetEmail(email, resetToken, origin) {
  const baseUrl = origin || process.env.BASE_URL || 'https://debateclub-one.vercel.app';
  const resetLink = `${baseUrl}/admin.html?reset_token=${encodeURIComponent(resetToken)}&email=${encodeURIComponent(email)}`;

  const resetHTML = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #1e293b; background: #ffffff; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
      <h2 style="color: #0284c7; margin-top: 0;">BIAKA Audacious Agora Debate Club</h2>
      <h3 style="color: #0f172a; margin-bottom: 8px;">Admin Password Reset Request</h3>
      <p>Hello,</p>
      <p>A request was received to reset the administrator password for your BIAKA Debate Club account (<strong>${escapeHtml(email)}</strong>).</p>
      <div style="margin: 24px 0; text-align: center;">
        <a href="${resetLink}" style="display: inline-block; background: #0284c7; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 14px;">Reset My Password</a>
      </div>
      <p style="font-size: 13px; color: #64748b;">Or copy and paste this link into your browser:</p>
      <p style="font-size: 12px; color: #0284c7; word-break: break-all;"><a href="${resetLink}">${resetLink}</a></p>
      <p style="font-size: 12px; color: #dc2626; margin-top: 18px;"><strong>Note:</strong> This link is valid for 30 minutes and can only be used once.</p>
      <hr style="margin: 20px 0; border: 0; border-top: 1px solid #e2e8f0;">
      <p style="font-size: 11.5px; color: #94a3b8; margin-bottom: 0;">If you did not request this password reset, please ignore this email or contact the club president.</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"BIAKA Debate Club Admin" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Password Reset Request - BIAKA Debate Club Admin',
      html: resetHTML,
    });
    console.log(`Password reset email sent to: ${email}`);
    return true;
  } catch (error) {
    console.error('Error sending password reset email:', error);
    return false;
  }
}

module.exports = { sendRegistrationEmail, broadcastNewsUpdate, sendPasswordResetEmail };
