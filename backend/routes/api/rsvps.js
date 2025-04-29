const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/email', async (req, res) => {
  const { name, email, phone, attendees } = req.body;

  const msg = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject: `RSVP from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Attendees: ${attendees}
    `,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ message: "RSVP email sent successfully" });
  } catch (err) {
    console.error("SendGrid error:", err);
    return res.status(500).json({ error: "Failed to send RSVP email" });
  }
});

module.exports = router;