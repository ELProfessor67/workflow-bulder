const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World');
});

console.log('Server is running on port 3000');
server.listen(3000);
