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

// http method and path...


// Start the server
// (use PORT from .env!)
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});