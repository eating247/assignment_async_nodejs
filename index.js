var p = Promise.resolve("Hello Promise!");

// p.then(function(message) {
//   setTimeout(function() {
//     console.log(message);
//   }, 1000)
// })

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

var squared = function(num) {
  return new Promise( function(resolve, reject) {
    if (num) {
      resolve(Math.pow(num, 2));
    } else {
      reject();
    };
  })
}


var promises = [1,2,3,4,5,6,7,8,9].map( function(i) {
  return squared(i)
})

Promise.all(promises).then(function(result) {console.log(result)}).catch( function() { console.log('rejected')})