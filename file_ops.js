var fs = require('fs');

var fsp = {
  readFile: function(path) {
    return new Promise(function(resolve, reject) {
      fs.readFile(path, 'utf8', function(err, data) {
        err ? reject(err) : resolve(data);
      })
    })
  },
  writeFile: function(path, string) {
    return new Promise(function(resolve, reject) {
      fs.writeFile(path, string, 'utf8', function(err, data) {
        err? reject(err) : resolve(string)
      })
    })
  }, 
  appendFile: function(path, string) {
    return new Promise(function(resolve, reject) {
      fs.appendFile(path, string, 'utf8', function(err, data) {
        err? reject(err) : resolve(string);
      })
    })
  }
};



// fsp.readFile('./data/lorem.txt')
//   .then(function(data) {
//     // Outputs the file data
//     console.log(data);
//   })
//   .catch(function(err) {
//     console.error(err);
//   });

// fsp.writeFile('./data/lorem.txt', 'this is now the file')
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(err) {
//     console.error(err);
//   });

fsp.appendFile('./data/lorem.txt', 'adding to file')
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });