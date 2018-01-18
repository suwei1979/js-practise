var User = function(name, email) {
    this.name = name;
    this.email = email;

};

module.exports = User;
module.exports.User = User;
//module.exports.User = User;
//how are they used?
//var u = new user.User();
//vs
//var u = new user();