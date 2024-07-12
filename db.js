// db.js
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'farmshare'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

module.exports = connection;
