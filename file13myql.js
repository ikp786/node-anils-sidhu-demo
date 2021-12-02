var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"urbon-clap"
});

con.connect(function(error){
    if (error) {
        throw error;
    }else{
        con.query("select * from users",function(error,result){
             if (error) {
                 throw error;
             }else{
                 console.log('all result',result[0].name);
             }
        })
    }
});