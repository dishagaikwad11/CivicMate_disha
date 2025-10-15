const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaint");

router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const complaint = new Complaint({ title, description });
    await complaint.save();
    res.json({ message: "Complaint submitted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
