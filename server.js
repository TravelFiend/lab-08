// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');
const pg = require('pg');
const morgan = require('morgan');

// Database Client
const Client = pg.Client;
const client = new Client(process.env.DATABASE_URL);
client.connect();

// Application Setup
const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());


// API Routes
app.get('/api/pets', async(req, res) => {

    try {
        const result = await client.query(`
            SELECT
                p.*,
                t.name as type
            FROM pets p
            JOIN types t
            ON   p.type_id = t.id
            ORDER BY p.age;
        `);

        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({
            error: err.message || err
        });
    }
});

/// fix this part!

app.post('/api/pets', async(req, res) => {
    const pet = req.body;

    try {
        const result = await client.query(`
            INSERT INTO pets (name, type_id, url, age, flies)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `,
        [pet.name, pet.typeId, pet.url, pet.age, pet.canFly]
        );

        res.json(result.rows[0]);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message || err
        });
    }
});

// *** TYPES ***
app.get('/api/types', async(req, res) => {
    try {
        const result = await client.query(`
            SELECT *
            FROM types
            ORDER BY name;
        `);

        res.json(result.rows);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message || err
        });
    }
});
// Start the server
app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});