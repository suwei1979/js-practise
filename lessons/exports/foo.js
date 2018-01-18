exports.a = function () {
    console.log(a);
};

exports.b = function () {
    console.log('b');
};

module.exports = {b: 2};

exports.b = 1;
exports.a = 1;