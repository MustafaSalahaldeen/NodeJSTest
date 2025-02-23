const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', //The default user for MySQL
    database: 'node-complete',
    password: 'Password'//The default password for MySQL
 });
 
 module.exports = pool.promise();