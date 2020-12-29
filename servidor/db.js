const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "a",
    host: "localhost",
    database: "merkitdb"
});

module.exports = pool;