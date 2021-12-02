const express = require('express');
const app = express();
const mongoose = require('mongoose')
const User = require('./users26');
mongoose.connect('mongodb+srv://avenger:LLxSkdRGR8S6Qn7r@cluster0.cr3fp.mongodb.net/youtubemyFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('db connected');
})
// async function getData() {
   const  response =  User.find({}, async function (err, users) {
    //    const user = await response.json();
        if (err) console.log(err)
        console.log(users)
        // const user = await dd.json();
    return users;
    })
// }
// let a  = getData();
//     console.log(a);
//     a.then(data => console.log(data));