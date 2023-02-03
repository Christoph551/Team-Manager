-- View All Employees
-- Query the database for all employees, their roles, department and their salaries
Select department_name AS Department, title AS Role, CONCAT(first_name, " ", last_name) AS Employee, salary AS Salary 
FROM employee 
INNER JOIN employee_role 
ON employee.role_id = employee_role.id 
INNER JOIN department 
ON employee_role.department_id = department.id 
ORDER BY employee_role.id, salary ASC;

-- View All Departments
SELECT department_name AS Department FROM department;

-- View All Roles
SELECT title AS Role FROM employee_role;