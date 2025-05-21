const express = require("express");
const router = express.Router();
const { RSVP } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const rsvps = await RSVP.findAll();
    res.json(rsvps);
  } catch (err) {
    console.error("Error fetching RSVPs:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;