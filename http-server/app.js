const http = require('http');
const port = 7070;

const server = http.createServer((req,res) => {
    debugger;
    res.end('Hello, world');
});

server.listen(port, () => {
    console.log('Server listen to port on : http://localhost:%s', port);
});