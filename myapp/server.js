var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
app.all('*', function (request, response, next) {
    console.log('In comes a ' + request.method + ' to ' + request.url);
    response.writeHead(200, {"Content-Type": 'text/plain'});
    next();
})
app.get('/', function (request, response) {
    response.write('Ritsu Yan');

});

app.get('/about', function(req, resp) {
    resp.write('the node course');
});

app.use(function (req, resp) {
    resp.status(404);
    resp.end('404 - Not Found');

});

app.use(function (request, response) {
    response.status(200);
    console.log('a request processed, status is ' + response.getHeaderNames());
})

app.listen(app.get('port'), function () {
    console.log('express started on port %d', app.get('port'));
});
