const express = require("express");
const router = express.Router();

const { addfooditem, getallfooditems, getonefooditem } = require("../controllers/foodcontroller");
router.post("/addfooditem", addfooditem);
router.get("/getallfooditems", getallfooditems);
router.get("/getonefooditem/:id", getonefooditem);
module.exports = router;
