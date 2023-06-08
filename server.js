const express = require("express");
const cors = require("cors");
const words = require("./words");
const sentences = require("./sentences");

require("dotenv").config();

const pool = require("./db");
const app = express();

const PORT = process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());
app.use("/api/v1", words);
app.use("/api/v1", sentences);

// ROUTES
// welcome message
app.get("/api/v1", async (req, res) => {
  try {
    res.send("From API Server: Hello World");
  } catch (err) {
    console.error(err.message);
  }
});

// API route to retrieve words
app.get("/api/v1/words", async (req, res) => {
  try {
    const words = await pool.query("SELECT * FROM words");

    res.status(201).json(words.rows);
  } catch (err) {
    console.error("Error retrieving words", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API route to retrieve wordtypes
app.get("/api/v1/wordtypes", async (req, res) => {
  try {
    const wordtypes = await pool.query("SELECT * FROM types");

    res.status(201).json(wordtypes.rows);
  } catch (err) {
    console.error("Error retrieving word types", err);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
