const promise = require('bluebird'); // or any other Promise/A+ compatible library;
const pgp = require('pg-promise')(initOptions);
const initOptions = {
  promiseLib : promise // use Bluebird instead of ES6 Promises
};

const config = require('../config/main.js');

const db = pgp(config.database);

module.exports = db;
