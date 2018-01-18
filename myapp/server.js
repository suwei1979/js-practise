var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function (request, response) {
    response.send('Ritsu Yan');
});

app.get('/about', function(req, resp) {
    resp.send('the node course');
});

app.use(function (req, resp, next) {
    resp.status(404);
    resp.send('404 - Not Found');
});

app.listen(app.get('port'), function () {
    console.log('express started on port %d', app.get('port'));
});
