const mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '12315',
    database: 'campus_help'
});

module.exports = pool