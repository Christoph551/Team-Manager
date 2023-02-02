const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
    host: 'localhost',
    
    user: 'root',
    
    password: PORT,
    database: 'books_db'
    },
    console.log(`Connected to the books_db database.`)
);




















app.get('/api/team_manager', (req, res) => {

    db.query(`SELECT * FROM employeeList;`, function (err, results) {
        if (err) {
            console.log(err);
        } else {
            console.log(results);
        }
    })

    res.send('Hello World!');
});

app.post('/api/team_manager', (req, res) => {
    res.send('Hello World!');
});











app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

