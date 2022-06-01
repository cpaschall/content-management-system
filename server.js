require('dotenv').config();
const {DB_USER, DB_PW, DB_DB} = process.env;
const express = require('express');
const mysql = require('mysql2');
// const index = require('./public/index.js');
const cTable = require('console.table');
const inquirer = require("inquirer");
const f = require("./db_func.js")
const db = require("./connection.js")

db.promise().connect(function(err) {
    if (err) throw err;
    console.log('Database connected successfully.')
})

const viewAllDept = async () => {
    // console.table(f.getAllDept())
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
    console.log(roleArr[0])
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
        console.log(data)


    });
}

const init = function() {
    inquirer.prompt([{
        type: "list",
        message: "What would you like to do?",
        name: "cmsChoice",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role", "Exit"]
    }])
    .then(data => {
        switch(data.cmsChoice) {
            case "View All Departments": //working
                viewAllDept()
                .then(() => {
                    init();
                })
                break;
            case "View All Roles": //working
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
            case "Add a Department": //working
                f.addDept()
                .then(() => {
                    init();
                })
                break;
            case "Add a Role": //working
                f.addRole()
                .then(() => {
                    init();
                })
                break;
            case "Add an Employee": //working
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

// init()
updateEmpRole()
// listEmp()
// f.getAllRoles()
// f.getAllDept()
// viewAllDept()

