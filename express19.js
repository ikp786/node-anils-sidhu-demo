var express = require('express');
var app = express();
const router = express.Router();

const checkUrl =  require('./middelware');
// app.use(checkUrl);
router.get('/',checkUrl, function (req, res) {
    res.sendFile(__dirname+"/Home.html");
});

router.get('/login',checkUrl, function (req, res) {
    res.sendFile(__dirname+"/login.html");
});

app.get('/about', function (req, res) {
    res.send("hello abut  jhjhjhus dd page");
});

app.get('/contact-us', function (req, res) {
    res.send("hello contact us page");
});
app.use('/',router);
app.listen(1222);