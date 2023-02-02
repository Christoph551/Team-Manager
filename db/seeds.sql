-- Path: db\seeds.sql
INSERT INTO employeeList (first_name, last_name, title, department, department_id, salary)
VALUES
    ('John', 'Doe', 1, 'Sales', 4, 100000),
    ('Jane', 'Doe', 2, 'Sales', 4, 80000),
    ('John', 'Smith', 3, 'Engineering', 1, 120000),
    ('Jane', 'Smith', 4, 'Finance', 2, 90000),
    ('John', 'Doe', 5, 'Legal', 3, 110000),
    ('Jane', 'Doe', 6, 'Legal', 3, 100000);



INSERT INTO roleList (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 4),
    ('Salesperson', 80000, 4),
    ('Lead Engineer', 120000, 1),
    ('Account Manager', 90000, 2),
    ('Accountant', 110000, 3),
    ('Legal Team Lead', 100000, 3);



INSERT INTO departmentList (department)
VALUES
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Sales');