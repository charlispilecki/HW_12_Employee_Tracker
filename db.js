var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'griffin1',
  database : 'employee_tracker'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

function listEmployees() {
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        console.log('The solution is: ', results[0].solution);
      });
}

function listDepartments() {

}

function listRoles() {

}

function addEmployee() {

}

function addDepartment() {

}

function addRole() {

}

function updateRoleForEmployee() {

}