const http = require('http');
const port = process.env.PORT || 3002;
var html =  `<input type="text">
        <button type="submit" > submit </button>
`;
const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader = ('Content-type','text\json');
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write(html);
    res.end('this is code with ibrahim file 7');
    // res.write('{"name":"ibrahim"}');
})
server.listen(port, ()=>{
    console.log(`Server is lisenting on port  ${port} file 7`);
})