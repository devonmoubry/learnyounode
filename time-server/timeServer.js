const net = require('net');
const portNum = process.argv[2];

function zeroFill(n) {
  return (n < 10 ? '0' : '') + n
}

function now() {
  let d = new Date();
  return d.getFullYear() + '-' +
  zeroFill((d.getMonth()+ 1)) + '-' +
  zeroFill(d.getDate()) + ' ' +
  zeroFill(d.getHours()) + ':' +
  zeroFill(d.getMinutes()) + '\n';
}

let server = net.createServer( (socket) => {
  socket.end(now());
});
server.listen(portNum);
