const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { createRateLimiter } = require('./rateLimiter');
require('dotenv').config();

const contactRateLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: 'Too many contact submissions from this network. Please wait a few minutes and try again.'
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

function escapeHtml(text) {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

router.post('/', contactRateLimiter, async (req, res) => {
  let { name, email, message } = req.body;
  name = String(name || '').trim();
  email = String(email || '').trim();
  message = String(message || '').trim();

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const contactHTML = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
      <h2 style="color: #0284c7; margin-top: 0;">New Website Contact Message</h2>
      <p><strong>From:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;">
      <p><strong>Message:</strong></p>
      <p style="background: #f8fafc; padding: 14px; border-radius: 6px; line-height: 1.6;">${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    </div>
  `;

  const autoResponderHTML = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
      <h2 style="color: #0284c7; margin-top: 0;">BIAKA Audacious Agora Debate Club</h2>
      <p>Hi ${escapeHtml(name.split(' ')[0])},</p>
      <p>Thank you for reaching out to us! We have received your message and our executive team will review it and get back to you shortly.</p>
      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;">
      <p><strong>Your Message Summary:</strong></p>
      <p style="background: #f8fafc; padding: 14px; border-radius: 6px; font-style: italic; color: #475569;">${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      <p style="margin-top: 20px;">Best regards,<br><strong>Tercy Wainwul</strong><br>President, BIAKA Audacious Agora Debate Club<br><small style="color: #64748b;">BIAKA University Institute of Buea</small></p>
    </div>
  `;

  try {
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      // 1. Notify President / Admin
      await transporter.sendMail({
        from: `"BIAKA Debate Club Website" <${process.env.GMAIL_USER}>`,
        to: `${process.env.ADMIN_EMAIL || 'misswhiteblue@gmail.com'}, misswhiteblue@gmail.com`,
        replyTo: email,
        subject: `Contact Message from ${name}`,
        html: contactHTML,
      });

      // 2. Auto-responder to sender
      await transporter.sendMail({
        from: `"BIAKA Audacious Agora Debate Club" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `We have received your message - BIAKA Debate Club`,
        html: autoResponderHTML,
      }).catch(err => console.error('Auto-responder error:', err));
    }

    res.status(200).json({ success: true, message: 'Message sent successfully. We will get back to you soon!' });
  } catch (error) {
    console.error('Error sending contact message:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

module.exports = router;
