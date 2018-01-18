var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';
var argv = process.argv;

function printUsage() {
    var usage = 'Usage: node db-mongodb.js [options] \n\n' +
    'Options:\n' +
    '\t-i, --insert\t\t execute the insert data block\n' +
    '\t-u, --update\t\t execute the update data block\n' +
    '\t-q, --query\t\t execute the queryt data block\n' +
    '\t-d, --delete\t\t execute the delete data block\n' + 
    '\t-t, --truncate\t\t execute the truncate data block\n' +
    '\t--init, \t\t init mongodb\n';
    
    console.log(usage);
}

if (argv.length <=2) {
    printUsage();
}

var command = argv[2];
var options = {
    server: {
        auto_reconnect: true,
        poolSize: 10
    }
}

if (command == '--init') {
    mongoClient.connect(url, options, function(err, db) {
        if (err) throw err;
        console.log('数据库已创建！');
        var dbase = db.db('mydb');
        dbase.createCollection('runoob', function(err, result) {
            if (err) throw err;
            console.log('集合已创建！');
            db.close();
        });
        db.close();
    });
}



