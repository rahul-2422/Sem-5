const mongoose = require('mongoose');
const db= new mongoose.Schema({
    number:{
        type:Number,
        required:true
    }
})
module.exports = mongoose.model('Db',db);