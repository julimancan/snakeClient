let connection;


const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === '1') {
    connection.write('Say: Aw did u die?')
  }
  if (key === '2') {
    connection.write('Say: why did u do that?')

  }
}
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
}



module.exports = { setupInput };