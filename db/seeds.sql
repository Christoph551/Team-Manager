-- Purpose: Seed data for the database
INSERT INTO department (department_name)
VALUES
    ("Engineering"),
    ("Finance"),
    ("Legal"),
    ("Sales");

INSERT INTO employee_role (title, salary, department_id)
VALUES
    ("CEO", 250000, 2),
    ("Lawyer", 190000, 3),
    ("Salesperson", 80000, 4),
    ("Software Engineer", 120000, 1),
    ("Accountant", 125000, 2),
    ("Sales Lead", 100000, 4),
    ("Lead Engineer", 150000, 1),
    ("Account Manager", 125000, 2),
    ("Legal Team Lead", 200000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
-- Jane Doe is the CEO who reports to no one
    ("Jane", "Doe", 1, NULL),

-- Bob Smith is a lawyer who reports to Jane Doe
    ("Bob", "Smith", 2, 1),

-- Mary Johnson is a lawyer who reports to Jane Doe
    ("Mary", "Johnson", 2, 1),

-- John Doe is a salesperson who reports to Bob Smith
    ("John", "Doe", 3, 2),

-- Mike Chan is an accountant who reports to Mary Johnson
    ("Mike", "Chan", 4, 3),

-- Sally Wong is an accountant who reports to John Doe
    ("Sally", "Wong", 4, 4),

-- Steve Smith is a Software Engineer who reports to Jane Doe
    ("Steve", "Smith", 5, 1),

-- Kevin Smith is a software engineer who reports to Steve Smith
    ("Kevin", "Smith", 5, 7),

-- Karen Wong is an Account Manager who reports to John Doe
    ("Karen", "Wong", 8, 4),

-- Mandy Wong is a Sales Lead who reports to John Doe
    ("Mandy", "Wong", 6, 4);