const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

var db = new sqlite3.Database(":memory:");
const db_name = path.join(__dirname, "dummytable.db");

db = new sqlite3.Database(db_name, (err) => {
    if (err) {
        return console.log(err.message);
    }
    console.log("Database connection successfully established");
});
app.listen(8000, () => {
    console.log("LISTENING TO PORT:8000");
});

const sql = `CREATE TABLE IF NOT EXISTS dummytable(ts TIMESTAMP,gender VARCHAR(20),favcuisine varchar(255),curhabits varchar(255),skipbreakfast varchar(255),coffeefreq varchar(255));`;

db.run(sql, (err) => {
    if (err) {
        return console.log(err.message);
    }
    console.log("Table created successfully");
});

app.get("/display", (req, res) => {
    const sql = "SELECT * FROM dummytable order by ts desc";
    db.all(sql, (err, rows) => {
        if (err) {
            res.send({ message: "failed", error: { err } });
        }

        res.send({ message: "success", data: { model: rows } });
    });
});
app.post("/submit", (req, res) => {
    console.log(req.body);
    const gender = req.body.data.gender;
    const favcuisine = req.body.data.favcuisine;
    const curhabits = req.body.data.curhabits;
    const skipbreakfast = req.body.data.skipbreakfast;
    const coffeefreq = req.body.data.coffeefreq;
    const query = "insert into dummytable values (CURRENT_TIMESTAMP,?,?,?,?,?);";
    const result = [gender, favcuisine, curhabits, skipbreakfast, coffeefreq];

    db.run(query, result, (err) => {
        if (err) {
            res.send({ message: "failed", error: { err } });
        }

        res.send({ message: "success", data: result });
    });
});
