const connection = require ("./connection")


class DB {

    constructor(connection){
        this.connection = connection;
    }
    findAllEmployess(){
        return this.connection.promise().query(
`SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary `
        );
    }
}
module.exports = new DB(connection);