require('dotenv').config();
const pg = require('pg');
const Client = pg.Client;
// import seed data:
const types = require('./types');
const pets = require('./pets.js');

run();

async function run() {
    const client = new Client(process.env.DATABASE_URL);

    try {
        await client.connect();

        // "Promise all" does a parallel execution of async tasks
        const savedTypes = await Promise.all(
            types.map(async type => {
                const result = await client.query(`
                    INSERT INTO types (name)
                    VALUES ($1)
                    RETURNING *;
                `,
                [type]);

                return result.rows[0];
            })
        );

        await Promise.all(
            // map every item in the array data
            pets.map(pet => {
                const type = savedTypes.find(type => {
                    return type.name === pet.type;
                });

                return client.query(`
                    INSERT INTO pets (name, type,_id url, age, flies)
                    VALUES ($1, $2, $3, $4, $5);
                `,
                [pet.name, pet.type, pet.url, pet.age, pet.flies]);
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