const express = require('express');
const app = express();
app.use('/assets', express.static('assets'));
var bodyParser = require('body-parser');
var encoder = bodyParser.urlencoded({ extended: true });
app.set('view engine', 'ejs');

app.get("/profile:name", function (req, res) {

    data = { email: 'ebrahimkhan@gmail.com', city: 'Jaipur', skills: ['Php', 'node', 'html'] }
    res.render('profile', { name: req.params.name, data: data })

});
app.get("/",function(req,res){
    console.log(req.params.name);
        res.render('home24');
    });
app.post("/login/",encoder, function (req, res) {
    console.log(req.body);
    res.render('login24');
});

app.listen(2000);