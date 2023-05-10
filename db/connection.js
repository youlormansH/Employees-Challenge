const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'employee'
});

// connection.connection(function (err){
//     if (err) throw err;
// });

module.exports = connection;