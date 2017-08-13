require('./program');
// HELLO WORLD
// console.log("HELLO WORLD");\

// BABY STEPS
// var result = 0
//
//   for (var i = 2; i < process.argv.length; i++) {
//     result += Number(process.argv[i])
//   }
//
// console.log(result)
// MY FIRST I/O!
// const fs = require('fs');
// let myBuffer = fs.readFileSync(process.argv[2]);
// let bufString = myBuffer.toString().split('\n').length-1;
// console.log(bufString);
// MY FIRST ASYNC I/O!
// const fs = require('fs');
// let myBuffer = fs.readFile(process.argv[2], 'utf8', function (err, data) {
//   if (err) throw err;
//   console.log(data.split('\n').length-1);
// });

// FILTERED LS
// const fs = require('fs');
// const path = require('path');
// let pathname = process.argv[2];
// let fileExt = '.' + process.argv[3];
// fs.readdir(pathname, (err, list) => {
//   if (err) throw err;
//   list.forEach( (file) => {
//     if (path.extname(file) === fileExt) {
//       console.log(file);
//     }
//   })
// })
