const express = require("express");
const cors = require("cors");

require('dotenv').config();
const pool = require("./db");
const app = express();

let PORT = process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());

// ROUTES
// welcome message
app.get("/api/v1", async (req, res) => {
    try {
        res.send("From API Server: Hello World")

    } catch (err) {
        console.error(err.message);
    }
})

// API route to retrieve words
app.get("/api/v1/words", async (req, res) => {
    try {
        const words = await pool.query("SELECT * FROM words");

        res.status(201).json(words.rows);
    } catch (err) {
        console.error('Error retrieving words', err);
        res.status(500).json({error:'Internal server error'});
    }
});

// API route to retrieve words based on their type
app.get("/api/v1/words/:wordType", async (req, res) => {
    const { wordType } = req.params;
    try {
        const words = await pool.query("SELECT * FROM words WHERE word_type = $1", [wordType]);

        res.status(201).json(words.rows);
    } catch (err) {
        console.error('Error retrieving words', err);
        res.status(500).json({error:'Internal server error'});
    }
});

// API route to retrieve all previously submitted sentences
app.get("/api/v1/sentences", async (req, res) => {
    try {
        const allSentences = await pool.query("SELECT * FROM sentences ORDER BY id DESC");
        res.status(201).json(allSentences.rows)

    } catch (err) {
        console.error('Error retrieving sentences',err.message);
        res.status(500).json({error:'Internal server error'});
    }
});

// API route to submit a new sentence
app.post("/api/v1/sentences", async (req, res) => {
    try {
        const { sentence } = (req.body);
        const newSentence = await pool.query("INSERT INTO sentences (sentence) VALUES($1) RETURNING *", [sentence]
        );

        res.status(201).json(newSentence.rows[0]);
    } catch (err) {
        console.error('Error submitting sentence',err.message);
        res.status(500).json({error:'Internal server error'});
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});
