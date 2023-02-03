const db = require('./db/connection');
const inquirer = require('inquirer');
require('dotenv').config();

const start = () => {
    inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
        ]
    })
        .then((answer) => {
            switch (answer.choice) {
                case 'View all departments':
                    viewDepartments();
                    break;
                case 'View all roles':
                    viewRoles();
                    break;
                case 'View all employees':
                    viewEmployees();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Update an employee role':
                    updateEmployeeRole();
                    break;
                case 'Exit':
                    console.log('Goodbye!')
                    db.end();
                    break;
            }
        })
}

const viewRoles = () => {
    db.query(`SELECT title AS Role FROM employee_role;`, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.table(rows);
        start();
    })
}

const viewEmployees = () => {
    db.query(`Select department_name AS Department, title AS Role, CONCAT(first_name, " ", last_name) AS Employee, salary AS Salary 
            FROM employee 
            INNER JOIN employee_role 
            ON employee.role_id = employee_role.id 
            INNER JOIN department 
            ON employee_role.department_id = department.id 
            ORDER BY employee_role.id, salary ASC;`,
    (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.table(rows);
        start();
    })
}

const viewDepartments = () => {
    db.query(`SELECT department_name AS Department FROM department;`, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.table(rows);
        start();
    })
}

const addDepartment = () => {
    inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'What is the name of the department?'
    })
        .then((answer) => {
            db.query(`INSERT INTO department (department_name) VALUES (?)`, [answer.name], (err, rows) => {
                if (err) {
                    console.log(err);
                }
                console.log('Department added!');
                start();
            })
        })
}

const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the role?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the role?'
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'What is the department ID of the role?'
        }
    ])
        .then((answer) => {
            db.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, [answer.title, answer.salary, answer.department_id], (err, rows) => {
                if (err) {
                    console.log(err);
                }
                console.log('Role added!');
                start();
            })
        })
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "What is the employee's first name?"
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What is the employee's last name?"
        },
        {
            type: 'input',
            name: 'role_id',
            message: "What is the employee's role ID?"
        },
        {
            type: 'input',
            name: 'manager_id',
            message: "What is the employee's manager ID?"
        }
    ])
        .then((answer) => {
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], (err, rows) => {
                if (err) {
                    console.log(err);
                }
                console.log('Employee added!');
                start();
            })
        })
}

const updateEmployeeRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?"
        },
        {
            type: 'input',
            name: 'role_id',
            message: "What is the employee's new role ID?"
        }
    ])
        .then((answer) => {
            db.query(`UPDATE employee SET role_id = ? WHERE id = ?`, [answer.role_id, answer.id], (err, rows) => {
                if (err) {
                    console.log(err);
                }
                console.log('Employee role updated!');
                start();
            })
        })
}

start();