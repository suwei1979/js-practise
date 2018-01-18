// Introduce the events module
var events = require('events');

// Create the object eventEmitter
var eventEmitter = new events.EventEmitter();

// Create the the event handler 
var connectHandler = function connected() {
    console.log('连接成功');

    //
    eventEmitter.emit('data_received');
    
}

eventEmitter.on('connection',connectHandler);
eventEmitter.on('data_received', function() {
    console.log('数据接收成功');

});
eventEmitter.emit('connection');
console.log('程序执行完毕');
