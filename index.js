const { prompt } = require("inquirer");
const db = require('./db')
const logo = require("asciiart-logo");
const { connection } = require("./db/index");
require("console.table");


// inherits();

function init() {
    const logoText = log0({ name: "employee Manager" }).render();
    console.log(logoText);
    loadprompt();
}


function loadprompt() {
    prompt({
        name: "choice",
        type: "list",
        message: "what would you like to do",
        choices: ["view departments", "view all employees", "View all employees by department", "add employees", "remove employees", "update employees"]
    })
    .then((answer) => {
        switch (answer.choice) {
            case "view all employees":
                //console.log('db is', db);
                db.findAllEmployess();
                break;
            case "view departments":
                db.findAllDepartments();
            default:
                break;
        }
    })



    //     .then(res => {
    //         let choice = res.choice 
    //         console.log(choice)
    //         if (choice === 'VIEW_EMPLOYEES') {
    //             viewAllEmployees()
    //         } else {
    //             console.log('testing')
    //         }
    //     })
    // }

    // function viewAllEmployees(){
    // db.findAllEmployess().then(([rows]) => {
    //     let employees = rows
    //     console.table(employees)
    // })
}

loadprompt()