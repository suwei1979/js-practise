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
var util = require("util");
var queryString = require("querystring");
var postHTML = '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' + 
    '<body>' + '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

function start(router) {
    function onRequest(request, response) {
        //practice for server
        var pathName = url.parse(request.url).pathname;
        var params = url.parse(request.url, true).query;
        var body = "";

        request.on("data", function(chunk) {
            body += chunk;
        });
        request.on("end", function() {
            body = queryString.parse(body);
            router(pathName);
         
            response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
            
            if(body.name && body.url) {
                response.write("Hello World!");
                response.write("<br />");
                response.write("网站名： " + body.name);
                response.write("<br />");
                response.write("网站 URL：" + body.url);
                response.write("<br />");
            } else {
                response.write(postHTML);

            }
            
            response.end(util.inspect(body));    
                
        });
        
        console.log("Request for " + pathName + " received.");


    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
    
}
exports.start = start;
