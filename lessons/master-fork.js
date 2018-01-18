//Node.js 多进程示例，主进程
//以 fork 方式创建子进程

const fs = require('fs');
const child_precess = require('child_process');

for (var i =0; i < 3; i++) {
    var workerProcess = child_precess.fork('support.js', [i + 1]);
    workerProcess.on('close', function(code) {
        console.log('Child process has exited, the exit code is ' + code);
    });
}