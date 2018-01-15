/**
 * 创建一个服务器，指定其router
 * 
 */

var server = require("./server");
var router = require("./router");

server.start(router.router);
