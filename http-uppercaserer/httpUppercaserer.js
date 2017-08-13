const http = require('http');
const map = require('through2-map');
let port = process.argv[2];

let server = http.createServer( (request, response) => {
  if (request.method == 'POST') {
    request.pipe(map( (chunk) => {
      return chunk.toString().toUpperCase();
    })).pipe(response);
  }
})
server.listen(port);
