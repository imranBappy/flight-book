const { createStore } = require("redux");
const { default: flightReducer } = require("./flight/flightReducer");



const store = createStore(flightReducer);

module.exports = store;