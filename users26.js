const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    city:String
});
module.exports = mongoose.model('users',userSchema);