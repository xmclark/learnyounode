var fs = require('fs');

// nnl = number of new lines
var nnl = fs.readFileSync(process.argv[2],{encoding:'utf8'}).split('\n').length-1;


console.log(nnl);