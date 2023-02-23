const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: 'Rootr00t!',
    database: 'employees'
});

module.exports = connection;