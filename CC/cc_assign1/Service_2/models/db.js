const mongoose = require('mongoose');
const db= new mongoose.Schema({
    number:{
        type:Number,
        required:true
    }
})

const DB = mongoose.model('Db',db);
module.exports = DB;