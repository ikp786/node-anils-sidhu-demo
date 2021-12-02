var express = require('express');
var app = express();
app.get('/',function(req,res){
res.send("hello express node js");
}).listen(1222);