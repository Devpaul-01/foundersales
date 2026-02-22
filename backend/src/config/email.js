const nodemailer = require('nodemailer');

let transporter;

if (process.env.RESEND_API_KEY) {
  // Use Resend
  transporter = nodemailer.createTransport({
    host: 'smtp.resend.com',
    port: 465,
    secure: true,
    auth: {
      user: 'resend',
      pass: process.env.RESEND_API_KEY,
    },
  });
  console.log('📧 Using Resend SMTP transporter');
} else if (process.env.SMTP_USER && process.env.SMTP_PASS) {
  // Use Gmail or other SMTP
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: false, // false for port 587, true for 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  console.log('📧 Using SMTP transporter');
} else {
  console.warn('⚠️ No email configuration found. Emails will not be sent.');
}

module.exports = transporter;