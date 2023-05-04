const connection = require ("./connection")


class DB {

    constructor(connection){
        this.connection = connection;
    }
    findAllEmployess(){
        return this.connection.promise().query(

        );
    }
}
module.exports = new DB(connection);