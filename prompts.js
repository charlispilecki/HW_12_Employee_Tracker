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
                    "Update an employee's role",
                    "I'm done"
                ]
            }
        ])
        .then(answers => {

            switch (answers.action) {
                case "View all employees":
                    db.listEmployees(promptActions)
                    break
                case "View all all departments":
                    db.listDepartments(promptActions)
                    break
                case "View all roles":
                    db.listRoles(promptActions)
                    break
                case "Add an employee":
                    promptAddEmployee()
                    break
                case "Add a department":
                    promptAddDepartment()
                    break
                case "Add a role":
                    promptAddRole()
                    break
                case "Update an employee's role":
                    promptUpdateEmployeeRole()
                    break
                default:
                    db.disconnect()
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
            db.addDepartment(answers.name, promptActions)
        })
}

function promptAddRole() {
    let departmentChoices = []
    db.getDepartments(results => {

        results.forEach(result => {
            departmentChoices.push({
                name: result.name,
                value: result.id
            })
        })

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
                    "message": "What is the role's department?",
                    "type": "list",
                    "choices": departmentChoices
                }
            ])
            .then(answers => {
                db.addRole(answers.title, answers.salary, answers.department, promptActions)
            })

    })
}

function promptAddEmployee() {
    let managerChoices = []
    let roleChoices = []

    db.getEmployees(results => {

        results.forEach(result => {
            managerChoices.push({
                name: result.first_name + ' ' + result.last_name,
                value: result.id
            })
        })

        db.getRoles(roleResults => {

            roleResults.forEach(roleResult => {
                roleChoices.push({
                    name: roleResult.title,
                    value: roleResult.id
                })
            })

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
                        "message": "What is the employee's role?",
                        "type": "list",
                        "choices": roleChoices
                    },
                    {
                        "name": "manager",
                        "message": "Who is the employee's manager?",
                        "type": "list",
                        "choices": managerChoices
                    }
                ])
                .then(answers => {
                    db.addEmployee(answers.firstName, answers.lastName, answers.role, answers.manager, promptActions)
                })


        })

    })

}

function promptUpdateEmployeeRole() {
    let employeeChoices = []
    let roleChoices = []
    db.getEmployees(results => {

        results.forEach(result => {
            employeeChoices.push({
                name: result.first_name + ' ' + result.last_name,
                value: result.id
            })
        })

        db.getRoles(roleResults => {

            roleResults.forEach(roleResult => {
                roleChoices.push({
                    name: roleResult.title,
                    value: roleResult.id
                })
            })

            inquirer
            .prompt([
                {
                    "name": "employee",
                    "message": "Which employee do you want to update?",
                    "type": "list",
                    "choices": employeeChoices
                },
                {
                    "name": "role",
                    "message": "What is the employee's new role?",
                    "type": "list",
                    "choices": roleChoices
                }
            ])
            .then(answers => {
                db.updateRoleForEmployee(answers.employee, answers.role, promptActions)
            })

        })

        


    })

}

module.exports = {
    promptActions: promptActions
}