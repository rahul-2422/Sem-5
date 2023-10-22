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
        console.log("Connection to mongo successful");
    })
    .catch((err) => {
        console.log("error connecting to mongo");
    });

app.use(express.urlencoded({ extended: true }));
app.listen(5000, () => {
    console.log("Website running on port:5000");
});

app.get("/", async (req, res) => {
    const value = req.query.msg;
    data = new db({
        number: Number(value),
    });
    await data.save();
    res.send("Entered " + value)
});
