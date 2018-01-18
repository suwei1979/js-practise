var mysql = require('mysql');


function printUsage() {
    var usage = 'Usage: node db-mysql.js [options] \n\n' +
    'Options:\n' +
    '\t-i, --insert\t\t execute the insert data block\n' +
    '\t-u, --update\t\t execute the update data block\n' +
    '\t-q, --query\t\t execute the queryt data block\n' +
    '\t-d, --delete\t\t execute the delete data block\n' + 
    '\t-t, --truncate\t\t execute the truncate data block\n' +
    '\t--init, \t\t init table data\n';
    
    console.log(usage);
}

if (process.argv.length <= 2) {
    printUsage();
    return;
}

var command = process.argv[2];
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'test',
    password: 'test1234',
    database: 'test'
});
connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) {
        throw error;
    }
    console.log('The solution is: ' + results[0].solution);
});

if (command == '-i' || command == '--insert') {
    var addSql = 'INSERT INTO websites(ID, name, url, alexa, country) values (0, ?, ?, ?, ?)';
    var addSqlParams = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN'];
    
    connection.query(addSql, addSqlParams, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
        }
        console.log('---------------------------------INSERT---------------------------------');
        console.log('INSERT ID:', result);
        console.log('------------------------------------------------------------------------\n\n');
    });
    
} else if (command == '-u' || command == '--update') {
    var modSql = 'UPDATE websites SET name = ?, url = ? WHERE ID = ?';
    var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com', 6];
    
    connection.query(modSql, modSqlParams, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
        }
        console.log('---------------------------------UPDATE---------------------------------');
        console.log('UPDATE ID:', result);
        console.log('------------------------------------------------------------------------\n\n');
        
    });
    
} else if (command == '-q' || command == '--query') {
    var sql = 'SELECT * FROM websites';
    
    connection.query(sql, function (error, result) {
        if (error) {
            console.log('[SELECT ERROR] - ' + error.message);
            return;
        }
        console.log('---------------------------------SELECT---------------------------------');
        console.log(result);
        console.log('------------------------------------------------------------------------\n\n');
    });
    
} else if (command == '-d' || command == '--delete') {
    if (process.argv.leng <= 4) {
        printUsage();
        return;
    }
    var id = process.argv[3];
    var delSql = 'DELETE FROM websites WHERE ID = ' + id;
    connection.query(delSql, function(err, result) {
        if (err) {
            console.log('[DELETE ERROR] - ' + err.message);
            return;
        }
        console.log('---------------------------------SELECT---------------------------------');
        console.log('DELETE AFFECTED ROWS - ' + result.affectedRows);
        console.log('------------------------------------------------------------------------\n\n');
    })
} else if (command == '-t' || command == '--truncate') {
    var trunSql = 'truncate websites';
    
    connection.query(trunSql, function (err, result) {
        if (err) {
            console.log('[TRUNCATE ERROR] - ', err.message);
        }
        console.log('---------------------------------TRUNCATE---------------------------------');
        console.log('TRUNCATE AFFECTED ROWS:', result);
        console.log('------------------------------------------------------------------------\n\n');
    });
} else if (command == '--init') {
    var initSql = "INSERT INTO `websites` VALUES ('1', 'Google', 'https://www.google.cm/', '1', 'USA'), ('2', '淘宝', 'https://www.taobao.com/', '13', 'CN'), ('3', '菜鸟教程', 'http://www.runoob.com/', '4689', 'CN'), ('4', '微博', 'http://weibo.com/', '20', 'CN'), ('5', 'Facebook', 'https://www.facebook.com/', '3', 'USA');";
    
    connection.query(initSql, function (err, result) {
        if (err) {
            console.log('[INIT ERROR] - ', err.message);
        }
        console.log('----------------------------------INIT----------------------------------');
        console.log('INIT ROWS:', result.affectedRows);
        console.log('------------------------------------------------------------------------\n\n');
    });
}




connection.end();
