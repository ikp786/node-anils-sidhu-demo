const express = require('express');
const app = express();
const mongoose = require('mongoose')
const User = require('./models/users28');
mongoose.connect('mongodb+srv://avenger:LLxSkdRGR8S6Qn7r@cluster0.cr3fp.mongodb.net/youtubemyFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
const data = new User({
    _id: new mongoose.Types.ObjectId(),
    name: 'Rajkumar row',
    city: 'Bikaner',
    email: 'rajkumar@gmail.com',
    mobile: 9602625743
});

data.save().then((result) => {
    console.log(result);
});