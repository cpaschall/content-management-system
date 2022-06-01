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
        return this.db.promise().query('SELECT role.id AS ID, role.title AS Title, dept.dept_name AS Department, role.salary AS Salary FROM role_db role JOIN department_db dept ON role.dept_id = dept.id ORDER BY role.id')
    };

    // View All Employees
    getAllEmp() {
        return this.db.promise().query('SELECT emp.id AS ID, emp.f_name AS First, emp.l_name AS Last, role_db.title AS Title, department_db.dept_name AS Department, role_db.salary AS Salary, CONCAT(mgr.f_name, " ", mgr.l_name) AS Manager FROM employee_db emp LEFT JOIN employee_db mgr ON emp.mgr_id = mgr.id JOIN role_db ON emp.role_id = role_db.id JOIN department_db ON role_db.dept_id = department_db.id ORDER BY emp.id') 
    };

    // employee_db.f_name CASE WHEN role_db = 1

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
    updateEmpRole = async () => {
        await inquirer.prompt([
            {
                type: list,
                message: "Select an Employee to update their role:",
                name: "empUp",
                choices: []
            }
        ])
    }

    // Exit Program
};

module.exports = new PromptsDB(db)