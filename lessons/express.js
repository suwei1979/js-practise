// demo for express

var express = require('express');
var app = express();

app.use(express.static('public'));


app.get('/', function(request, response) {
    console.log('主页 GET 请求');
    response.send('Hello World from express demo<br/>');
    //response.send('Hello GET');

});

app.post('/', function(request, response) {
    console.log('主页 POST 请求');
    response.post('Hello POST');S
})

app.get('/del_user', function(request, response) {
    console.log('/del_user 响应 DELETE 请求');
    response.send('删除页面');
});

app.get('/list_user', function(request, response) {
    console.log('/list_user 响应 GET 请求');
    response.send('用户列表页面');
});

app.get('/ab*cd', function(request, response) {
    console.log('/ab*cd 响应 GET 请求');
    response.send('正则匹配');
});


var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('应用实例，访问地址为 http://%s:%s', host, port);
});
