require('dotenv').config();
const {DB_USER, DB_PW, DB_DB} = process.env;
const express = require('express');
const mysql = require('mysql2');
const index = require('./public/index.js');
const cTable = require('console.table');
const inquirer = require("inquirer");
const f = require("./db_func.js")
const db = require("./connection.js")

db.promise().connect(function(err) {
    if (err) throw err;
    console.log('Database connected successfully."')
})

// const usrChoice = inquirer.prompt([{
//     type: "list",
//     message: "What would you like to do?",
//     name: "cmsChoice",
//     choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role", "Exit"]
// }]);

const viewAllDept = () => {
    console.table(f.getAllDept());
    // init();
};

const init = async function() {
    await inquirer.prompt([{
        type: "list",
        message: "What would you like to do?",
        name: "cmsChoice",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role", "Exit"]
    }])
    .then(data => {
        // console.log(data.cmsChoice)
        switch(data.cmsChoice) {
            case "View All Departments":
                f.getAllDept()
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "View All Employees":
                viewAllEmp();
                break;
            case "Add a Department":
                addDept();
                break;
            case "Add a Role":
                addRole();
                break;
            case "Add an Employee":
                addEmp();
                break;
            case "Update an Employee Role":
                updateEmp();
                break;
            case "Exit":
                break

        }
    })  
};

// init()
f.getAllDept()
