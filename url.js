var url=require('url');
var addr="http://localhost:8080/home.html?year=2018&month=feb";
var q=url.parse(addr,true);
console.log(q.host)
console.log(q.pathname)
console.log(q.search)