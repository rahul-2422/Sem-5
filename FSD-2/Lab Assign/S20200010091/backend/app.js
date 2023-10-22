const express = require("express");
const app = express();
const cors = require("cors");
const fooditemroute = require("./routes/fooditemroute");
const ordersroute = require("./routes/ordersroute");

app.use(express.json());
app.use(fooditemroute);
app.use(ordersroute);
app.use(cors());

module.exports=app;