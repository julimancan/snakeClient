

/**
 * Establishes connection with the game server
 */
const { connect } = require('./client');
console.log('Connecting ...');
connect();

const { setupInput } = require('./input');


setupInput();
