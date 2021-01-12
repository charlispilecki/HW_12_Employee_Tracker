var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'griffin1',
  database : 'employee_tracker'
});
 
connection.connect();
 
exports.disconnect = function () {
  connection.end()
}

exports.getEmployees = function (callback) {
    connection.query('select first_name, last_name, id from employee', function (error, results, fields) {
      if (error) throw error
      callback(results)
    });
}

exports.getDepartments = function (callback) {
    connection.query('select name, id from department', function (error, results, fields) {
      if (error) throw error
      callback(results)
    });
}

exports.getRoles = function (callback) {
    connection.query('select title, id from role', function (error, results, fields) {
      if (error) throw error
      callback(results)
    });
}

exports.listEmployees = function (callback) {
    connection.query('select * from employee', function (error, results, fields) {
      if (error) throw error
      console.table(results)
      callback()
    });
}

exports.listDepartments = function (callback) {
  connection.query('select * from department', function (error, results, fields) {
    if (error) throw error
    console.table(results)
    callback()
  });
}

exports.listRoles = function (callback) {
  connection.query('select * from role', function (error, results, fields) {
    if (error) throw error
    console.table(results)
    callback()
  });
}

exports.addEmployee = function (first_name, last_name, role_id, manager_id, callback) {
  connection.query('insert into employee (first_name, last_name, role_id, manager_id) values (?, ?, ?, ?)', [first_name, last_name, role_id, manager_id], function (error, results, fields) {
    if (error) throw error
    callback()
  });
}

exports.addDepartment = function (name, callback) {
  connection.query('insert into department (name) values (?)', [name], function (error, results, fields) {
    if (error) throw error
    callback()
  });
}

exports.addRole = function (title, salary, department_id, callback) {
  connection.query('insert into role (title, salary, department_id) values (?, ?, ?)', [title, salary, department_id], function (error, results, fields) {
    if (error) throw error
    callback()
  });
}

exports.updateRoleForEmployee = function (employee_id, role_id, callback) {
  connection.query('update employee set role_id = ? where id = ?', [role_id, employee_id], function (error, results, fields) {
    if (error) throw error
    callback()
  });
}