var express = require('express');


var app = express();

app.get('/', function(request, response) {
    response.send('Hello World!');
});

app.post('/', function(request, response) {
    
});

app.use(express.static('public'));

var server = app.listen(3001, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
