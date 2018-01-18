var events = require("events")
var eventEmitter = new events.EventEmitter();

//监听器 #1
var listener1 = function listener1(arg1, arg2) {
    console.log('监听器 listener1 执行', arg1, arg2);
}

//监听器 #2
var listener2 = function listener2(arg1, arg2) {
    console.log('监听器 listener2 执行', arg1, arg2);
}

//绑定 connection 事件， 处理函数为listener1
eventEmitter.addListener('connection' ,listener1);

//绑定 connection 事件， 处理函数为listener2
eventEmitter.on('connection', listener2);

var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " 个监听器监听 connection 事件");

//触发 connection 事件
eventEmitter.emit('connection', '参数1', '参数2');

eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再监听");

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + ' 个监听器监听 connection 事件');

//触发 connection 事件
eventEmitter.emit('connection', '参数1', '参数2');

console.log('程序执行结束');

