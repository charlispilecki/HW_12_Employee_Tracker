var inquirer = require('inquirer');
var db = require('./db')

function promptActions() {
    inquirer
        .prompt([
            {
                "name": "action",
                "message": "What would you like to do?",
                "type": "list",
                "choices": [
                    "View all employees",
                    "View all all departments",
                    "View all roles",
                    "Add an employee",
                    "Add a department",
                    "Add a role",
                    "Update an employee's role"
                ]
            }
        ])
        .then(answers => {

            switch (answers.action) {
                case "View all employees":
                    db.listEmployees()
                    break
                case "View all all departments":
                    db.listDepartments()
                    break
                case "View all roles":
                    db.listRoles()
                    break
                case "Add an employee":
                    break
                case "Add a department":
                    promptAddDepartment()
                    break
                case "Add a role":
                    break
                case "Update an employee's role":
                    break
            }
        })

}

function promptAddDepartment() {
    inquirer
    .prompt([
        {
            "name": "name",
            "message": "What is the department's name?"
        }
    ])
    .then(answers => {

    })
}

function promptAddRole() {
    inquirer
    .prompt([
        {
            "name": "title",
            "message": "What is the role's title?"
        },
        {
            "name": "salary",
            "message": "What is the role's salary?"
        },
        {
            "name": "department",
            "message": "What is the role's department?"
        }
    ])
    .then(answers => {

    })
}

function promptAddEmployee() {
    inquirer
    .prompt([
        {
            "name": "firstName",
            "message": "What is the employee's first name?"
        },
        {
            "name": "lastName",
            "message": "What is the employee's last name?"
        },
        {
            "name": "role",
            "message": "What is the employee's role?"
        },
        {
            "name": "manager",
            "message": "Who is the employee's manager?"
        }
    ])
    .then(answers => {

    })
}

function promptUpdateEmployeeRole() {
    inquirer
    .prompt([
        {
            "name": "role",
            "message": "What is the employee's new role?"
        }
    ])
    .then(answers => {

    })
}

module.exports = {
    promptActions: promptActions
}