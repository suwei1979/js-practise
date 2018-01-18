var Hello = require("./hello");
var hello = new Hello();
var util = require("util");

hello.setName("Xiao wen")
hello.sayHello();

// System tool module
var os = require("os");
console.log("os.tmpdir: " + os.tmpdir());
console.log("os.endianness: " + os.endianness());
console.log("os.hostname: " + os.hostname());
console.log("os.type: " + os.type());
console.log("os.platform: " + os.platform())
console.log("os.arch: " + os.arch());
console.log("os.release: " + os.release());
console.log("os.uptime: " + os.uptime());
console.log("os.loadavg: " + os.loadavg());
console.log("os.totalmemory: " + os.totalmem() + "bytes");
console.log("os.freemem: " + os.freemem() + "bytes");
console.log("os.cpus: " + util.inspect(os.cpus()));
console.log("os.netowrkInterfaces: " + util.inspect(os.networkInterfaces()));
console.log("os.EOL: " + os.EOL);

var path = require("path");
console.log("normalization: " + path.normalize("/test/test1//2slashes/1slash/tab/.."));
console.log("joint path: " + path.join("/test", "test1", "2slashes/1slash", "tab", ".."));
console.log("resolve: " , path.resolve("main.js"));
console.log("ext name : " + path.extname("main.js"));
