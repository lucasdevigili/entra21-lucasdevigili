require('dotenv').config();
const { Pool } = require("pg");
const format = require("pg-format");

const pool = new Pool({
host: "localhost",
user: "postgres",
password: "123456",
database: "node"
});

module.exports = pool;