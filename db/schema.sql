DROP DATABASE IF EXISTS team_manager;
CREATE DATABASE team_manager;

USE team_manager;

CREATE TABLE employeeList (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,

    manager_id INT NOT NULL
);


CREATE TABLE roleList (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary INT NOT NULL,
    role_id INT NOT NULL,    
    FOREIGN KEY (role_id)
    REFERENCES employeeList(id)
);


CREATE TABLE departmentList (
    department_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department VARCHAR(30) NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES roleList(id)
);



/*
What would you like to do?
View All Employees
    id, first_name, last_name, their manager's id
Add Employee
Update Employee Role
View All Roles
    Sales Lead, Salesperson, Lead Engineer, Account Manager, Accountant, Legal Team Lead, Lawyer
    *** Each role should have an assigned salary ***
Add Role
View All Departments
    Engineering, Finanace, Legal, Sales
Add Department
Quit
*/

