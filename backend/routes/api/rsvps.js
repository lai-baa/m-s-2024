const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/email', async (req, res) => {
  const { name, email, phone, attendees } = req.body;

  // Email to you (admin)
  const adminMsg = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject: `New RSVP from ${name}`,
    text: `
      You've received a new RSVP:

      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Attendees: ${attendees}
    `,
  };

  // Confirmation email to guest
  const guestMsg = {
    to: email,
    from: process.env.EMAIL_FROM,
    subject: "RSVP Confirmation – Mariam & Shakar's Wedding",
    text: `
      Dear ${name},

      Thank you for your RSVP!

      We’ve received the following information:
      - Email: ${email}
      - Phone: ${phone}
      - Attendees: ${attendees}

      We look forward to celebrating with you!

      💌 Mariam & Shakar
    `,
  };

  try {
    // Send both emails in parallel
    await sgMail.send([adminMsg, guestMsg]);
    return res.status(200).json({ message: "Emails sent successfully" });
  } catch (err) {
    console.error("SendGrid error:", err.response?.body || err);
    return res.status(500).json({ error: "Failed to send RSVP email" });
  }
});

module.exports = router;
