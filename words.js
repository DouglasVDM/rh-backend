const express = require("express");
const router = express.Router();
const pool = require("./db");


// API route to retrieve words based on nouns
router.get("/nouns", async (req, res) => {
  try {
    const words = await pool.query("SELECT * FROM nouns");

    res.status(200).json(words.rows);
  } catch (err) {
    console.error("Error retrieving nouns", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API route to retrieve words based on verbs
router.get("/verbs", async (req, res) => {
  try {
    const words = await pool.query("SELECT * FROM verbs");

    res.status(200).json(words.rows);
  } catch (err) {
    console.error("Error retrieving verbs", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API route to retrieve words based on adjectives
router.get("/adjectives", async (req, res) => {
  try {
    const words = await pool.query("SELECT * FROM adjectives");

    res.status(200).json(words.rows);
  } catch (err) {
    console.error("Error retrieving adjectives", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API route to retrieve words based on adverbs
router.get("/adverbs", async (req, res) => {
  try {
    const words = await pool.query("SELECT * FROM adverbs");

    res.status(200).json(words.rows);
  } catch (err) {
    console.error("Error retrieving adverbs", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API route to retrieve words based on pronouns
router.get("/pronouns", async (req, res) => {
  try {
    const words = await pool.query("SELECT * FROM pronouns");

    res.status(200).json(words.rows);
  } catch (err) {
    console.error("Error retrieving pronouns", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API route to retrieve words based on prepositions
router.get("/prepositions", async (req, res) => {
  try {
    const words = await pool.query("SELECT * FROM prepositions");

    res.status(200).json(words.rows);
  } catch (err) {
    console.error("Error retrieving prepositions", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API route to retrieve words based on conjunctions
router.get("/conjunctions", async (req, res) => {
  try {
    const words = await pool.query("SELECT * FROM conjunctions");

    res.status(200).json(words.rows);
  } catch (err) {
    console.error("Error retrieving conjunctions", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API route to retrieve words based on determiners
router.get("/determiners", async (req, res) => {
  try {
    const words = await pool.query("SELECT * FROM determiners");

    res.status(200).json(words.rows);
  } catch (err) {
    console.error("Error retrieving determiners", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API route to retrieve words based on exclamations
router.get("/exclamations", async (req, res) => {
  try {
    const words = await pool.query("SELECT * FROM exclamations");

    res.status(200).json(words.rows);
  } catch (err) {
    console.error("Error retrieving exclamations", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
