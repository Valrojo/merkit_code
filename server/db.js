const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "1212",
    host: "localhost",
    database: "merkitdb"
});

module.exports = pool;