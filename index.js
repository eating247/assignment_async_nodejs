var p = Promise.resolve("Hello Promise!");

p.then(function(message) {
  setTimeout(function() {
    console.log(message);
  }, 1000)
})

var delay = function(milliseconds) {
  return new Promise( function(resolve) {
    setTimeout( function() {
      resolve(milliseconds);
    }, milliseconds)
  });
}

var countDown = function(result) {
  console.log(result)
  if (result > 0) {
    return delay(result - 100);
  } else {
    console.log("Done!")
  }
};

delay(1000)
  .then(countDown) //=> 1000
  .then(countDown) //=> 900
  .then(countDown) //=> 800
  .then(countDown) //=> 700
  .then(countDown) //=> 600
  .then(countDown) //=> 500
  .then(countDown) //=> 400
  .then(countDown) //=> 300 
  .then(countDown) //=> 200
  .then(countDown) //=> 100
  .then(countDown); //=> Done!