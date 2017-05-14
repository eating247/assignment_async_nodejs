var Emitter = require('events')

// var Emitter = require('./emitter.js');
var emitter = new Emitter();

var listener1 = function listener1() {
  console.log("Running listener1.");
};

var listener2 = function listener2() {
  console.log("Running listener2.");
}

var listener3 = function listener3() {
  console.log("Running listener3.");
}

emitter.on("event", listener1)
       .on("event", listener2)
       .on("event", listener3)
emitter.emit('event');
emitter.removeListener('event', listener1);
console.log(emitter)
emitter.removeAllListeners('event');
console.log(emitter)