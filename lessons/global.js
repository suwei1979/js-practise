/**
 * practice for global variables and objects. 
 * 
 */

console.info("程序开始执行：");
console.log(__filename);
console.log(__dirname);

function printHello() {
    console.log("Hello World!");
}

var t = setTimeout(printHello, 2000);

//clearTimeout(t);
//setInterval(printHello, 2000);

var  counter = 10;
console.log("计数： %d", counter);

console.time("获取数据");

//
// 执行一些代码
//

console.timeEnd("获取数据");


process.on("exit", function(code) {
    setTimeout(function() {
        console.log("改代码不会被执行");
    });
    console.log("退出码为： %d", code);

});

process.stdout.write("Hello World from process.stdout.write()!" + "\n");

console.log("当前程序执行参数： ");
process.argv.forEach(function(val, index, array) {
    console.log("\t" + index + ":" + val);
})

console.log("当前程序执行路径： " + process.execPath);
console.log("当前程序执行平台： " + process.platform);
console.log("当前目录： " + process.cwd());
console.log("当前版本" + process.version);

console.log("当前内存使用情况如下： ");
console.log(process.memoryUsage());


console.info("程序执行结束.");
