const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function (data) {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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
  // console.log(conn)
  return conn;
}
// connect();

module.exports = { connect };