const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require("./models/db");

mongoose
    .connect("mongodb+srv://ccservice1:ccservice1@cluster0.vx9p7sw.mongodb.net/test", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connection to MONGO successful");
    })
    .catch((err) => {
        console.log("error connecting to mongo");
    });

app.use(express.urlencoded({ extended: true }));
app.listen(8000, () => {
    console.log("Website running on port:8000");
});

app.get("/", async (req, res) => {
    const data = await db.find();
    const sum = data.reduce((r, item) => r + item.number, 0);
    const size = data.length;
    const avg = String((sum / size).toFixed(4));
    res.send(avg);
});
