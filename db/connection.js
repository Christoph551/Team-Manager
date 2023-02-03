// Connect to database
const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
    {
    host: process.env.HOST,
    
    user: process.env.USER,
    
    password: process.env.PASSWORD,
    database: 'team_manager_db'
    },
    console.log(`Connected to the team_manager_db database.`)
);


module.exports = db;