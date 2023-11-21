var url = require('url');

var adr1 = 'http://localhost:8000/index.html?a=1&b=2';
var adr2 = 'http://localhost:8000/black.html';
var adr3 = 'http://localhost:8000/cat.jpeg';

var q1 = url.parse(adr1, true);
var q2 = url.parse(adr2, true);

console.log(q1.pathname);
console.log(q2.pathname);