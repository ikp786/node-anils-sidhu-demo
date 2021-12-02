const express = require('express');
const app = express();
app.set('view engine','ejs');

app.get("/",function(req,res){
    console.log(req.params.name);
        res.render('about');
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