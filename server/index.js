const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json()); // req.body

//--Rutas--

// Get all
app.get("/", async(req, res) => {
    try{
        console.log("NORMAL GET from page!");
        const ans = await pool.query(
            "SELECT * FROM test_table;"
        );
        res.json(ans.rows);
    }catch(err){
        console.log(err.message);
    }
});

app.get("/testentry", async(req, res) => {
    try{
        console.log("GET from page!");
        const ans = await pool.query(
            "SELECT * FROM test_table;"
        );
        res.json(ans.rows);
    }catch(err){
        console.log(err.message);
    }
});

// Server
app.listen(5000, () => {
    console.log("[Server] started on port 5000.");
});

