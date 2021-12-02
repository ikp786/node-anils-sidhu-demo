const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3002;
const server = http.createServer((req, res) => {    
    fs.readFile('file12.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
    
})
server.listen(port, ()=>{
    console.log(`Server is lisenting on port  ${port} file 11`);
})