const { prompt } = require("inquirer");
const db = require('./db')
const logo = require("asciiart-logo");
const { connection } = require("./db/classindex");
require("console.table");


inherits();

function init(){
    const logoText = log0({name: "employee Manager"}).render();
    console.log (logoText);

    loadprompt();
}


function loadprompt(){
    prompt ({
        name: "choice",
        type:"list",
        message: "what would you like to do",
        choices:[ "view departments",
            {
                name: "view all employees",
                value: "VIEW_EMPLOYEES"
            },
            {
                name: "View all employees by department",
                value: "VIEW_EMPLOYEES_BY_DEPARTMENT",
            },
            {
                name: "add employees",
                value: "ADD_EMPLOYEES"
    
            },
            {
                name: "remove employees",
                value: "REMOVE_EMPLOYEES",
            },
            {
                name: "update employees",
                value: "UPDATE_EMPLOYEES",
    
            },
            
    
        ]}),
        .then((answer) =>{
            switch (answer.choices) {
                case "view departments":
                    viewtable();
                    break;

                    case 
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
// }

loadprompt()