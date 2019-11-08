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
const PORT = process.send.PORT;
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));



// API Routes
app.get('/api/pets', async(req, res) => {

    try {
        const result = await client.query(`
            SELECT
                id,
                name,
                type,
                url,
                age,
                flies
            FROM PETS;
        `);

        res.json(result.rows);
    }
    catch (err) {
        res.status(500).json({
            error: err.message || err
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});