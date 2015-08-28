var numbers = process.argv.slice(2);
var sum =0;
numbers.forEach(function (n) {sum+=parseInt(n,10);});
console.log(sum);