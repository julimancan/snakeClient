const net = require('net');

const connect = function (data) {
  const conn = net.createConnection({
    host: '135.23.222.148',
    port: 50541
  });
  // interpret incoming data as text
  conn.on('data', data => {
    console.log(data);
  })
  conn.on('connect', message => {
    console.log("Connection established begin time wasting activity now!")
  })
  conn.on('connect', () => {
    conn.write('Name: JUL');
  });
  // conn.on('connect', () => {
  //   setInterval(() => conn.write("Move: up"), 50)
  // })
  conn.setEncoding('utf8');
  return conn;
}


module.exports = { connect };