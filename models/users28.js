const mongoose = require('mongoose');
let userSchma = new mongoose.Schema({

    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    mobile:String,
    city:String
});

module.exports = mongoose.model('users',userSchma);