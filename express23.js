const express = require('express');
const app = express();
app.use('/assets',express.static('assets'))
app.set('view engine','ejs');

app.get("/",function(req,res){
    console.log(req.params.name);
        res.render('home');
    });
app.get("/profile/",function(req,res){
console.log(req.params.name);
    res.render('about');
});
app.get("/login/",function(req,res){
    console.log(req.params.name);
        res.render('login');
    });


app.listen(2000);