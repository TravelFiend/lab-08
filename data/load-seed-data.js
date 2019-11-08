require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
// import seed data:
const pets = require('./pets.js');

run();

async function run() {
    const client = new Client(process.env.DATABASE_URL);

    try {
        await client.connect();

        // "Promise all" does a parallel execution of async tasks
        await Promise.all(
            // map every item in the array data
            pets.map(pet => {
                return client.query(`
                    INSERT INTO pets (name, type, url, age, flies)
                    VALUES ($1, $2, $3, $4, $5);
                `,
                [pet.name, pet.type, pet.url, pet.age, pet.flies]);

                // Use a "parameterized query" to insert the data,
                // Don't forget to "return" the client.query promise!

            })
        );

        console.log('seed data load complete');
    }
    catch (err) {
        console.log(err);
    }
    finally {
        client.end();
    }

}