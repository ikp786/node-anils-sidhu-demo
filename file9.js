const http = require('http');
const uc = require('upper-case');
const port = process.env.PORT || 3002;
const server = http.createServer((req, res) => {    
    res.write(uc.upperCase('this is node web page'));
    res.end();
    
})
server.listen(port, ()=>{
    console.log(`Server is lisenting on port  ${port} file 7`);
})