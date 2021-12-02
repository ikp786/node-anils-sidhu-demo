var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send("hello Home page");
});

app.get('/about', function (req, res) {
    res.send("hello abut  jhjhjhus dd page");
});

app.post('/contact-us', function (req, res) {
    res.send("hello contact us page");
});

app.listen(1222);