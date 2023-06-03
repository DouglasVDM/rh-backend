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

app.get("/api/v1/nouns", async (req, res) => {
    try {
        const allNouns = await pool.query("SELECT * FROM nouns");
        res.json(allNouns.rows)

    } catch (err) {
        console.error(err.message);
    }
})

app.get("/api/v1/nouns/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const noun = await pool.query("SELECT * FROM nouns WHERE noun_id = $1", [id]);

        res.json(noun.rows)
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/api/v1/determiners", async (req, res) => {
    try {
        const allDeterminers = await pool.query("SELECT * FROM determiners");
        res.json(allDeterminers.rows)

    } catch (err) {
        console.error(err.message);
    }
})

app.get("/api/v1/determiners/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const determiner = await pool.query("SELECT * FROM determiners WHERE determiner_id = $1", [id]);

        res.json(determiner.rows)
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/api/v1/verbs", async (req, res) => {
    try {
        const allVerbs = await pool.query("SELECT * FROM verbs");
        res.json(allVerbs.rows)

    } catch (err) {
        console.error(err.message);
    }
})

app.get("/api/v1/verbs/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const verb = await pool.query("SELECT * FROM verbs WHERE verb_id = $1", [id]);

        res.json(verb.rows)
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/api/v1/adjectives", async (req, res) => {
    try {
        const allAdjectives = await pool.query("SELECT * FROM adjectives");
        res.json(allAdjectives.rows)

    } catch (err) {
        console.error(err.message);
    }
})

app.get("/api/v1/adjectives/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const adjective = await pool.query("SELECT * FROM adjectives WHERE adjective_id = $1", [id]);

        res.json(adjective.rows)
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/api/v1/sentences", async (req, res) => {
    try {
        const allSentences = await pool.query("SELECT * FROM sentences");
        res.json(allSentences.rows)

    } catch (err) {
        console.error(err.message);
    }
})

app.post("/api/v1/sentences", async (req, res) => {
    try {
        const { sentence_name } = (req.body);
        const newSentence = await pool.query("INSERT INTO sentences (sentence_name) VALUES($1) RETURNING *", [sentence_name]
        );

        res.json(newSentence.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});
