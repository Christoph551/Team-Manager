
//setup objects for the add department, employee, role, and menu questions
const addDepartmentQuestions = [
    {
        type: 'input',
        name: 'departmentName',
        message: 'What is the name of the department?\n'
    }
]

const addEmployeeQuestions = [
    {
        type: 'input',
        name: 'firstName',
        message: 'What is the employee\'s first name? \n'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'What is the employee\'s last name? \n'
    }
]

const addRoleQuestions = [
    {
        type: 'input',
        name: 'roleName',
        message: 'What is the name of the role?\n'
    },
    {
        type: 'number',
        name: 'salaryAmount',
        message: 'What is the salary of the role?\n'
    }
]

const menuQuestions = [
    {
        type: 'list',
        name: 'menuChoice',
        message: 'What would you like to do?',
        choices: ['View All Employees',
            'Add an Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Quit']
    }
]