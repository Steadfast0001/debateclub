const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function testEmail() {
  try {
    console.log(`Authenticating with: ${process.env.GMAIL_USER}...`);
    await transporter.verify();
    console.log('✅ SMTP Connection & Authentication Successful!');
    
    console.log('Sending test email...');
    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // send to self
      subject: 'Test Email from Local',
      text: 'If you see this, nodemailer is working perfectly.',
    });
    console.log('✅ Email sent successfully:', info.messageId);
    process.exit(0);
  } catch (error) {
    console.error('❌ Email sending failed:', error.message);
    process.exit(1);
  }
}

testEmail();
