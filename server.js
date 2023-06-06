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


// API route to retrieve wordtypes
app.get("/api/v1/wordtypes", async (req, res) => {
    try {
        const wordtypes = await pool.query("SELECT * FROM types");
        
        res.status(201).json(wordtypes.rows);
    } catch (err) {
        console.error('Error retrieving word types', err);
        res.status(500).json({error:'Internal server error'});
    }
});

// API route to retrieve words based on nouns
app.get('/api/v1/nouns', async (req, res) => {
    try {
        const words = await pool.query('SELECT * FROM nouns');

        res.status(201).json(words.rows);
    } catch (err) {
        console.error('Error retrieving nouns', err);
        res.status(500).json({error:'Internal server error'});
    }
});

// API route to retrieve words based on verbs
app.get('/api/v1/verbs', async (req, res) => {
    try {
        const words = await pool.query('SELECT * FROM verbs');

        res.status(201).json(words.rows);
    } catch (err) {
        console.error('Error retrieving verbs', err);
        res.status(500).json({error:'Internal server error'});
    }
});

// API route to retrieve words based on adjectives
app.get('/api/v1/adjectives', async (req, res) => {
    try {
        const words = await pool.query('SELECT * FROM adjectives');

        res.status(201).json(words.rows);
    } catch (err) {
        console.error('Error retrieving adjectives', err);
        res.status(500).json({error:'Internal server error'});
    }
});

// API route to retrieve words based on adverbs
app.get('/api/v1/adverbs', async (req, res) => {
    try {
        const words = await pool.query('SELECT * FROM adverbs');

        res.status(201).json(words.rows);
    } catch (err) {
        console.error('Error retrieving adverbs', err);
        res.status(500).json({error:'Internal server error'});
    }
});

// API route to retrieve words based on pronouns
app.get('/api/v1/pronouns', async (req, res) => {
    try {
        const words = await pool.query('SELECT * FROM pronouns');

        res.status(201).json(words.rows);
    } catch (err) {
        console.error('Error retrieving pronouns', err);
        res.status(500).json({error:'Internal server error'});
    }
});

// API route to retrieve words based on prepositions
app.get('/api/v1/prepositions', async (req, res) => {
    try {
        const words = await pool.query('SELECT * FROM prepositions');

        res.status(201).json(words.rows);
    } catch (err) {
        console.error('Error retrieving prepositions', err);
        res.status(500).json({error:'Internal server error'});
    }
});

// API route to retrieve words based on conjunctions
app.get('/api/v1/conjunctions', async (req, res) => {
    try {
        const words = await pool.query('SELECT * FROM conjunctions');

        res.status(201).json(words.rows);
    } catch (err) {
        console.error('Error retrieving conjunctions', err);
        res.status(500).json({error:'Internal server error'});
    }
});

// API route to retrieve words based on determiners
app.get('/api/v1/determiners', async (req, res) => {
    try {
        const words = await pool.query('SELECT * FROM determiners');

        res.status(201).json(words.rows);
    } catch (err) {
        console.error('Error retrieving determiners', err);
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
