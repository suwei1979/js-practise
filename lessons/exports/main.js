var misc = require('./misc');
//var user = require('./user')('samuel', 'samuel@baidu.com');

console.log('Adding %d to 10 give us %d', misc.x, misc.addX(10));


var user = require('./user');
//return an object
var u = new user('samuel', 'samuel@baidu.com');

// return undefined, because the User function return nothing.
var u1 = user('samuel', 'samuel@baidu.com'); 

// return an object
var u2 = new user.User('samuel', 'samuel@baidu.com');

console.log('user from new directly: %s', u.name);
console.log('user from new user.User: %s', u1);
console.log('user from new user.User: %s', u2.name);

var power = require('./power')(9000);
console.log(power);

// it like this
var power = require('./power');
console.log(power(9001));

var x = require('./foo');
console.log(x.a);
console.log(x.b);
