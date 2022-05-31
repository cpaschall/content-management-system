const db = require("./connection")
// const cTable = require('console.table');
const inquirer = require("inquirer");

class PromptsDB {
    constructor(db) {
        this.db = db;
    }

    // View All Departments
    getAllDept() {
        this.db.query('SELECT * FROM department_db', function (err, results) {
            console.table(results)
        });
    };

    // View All Roles
    viewAllRoles() {
        this.db.query('SELECT * FROM role_db', function (err, results) {
            console.table(results)
        });
    };

    // View All Employees
    viewAllEmp() {
        this.db.query('SELECT * FROM employee_db', function (err, results) {
            console.table(results)
        });
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
            db.query(`INSERT INTO role_db(dept_name) VALUES(?)`, values);
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
            db.query(`INSERT INTO role_db(title, salary, dept_id) VALUES(?,?,?)`, values);
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
            db.query(`INSERT INTO role_db(f_name, l_name, role_id, mgr_id) VALUES(?,?,?,?)`, values);
        });
    };

    // Update an Employee Role

    // Exit Program
};

module.exports = new PromptsDB(db)