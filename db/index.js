const connection = require("./connection");
const cTable = require('console.table');

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployess() {
        return this.connection.promise().query(
            // SELECT col1, col2, col3, FROM table WHERE etcetera
            `SELECT employee.id, employee.first_name, employee.last_name, role.title AS ROLE_TITLE, manager_id FROM employee
            INNER JOIN role ON role.id = employee.role_id;`
        )
        .then( ([rows,fields]) => {
            console.table(rows);
            //console.log('Returned rows from query are:', rows);
          })
          .catch(console.log)
          .then( () => connection.end());
    }

    findAllDepartments() {
        return this.connection.promise().query(
            // SELECT col1, col2, col3, FROM table WHERE etcetera
            `SELECT id, name FROM department`
        )
        .then( ([rows,fields]) => {
            console.table(rows);
            //console.log('Returned rows from query are:', rows);
          })
          .catch(console.log)
          .then( () => connection.end());
    }
}

module.exports = new DB(connection);