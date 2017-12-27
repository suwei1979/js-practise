var http = require('http');

//options used by request
var options = {
    host : 'localhost',
    port : '8080', 
    path : '/index.html'
};

//handle the callback of response
var callback = function(response) {
    //update data continously
    var body = '';
    response.on('data', function(data) {
        body += data;
    });
    response.on('end', function() {
        //data received!
        console.log(body);
    });
};

var request = http.request(options, callback);
request.on('error', function(err) {
    console.log(err.message);
});
request.end();
