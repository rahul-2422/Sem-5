const mongoose = require("mongoose");
const ordersSchema = new mongoose.Schema({
    items: [
        {
            name:{
                type:String,
                required:true
            },
            price:{
                type: Number,
                required:true
            },
            quantity:{
                type: Number,
                required:true
            }
        }
    ],
    price: {
        type: Number,
        required: true,
    },
})
module.exports = mongoose.model("Orders", ordersSchema);
