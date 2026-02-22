const nodemailer = require('nodemailer');

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  if (process.env.RESEND_API_KEY) {
    transporter = nodemailer.createTransporter({
      host: 'smtp.resend.com',
      port: 465,
      secure: true,
      auth: {
        user: 'resend',
        pass: process.env.RESEND_API_KEY,
      },
    });
  } else if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  return transporter;
}

async function sendWelcomeEmail(email, position) {
  const transporter = getTransporter();
  
  if (!transporter) {
    console.error('No email transporter configured');
    return { success: false };
  }

  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, sans-serif; line-height: 1.6; color: #111827; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
    .header { background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; padding: 48px 32px; text-align: center; }
    .header h1 { margin: 0; font-size: 32px; font-weight: 700; }
    .content { padding: 40px 32px; }
    .content p { margin: 0 0 16px 0; font-size: 16px; }
    .highlight { background-color: #fef3c7; padding: 2px 6px; border-radius: 4px; font-weight: 600; }
    .footer { padding: 32px; text-align: center; border-top: 1px solid #e5e7eb; background: #f9fafb; }
    .footer p { margin: 4px 0; font-size: 14px; color: #6b7280; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎉 You're on the list!</h1>
    </div>
    
    <div class="content">
      <p>Hey there,</p>
      
      <p>Thanks for joining the FounderSales waitlist. You're among the first founders who'll stop freezing and start executing.</p>
      
      <p><strong>What happens next:</strong></p>
      <ul>
        <li>We're finishing the final features (Practice Mode is 🔥)</li>
        <li>Early users get <span class="highlight">lifetime 50% off</span></li>
        <li>You'll get first access when we launch <strong>Spring 2026</strong></li>
      </ul>
      
      <p><strong>Want to see it in action right now?</strong></p>
      <p>Reply to this email with a one-sentence description of your business, and I'll personally show you 3 opportunities you could act on TODAY.</p>
      
      <p>Talk soon,<br>
      <strong>Dev Paul</strong><br>
      Founder, FounderSales</p>
    </div>
    
    <div class="footer">
      <p><strong>Your spot: #${position} on the waitlist</strong></p>
      <p>Signed up: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
    </div>
  </div>
</body>
</html>
  `;

  try {
    await transporter.sendMail({
      from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: "🎉 You're on the FounderSales waitlist!",
      html,
    });

    console.log(`✅ Email sent to ${email}`);
    return { success: true };
  } catch (error) {
    console.error('❌ Email failed:', error);
    return { success: false, error: error.message };
  }
}

module.exports = { sendWelcomeEmail };