const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function (data) {
  const conn = net.createConnection({
    host: '135.23.222.148',
    port: 50541
  });
  // interpret incoming data as text
  conn.on('data', data => {
    console.log(data);
  })
  conn.setEncoding('utf8');
  return conn;
}


console.log('Connecting ...');
connect();


module.exports = { connect };