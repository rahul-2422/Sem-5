const express = require("express");
const router = express.Router();
const {orders,getallorders,getoneorder}=require("../controllers/ordercontroller")
router.post("/orders",orders)
router.get("/getallorders",getallorders);
router.get("/getoneorder/:id", getoneorder);
module.exports=router;