function Emitter() {
  this._events = {};
  this.on = function(eventType, callback) {
    if (!this._events[eventType]) {
      this._events[eventType] = [callback];
    } else {
      this._events[eventType].push(callback);
    }
    return this;
  };
  this.emit = function(eventType) {
    this._events[eventType].forEach(function(callback) {
      callback();
    })
  };
  this.removeListener = function(eventType, callback) {
    for (var i = 0; i < this._events[eventType].length; i++) {
      if (this._events[eventType][i] === callback) {
        this._events[eventType].splice(i, 1);
      }
    }
  };
  this.removeAllListeners = function(eventType) {
    this._events[eventType] = [];
  }
}

module.exports = Emitter;