const inquirer = require("inquirer")



// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
const usrChoice = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "cmsChoice",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
    }
];

const chooseDept = [
    {
        type: "list",
        message: "Choose a department:",
        name: "dept",
        choices: ["Sales", "Customer Service", "Engineering", "IT", "Operations"]
    }
];



const init = () => {
    inquirer.prompt(usrChoice).then(data => {
        switch(data.name) {
            case "View all departments":
                viewAllDept()
                break;
        }
    })

    
}

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
const viewAllDept = () => {
    connection.query("SELECT * FROM department_db")
}

// ).then(function ({ first_name, last_name, manager }) {
//     connection.query("INSERT INTO employee (first_name, last_name, manager) 
//          VALUES ?", ('first_name', 'last_name', 'manager'), function (err, result) {
//         if (err) throw err;
// })

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

const viewAllRoles = () => {
    connection.query("SELECT * FROM role_db")
}
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

const viewAllEmp = () => {
    connnection.query("SELECT * FROM employee_db")
}
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database



// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

const chooseRole = [
    {
        type: "input",
        message: "Enter employee's title:",
        name: "title",
    },
    {
        type: "input",
        message: "Enter the salary for this role:",
        name: "salary",
    },
    {
        type: "input",
        message: "Enter the department name:",
        name: "dept_id",
    }
];

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

const chooseEmp = [
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
        message: "Enter employee's role:",
        name: "role_id"
    },
    {
        type: "input",
        message: "Enter employee's manager:",
        name: "mgr_id"
    }

]


// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

