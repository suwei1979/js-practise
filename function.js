/**
 * Node.js function usage
 */

 function execute(someFunction, value) {
    someFunction(value);
 }

 function say(word) {
     console.log(word);
 }

 execute(say, "Hello");
 execute(function(word) {
     console.log(word);
 }, "Hello from anonymous function~");

 var http = require("http");
 http.createServer(function(request, response) {
 
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();

}).listen(8888);

/**
 function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
 }

http.createServer(onRequest).listen(8888);
 */
