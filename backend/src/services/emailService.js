const transporter = require('../config/email');
const fs = require('fs');
const path = require('path');
const supabase = require('../config/database');

class EmailService {
  async sendWelcomeEmail(email, position) {
    if (!transporter) {
      console.log('Email not sent (no transporter configured):', email);
      return;
    }

    // Read HTML template
    /*
    const templatePath = path.join(__dirname, '../templates/welcome.html');
    */
    const templatePath = path.join(__dirname, '..', 'templates', 'welcome.html');
    
    let html = fs.readFileSync(templatePath, 'utf-8');
    console.log("sending thus message", html.length);

    // Replace placeholders
    html = html.replace('{{position}}', position);
    html = html.replace('{{date}}', new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }));

    // Send email
    await this.sendEmail(
      email,
      "🎉 You're on the FounderSales waitlist!",
      html,
      position
    );
  }

  async sendEmail(to, subject, html, position) {
  console.log("==== SEND EMAIL DEBUG START ====");
  console.log("To:", to);
  console.log("Subject:", subject);
  console.log("HTML exists:", !!html);
  console.log("HTML type:", typeof html);
  console.log("HTML length:", html?.length);
  console.log("First 200 chars:", html?.substring(0, 200));
  console.log("From:", `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM}>`);
  console.log("================================");

  try {
    await transporter.sendMail({
      from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM}>`,
      to,
      subject,
      html,
      text: `You're on the waitlist. Position: ${position}` // ADD THIS
    });

    console.log("EMAIL ACTUALLY SENT");

  } catch (error) {
    console.error("FULL ERROR OBJECT:");
    console.error(error);
    console.error("Error response:", error.response);
    console.error("Error command:", error.command);
    throw error;
  }
}
}

module.exports = new EmailService();