//Node.js 多进程示例，主进程
//以 cluter 方式创建子进程

const cluster = require('cluster');
const http = require('http');
const numCpus = require('os').cpus().length;

if (cluster.isMaster) {
    //Fork workers.
    for (var i = 0; i < numCpus; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker $(worker.process.pid} died`);
    });
} else {
    http.createServer((request, response) => {
        response.writeHead(200);
        response.end('Hello World!\n');
    }).listen(8080);
}
