var fs = require("fs");
var data = "";


// 1. read data from stream
var readerStream = fs.createReadStream("./data/input.txt");

readerStream.setEncoding("UTF8");

readerStream.on("data", function(chunk) {
    data += chunk;
});

readerStream.on("end", function() {
    console.log(data);
});

readerStream.on("error", function(err) {
    console.log(err.stack);
})

console.log("读取程 input.txt 完毕");

// 2. write data into stream
var outputData = "菜鸟教程官网地址： www.runoob.com";
var writerStream = fs.createWriteStream("./data/output.txt");

writerStream.write(outputData, "UTF8");

writerStream.end();

writerStream.on("finish", function() {
    console.log("写入完成, data is: " + outputData);
});

writerStream.on("error", function(err) {
    console.log(err.stack);
})

console.log("写入 output.txt 完毕");

// pipeline operation sample
var pipeLineReader = fs.createReadStream("./data/input-pipe.txt");
var pipeLineWriter = fs.createWriteStream("./data/output-pipe.txt");

pipeLineReader.pipe(pipeLineWriter);

console.log("Pipe Line 写入 ./data/output-pipe.txt 完毕.")

// pipeline chain
var zlib = require("zlib");

fs.createReadStream("./data/input.txt.gz").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("./data/output-from-compress.txt"))

console.log("文件解压缩完成");

console.log("程序执行完毕");

