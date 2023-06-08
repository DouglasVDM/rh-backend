const express = require("express");
const router = express.Router();
const pool = require("./db");


// API route to retrieve all previously submitted sentences
router.get("/sentences", async (req, res) => {
  try {
    const allSentences = await pool.query(
      "SELECT * FROM sentences ORDER BY id DESC"
    );
    res.status(200).json(allSentences.rows);
  } catch (err) {
    console.error("Error retrieving sentences", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API route to submit a new sentence
router.post("/sentences", async (req, res) => {
  try {
    const { sentence } = req.body;
    const newSentence = await pool.query(
      "INSERT INTO sentences (sentence) VALUES($1) RETURNING *",
      [sentence]
    );

    res.status(201).json(newSentence.rows[0]);
  } catch (err) {
    console.error("Error submitting sentence", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;