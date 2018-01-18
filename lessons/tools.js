
var util = require("util");

/**
 * util.inherit
 * 
 */

function Base() {
    this.name = "base";
    this.base = 1991;
    this.sayHello= function() {
        console.log("Hello inner " + this.name);
    };
}

Base.prototype.sayHello = function() {
    console.log("Hello " + this.name);
}
Base.prototype.showName = function() {
    console.log(this.name);
};

function Sub() {
    this.name = "sub";
}

util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
objSub.sayHello();
console.log(objSub);

/**
 *  util.inspect 将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，
 * 即要转换的对象。
 */
function Person() {
    this.name = "byvoid";
    this.toString = function() {
        return this.name;
    }
}

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));

console.log("util.isArray([]): " + util.isArray([]));
console.log("util.isArray(new Array): " + util.isArray(new Array()));
console.log("util.isArray({}): " + util.isArray({}));

console.log("util.isRegExp(/some regexp/): " , util.isRegExp(/some regexp/));
 // true

console.log("util.isRegExp(new RegExp('another regexp')): ", util.isRegExp(new RegExp('another regexp')));
 // true

console.log("util.isRegExp({}): ", util.isRegExp({}));
 // false