const express = require('express');
const app = express();
const mongoose = require('mongoose')
const User = require('./models/users30');
mongoose.connect('mongodb+srv://avenger:LLxSkdRGR8S6Qn7r@cluster0.cr3fp.mongodb.net/youtubemyFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
app.get('/users',function(req,res){
    var data =User.find().then((data)=>{
        res.json(data);
    });
});
app.listen(4900);