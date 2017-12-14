/**
 * Node.js 服务器，简约而不简单
 */
//practise for create the first server
//var http = require("http");
//http.createServer(function(request, response) {
//    response.writeHead(200, {'Content-Type':'text/plain'});
//    response.end('Hello World');
//}).listen(8888);

//console.log("Server running at http://127.0.0.1:88888");

// practise for router

var http = require("http");
var url = require("url");

function start(router) {
    function onRequest(request, response) {
        var pathName = url.parse(request.url).pathname;
        console.log("Request for " + pathName + " received.");
        router(pathName);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();    
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
    
}
exports.start = start;
