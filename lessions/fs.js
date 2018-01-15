var fs = require("fs");

var INPUT = "./data/input.txt"
// read asynchronous
fs.readFile(INPUT, function(err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
});

var data = fs.readFileSync(INPUT);
console.log("同步读取： " + data.toString());
fs.stat(INPUT, function(err, stats) {
    console.log(INPUT + " isFile: " + stats.isFile());
    console.log(stats);
});


console.log("程序执行完毕。");
