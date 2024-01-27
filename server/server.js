const http = require('http');
const app = require('../app/app');

const port = 3000;

const server = http.createServer(app);

server.listen(port);

module.exports = server;