var express = require('express');
var fs = require('fs');

var app = express();

//获取用户列表
app.get('/listUsers', function(request, response) {
    fs.readFile(__dirname + '/data/' + 'users.json', 'utf8', function(err, data) {
        console.log(data);
        response.end(data);
    });
});

//添加用户
var user = { 
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "prefession" : "teacher",
        "id" : 4
    }
};

app.get('/addUser', function(request, response) {
    fs.readFile(__dirname + '/data/' + 'users.json', 'utf8', function(err, data) {
        data = JSON.parse(data);
        data['user4'] = user['user4'];
        console.log(data);
        response.end(JSON.stringify(data));
    });
});
//显示用户详情
app.get('/:id', function(request, response) {
    fs.readFile(__dirname + '/data/' + 'users.json', 'utf8', function(err, data) {
        data = JSON.parse(data);
        var user = data['user' + request.params.id];
        console.log(user);
        response.end(JSON.stringify(user));

    });
});
//删除用户
app.get('/deleteUser', function(request, response) {
    fs.readFile(__dirname + '/' + 'users.json', 'utf8', function(err, data) {
        data = JSON.parse(data);
        delete data['user' + 2];
        console.log(data);
        response.end(JSON.stringify(data));
    });
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例， 访问地址为 http://%s:%s', host, port);

})