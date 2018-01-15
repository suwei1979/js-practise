var dns = require('dns');

dns.lookup('www.github.com', function onlookup(err, address, family) {
    console.log('ip adress: ', address);
    dns.reverse(address, function(err, hostnames) {
        if (err) {
            console.log(err.stack);
        }
        console.log('reverse resolving: ' + address, ': ' + JSON.stringify(hostnames));
    });
});