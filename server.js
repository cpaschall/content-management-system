require('dotenv').config();
const inquirer = require("inquirer");
const f = require("./helpers/db_func.js")
const db = require("./helpers/connection.js")
const logo = require("./helpers/logo.js")

db.promise().connect(function(err) {
    if (err) throw err;
    console.log('Database connected successfully.')
})

const viewAllDept = async () => {
    await f.getAllDept()
    .then(([rows]) => {
        console.table(rows)
    })
};

const viewAllRoles = async () => {
    await f.getAllRoles()
    .then(([rows]) => {
        console.table(rows)
    })
};

const viewAllEmp = async () => {
    await f.getAllEmp()
    .then(([rows]) => {
        console.table(rows)
    })
};

// Update an Employee Role
const listEmp = async () => {
    return db.promise().query('SELECT CONCAT(emp.f_name, " ", emp.l_name) AS name, emp.id AS value FROM employee_db emp')
};

const listRole = async () => {
    return db.promise().query('SELECT r.title AS name, r.id AS value FROM role_db r')
};

const updateEmpRole = async () => {
    let empArr = await listEmp()
    let roleArr = await listRole()
    await inquirer.prompt([
        {
            type: "list",
            message: "Select an Employee to update their role:",
            name: "empUp",
            choices: empArr[0]
        },
        {
            type: "list",
            message: "Choose the role for this employee:",
            name: "newRole",
            choices: roleArr[0]
        }
    ])
    .then((data) => {
        return db.promise().query(`UPDATE employee_db SET role_id=${data.newRole} WHERE employee_db.id = ${data.empUp}`)
    });
}

// Initialize the prompts with user choices
const init = function() {
    inquirer.prompt([{
        type: "list",
        message: "What would you like to do?",
        name: "cmsChoice",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role", "Exit"]
    }])
    .then(data => {
        switch(data.cmsChoice) {
            case "View All Departments": 
                viewAllDept()
                .then(() => {
                    init();
                })
                break;
            case "View All Roles":
                viewAllRoles()
                .then(() => {
                    init();
                })
                break;
            case "View All Employees": 
                viewAllEmp()
                .then(() => {
                    init();
                })
                break;
            case "Add a Department": 
                f.addDept()
                .then(() => {
                    init();
                })
                break;
            case "Add a Role": 
                f.addRole()
                .then(() => {
                    init();
                })
                break;
            case "Add an Employee": 
                f.addEmp()
                .then(() => {
                    init();
                })
                break;
            case "Update an Employee Role":
                updateEmpRole()
                .then(() => {
                    init();
                })
                break;
            case "Exit": 
                break

        }
    })  
};

logo.renderLogo()
init()

