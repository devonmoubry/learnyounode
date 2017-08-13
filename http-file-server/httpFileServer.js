const fs = require('fs');
const http = require('http');
let port = process.argv[2];
let file = process.argv[3];

let server = http.createServer( (request, response) => {
  fs.createReadStream(file).pipe(response);
})
server.listen(port);
