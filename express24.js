const express = require('express');
const app = express();
app.use('/assets',express.static('assets'))
app.set('view engine','ejs');

app.get("/",function(req,res){
    console.log(req.params.name);
        res.render('home24');
    });
app.get("/profile/",function(req,res){
console.log(req.params.name);
    res.render('about24');
});
app.get("/login/",function(req,res){
    console.log(req.query);
        res.render('login24');
    });


app.listen(2000);