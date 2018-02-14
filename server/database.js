const env = require('dotenv').config();
const bluebirdPromise = require('bluebird');
const initOptions = { promiseLib: bluebirdPromise };
const pgp = require('pg-promise')(initOptions);
const url = process.env.LOCALHOST_URL;

const db = {
    // Lets define a getAll method on our db object
    getAll: (table) => {
        return db.conn.any(`SELECT * FROM ${table}`);
    }
};

//connection to the pg-promise database through url listed in our .env file
db.conn = pgp(url);

module.exports = db;

// CREATE TABLE usr (
//  id serial PRIMARY KEY NOT NULL,
//  email VARCHAR (50) NOT NULL UNIQUE,
//  password VARCHAR (50)
//  targetWord VARCHAR (50) NOT NULL,
//  score INTEGER NOT NULL
// );
