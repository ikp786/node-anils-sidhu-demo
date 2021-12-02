const express = require('express');
const app = express();
app.set('view engine','ejs');
app.get("/profile/:name",function(req,res){
console.log(req.params.name);
    // res.sendFile(__dirname+'/Home.html');
    data = {email:'test@gmail.com',address:'Jaipur',skils:['Php','Node js','Laravel','Codeigniter']}
    res.render('about',{name:req.params.name,data:data});
});
app.listen(2000);