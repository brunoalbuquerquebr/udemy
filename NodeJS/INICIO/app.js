var http = require("http");

http
  .createServer(function (req, res) {
    res.end("<h1>Servidor</h1>");
  })
  .listen(8181);

var calculadora = require("./calculadora");

console.log(calculadora.soma(10, 20));
console.log(calculadora.mult(10, 20));
console.log("porta 8181");
