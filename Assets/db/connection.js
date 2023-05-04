const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'rootroot',
    database: 'employee_tracker'
});
connection.connection(function (err){
    if (err) throw err;
});
module.exports = connection;