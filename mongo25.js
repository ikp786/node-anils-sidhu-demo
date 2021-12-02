const express = require('express');
const app = express();
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://avenger:LLxSkdRGR8S6Qn7r@cluster0.cr3fp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/youtube',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}
).then(()=>{
    console.log('db connected');
}) 