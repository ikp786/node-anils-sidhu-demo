const http = require('http');
const port = process.env.PORT || 3002;
const server = http.createServer((req, res) => {    
    res.write('hell nodemon start');
    res.end();
    
})
server.listen(port, ()=>{
    console.log(`Server is lisenting on port  ${port} file 11`);
})