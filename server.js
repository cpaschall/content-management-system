require('dotenv').config();
const {DB_USER, DB_PW} = process.env;
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// const connection = require('mysql2/typings/mysql/lib/Connection');

// Express Middlieware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to a database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'cms_db',
    },
    console.log(`Connected to cms_db database`)
);

db.connect(function(err) {
    if (err) throw err;
    console.log('Database connected successfully."')
})
// Query Database
const deptTable = 'SELECT * FROM department_db';

db.query(deptTable, function (er, results) {
    console.log(results)
});


// console.log(deptTable)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});