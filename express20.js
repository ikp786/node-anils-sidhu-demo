const express = require('express');
const app = express();
app.set('view engine','ejs');
app.get("/profile/:name",function(req,res){
console.log(req.params.name);
    // res.sendFile(__dirname+'/Home.html');
    res.render('about',{name:req.params.name});
});
app.listen(2000);