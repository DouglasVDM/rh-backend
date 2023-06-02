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

// create a nouns
// app.post("/api/v1/nouns", async (req, res) => {
//     try {
//         const { description } = (req.body);
//         const newDepartment = await pool.query("INSERT INTO nouns (description) VALUES($1) RETURNING *", [description]
//         );

//         res.json(newDepartment.rows[0]);
//     } catch (err) {
//         console.error(err.message);
//     }

// });

// welcome message
app.get("/api/v1", async (req, res) => {
    try {
        res.send("From API Server: Hello World")

    } catch (err) {
        console.error(err.message);
    }
})


// get all nouns
app.get("/api/v1/nouns", async (req, res) => {
    try {
        const allNouns = await pool.query("SELECT * FROM nouns");
        res.json(allNouns.rows)

    } catch (err) {
        console.error(err.message);
    }
})

// get a nouns by id
app.get("/api/v1/nouns/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const noun = await pool.query("SELECT * FROM nouns WHERE noun_id = $1", [id]);

        res.json(noun.rows)
    } catch (err) {
        console.error(err.message);
    }
})

// // update a nouns
// app.put("/api/v1/nouns/:id", async (req, res) => {
//     const { id } = req.params;
//     const { description } = (req.body);
//     try {
//         const updateDepartment = await pool.query("UPDATE nouns SET description = $1 WHERE department_id = $2", [description, id]);

//         res.json(`Department ${id} description was updated to ${description}!`)
//     } catch (err) {
//         console.error(err.message);
//     }
// });

// // delete a nouns
// app.delete("/api/v1/nouns/:id", async (req, res) => {
//     const { id } = req.params;
//     try {
//         const deleteDepartment = await pool.query("DELETE FROM nouns WHERE department_id = $1", [id]);

//         res.json(`Department id: ${id} deleted!`)
//     } catch (err) {
//         console.error(err.message);
//     }
// });

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});