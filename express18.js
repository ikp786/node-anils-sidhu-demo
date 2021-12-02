var express = require('express');
var app = express();
const router = express.Router();

const checkUrl =  require('./middelware');
// app.use(checkUrl);
router.get('/login',checkUrl, function (req, res) {
    res.send("hello Home page");
});

app.get('/about', function (req, res) {
    res.send("hello abut  jhjhjhus dd page");
});

app.get('/contact-us', function (req, res) {
    res.send("hello contact us page");
});
app.use('/',router);
app.listen(1222);