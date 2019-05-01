
//BABY STEPS

//     var sum = 0;
//     for (var i = 2; i < process.argv.length; i++) {
//          sum += Number(process.argv[i]);
//     }
// console.log(sum);

//FIRST I/O!

// var fs = require('fs')

// var content = fs.readFileSync(process.argv[2]).toString();
// //or use... var content = fs.readFileSync(process.argv[2], 'utf8'); to get a string

// var ary = content.split('\n');

// console.log(ary.length - 1);

//FIRST ASYNC I/O

var fs = require('fs')

fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if (err) throw err;
   console.log(data.split('\n').length - 1);
});
//or use... var content = fs.readFileSync(process.argv[2], 'utf8'); to get a string

