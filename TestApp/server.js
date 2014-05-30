/**
 * New node file
 */
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('NodeJS HElloWorld.......... ');
}).listen(1337, '127.0.0.1');
console.log('Server running at blvprasad.com');
