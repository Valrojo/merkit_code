const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "testpass",
    host: "postgres_bd",
    port: 5432,
    database: "test_db"
});

module.exports = pool;