const db = require("./connection")
// const cTable = require('console.table');
const inquirer = require("inquirer");
const { listenerCount } = require("./connection");

class PromptsDB {
    constructor(db) {
        this.db = db;
    }

    // View All Departments
    getAllDept() {
        return this.db.promise().query('SELECT * FROM department_db')
    };

    // View All Roles
    getAllRoles() {
        return this.db.promise().query('SELECT * FROM role_db')
    };

    // View All Employees
    getAllEmp() {
        return this.db.promise().query('SELECT employee_db.id, f_name AS First, l_name AS Last, role_db.title, department_db.dept_name, role_db.salary FROM employee_db JOIN role_db ON employee_db.mgr_id = role_db.id JOIN department_db ON role_db.dept_id = department_db.id') 
    };

    // Add a Department
    addDept = async () => {
        await inquirer.prompt([
            {
                type: "input",
                message: "Choose a department:",
                name: "dept",
            }])
        .then(data => {
            let values = [data.dept]
            return db.promise().query(`INSERT INTO department_db(dept_name) VALUES(?)`, values);
        });
    };

    // Add a Role
    addRole = async () => {
        await inquirer.prompt([
            {
                type: "input",
                message: "Enter the title of the role:",
                name: "title",
            },
            {
                type: "input",
                message: "Enter the salary for this role:",
                name: "salary",
            },
            {
                type: "input",
                message: "Enter the department ID:",
                name: "dept",
            }])
        .then(data => {
            let values = [data.title, data.salary, data.dept]
            return db.promise().query(`INSERT INTO role_db(title, salary, dept_id) VALUES(?,?,?)`, values);
        });
    };

    // Add an Employee
    addEmp = async () => {
        await inquirer.prompt([
            {
                type: "input",
                message: "Enter employee's first name:",
                name: "f_name"
            },
            {
                type: "input",
                message: "Enter employee's last name:",
                name: "l_name"
            },
            {
                type: "input",
                message: "Enter the role ID for employee:",
                name: "role_id"
            },
            {
                type: "input",
                message: "Enter the Manager ID for the employee:",
                name: "mgr_id"
            }])
        .then(data => {
            let values = [data.f_name, data.l_name, data.role_id, data.mgr_id]
            return db.promise().query(`INSERT INTO employee_db(f_name, l_name, role_id, mgr_id) VALUES(?,?,?,?)`, values);
        });
    };

    // Update an Employee Role
    updateEmp = async () => {
        await inquirer.prompt([
            {
                type: listenerCount,
                message: "Select Employee file to update:",
                name: "empUp",
                choice: []
            }
        ])
    }

    // Exit Program
};

module.exports = new PromptsDB(db)