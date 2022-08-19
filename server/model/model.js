const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
        unique: false
    },
    lastName : {
        type: String,
        required: true,
        unique: false
    },
   
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;