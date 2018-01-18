//Node.js 多进程示例，主进程
//以 spawn 方式创建子进程

const fs = require('fs');
const child_process = require('child_process');

for (var i = 0; i < 3; i++) {
    var workerProcess = child_process.spawn('node', ['support.js', i + 1]);
    workerProcess.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
    });

    workerProcess.stderr.on('data', function(data) {
        console.log('stderr: ' + data);
    });

    workerProcess.on('close', function(code) {
        console.log('Child process has exited, the exit code is ' + code);
    });
}