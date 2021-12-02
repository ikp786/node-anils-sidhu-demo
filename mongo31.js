

const { urlencoded } = require('express');
const express = require('express');
require("dotenv").config();
const app = express();
const mongoose = require('mongoose')
const User = require('./models/users30');
const multer = require('multer');
const path = require("path");
app.use(urlencoded({ extended: true }));
var storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, './uploads');
    },
    filname: function (request, file, callback) {
        console.log(file);
        callback(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
});
const upload = multer({ storage: storage });
var bodyParser = require('body-parser');
// var jsonParsesr = bodyParser.json();
var encoder = bodyParser.urlencoded({ extended: true });

app.set('view engine', 'ejs');
mongoose.connect('mongodb+srv://avenger:LLxSkdRGR8S6Qn7r@cluster0.cr3fp.mongodb.net/youtubemyFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
app.get('/users', function (req, res) {
    var data = User.find().then((data) => {
        res.json(data);
    });
});
app.post('/user', upload.single('profile_picture'), function (req, res) {
    // console.log(req.body.name);
    // res.end(req.body);
    // res.end('kkkkkkkkk');

    const data = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        city: req.body.city
    });
    data.save().then((result) => {
        res.status(201).json(result);
        console.log(result)
    })
        .catch((error) => console.warn(error)
        )
});

app.delete('/delete/:id', function (req, res) {
    User.deleteOne({ _id: req.params.id }).then((result) => {
        res.status(200).json(result)
    })
        .catch((error) => { console.log(error) })
});

app.put('/update/:id', function (req, res) {
    User.updateOne(
        { _id: req.params.id },
        {
            $set: {
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                city: req.body.city
            }
        }
    ).then((result) => {
        res.status(200).json(result)
    })
        .catch((error) => { console.log(error) })
});
// app.get('/search', function (req, res) {
//     console.log('ddddddd')
// });

app.get('/search/:name', function (req, res) {
    var regex = new RegExp(req.params.name, 'i');
    User.find({ name: regex }).then((result) => {
        res.status(200).json(result);
    });
});

app.listen(4900);