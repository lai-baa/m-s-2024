const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/email', async (req, res) => {
  const { name, email, phone, attendees } = req.body;

  // 1. Email to you (admin)
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

  // 2. Confirmation email to the guest
  const guestMsg = {
    to: email,
    from: process.env.EMAIL_FROM,
    subject: "RSVP Confirmation - Mariam & Shakar's Wedding",
    text: `
      Dear ${name},

      Thank you for your RSVP!

      We've received your information and look forward to seeing you at the wedding 🎉

      💌 Mariam & Shakar
    `,
  };

  try {
    // Send both emails at once
    await sgMail.send([adminMsg, guestMsg]);
    return res.status(200).json({ message: "Emails sent successfully" });
  } catch (err) {
    console.error("SendGrid error:", err.response?.body || err);
    return res.status(500).json({ error: "Failed to send RSVP email" });
  }
});

module.exports = router;
