// const http = require('http');

// http.createServer(function(req,res){
// res.write('Hello ');
// res.end();
// }).listen(500);
// console.log('ddddddddddddddddd');

const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader = ('Content-type','text/html');
    res.end('this is code with ibrahim');
})

server.listen(port, ()=>{
    console.log(`Server is lisenting on port ${port}`);
})