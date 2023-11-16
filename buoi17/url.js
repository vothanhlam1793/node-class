var url = require('url');

var adr = 'http://localhost/black/vtl/default.htm?year=2017&month=february&a=8&b=9';

var q = url.parse(adr, true);


// HOST: hostname:port
// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'
var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata); //returns 'february'