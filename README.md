
  ![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)

  # Employee Content Management System

  ## Description
  View and add employees, departments and employee roles to a database using mySQL and Node.js.

  ## Instructions

  1. Clone the repo from Github and navigate to the directory containing the directory in the terminal

  2. Install npm packages using thed following commands in the terminal:
  ```
  npm init -y
  npm i inquirer mysql2 console.table
  npm i dotenv --save
  ```
  3. In the *connection.js* file, replace **user** and **password** with your own mySQL account information.
  4. Initialize the database files by navigating the directory containing the typing the following commands in the terminal:
  ```
  mysql -u <user> -p
  <password>
  source db/schema.sql
  source db/seeds.sql
  quit
  ```
  5. Open a node.js session in the terminal:
  ```
  node server
  ```

  ## Usage
  The user can select an option to View or Add Departments, Employee Roles or Employees.  They also have the option to Update an Employee Role.

  [View Demo](https://drive.google.com/file/d/1IGhX2Kae8uPlJdMu7b2BtkKXULFdenzp/view)
  <br>
  ![Demo GIF](./assets/demo.gif)

  ## Contributing
  Fork the repo and contact me via email or on Github to request a review of your updates.  

  ## Tests
  N/A

  ## Questions
  Github: [cpaschall](https://github.com/cpaschall)
  <br>
  Email: cpaschall216@gmail.com

  ---

  [License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)
 
  