require('dotenv').config();
const {DB_USER, DB_PW, DB_DB} = process.env;
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'cms_db',
    },
    console.log(`Connected to cms_db database`)
);

module.exports = db