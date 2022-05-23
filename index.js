const inquirer = require("inquirer");
const db = require("./db/connection");

// initiate command line interface
function init() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
          "quit",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.option) {
        case "view all departments":
          showDepartments();
          break;
        case "view all roles":
          showRoles();
          break;
        case "view all employees":
          showEmployees();
          break;
        case "add a department":
          addDepartment();
          break;
        case "add a role":
          addRole();
          break;
        case "add an employee":
          addEmployee();
          break;
        case "update an employee role":
          updateEmployee();
          break;
        case "quit":
          process.exit(0);
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log("Something else went wrong");
      }
    });
}

init();

function showDepartments() {
  const sql = `SELECT * FROM department`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.clear();
    console.table(rows);
    init();
    return;
  });
}

function showRoles() {
  const sql = `SELECT * FROM role`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.clear();
    console.table(rows);
    init();
    return;
  });
}

function showEmployees() {
  const sql = `SELECT * FROM employee`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.clear();
    console.table(rows);
    init();
    return;
  });
}

function addDepartment() {
  console.clear();
  inquirer
    .prompt([
      {
        type: "input",
        name: "newDep",
        message: "What is the name of the new department?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a name for the new department.");
            return false;
          }
        },
      },
    ])
    .then((answer) => {
      const sql = `INSERT INTO department (name) VALUES (?)`;
      db.query(sql, [answer.newDep], (err, result) => {
        if (err) {
          console.log(err.message);
          return;
        }
        console.log("Department added successfuly.");
        init();
        return;
      });
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log("Something else went wrong");
      }
    });
}

function addRole() {
  console.clear();
  inquirer
    .prompt([
      {
        type: "input",
        name: "newRole",
        message: "What is the name of the new role?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a name for the new role.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "newSalary",
        message: "What is the salary of the new role?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a salary for the new role.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "linkedDep",
        message: "To which department number does it refer?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a department number");
            return false;
          }
        },
      },
    ])
    .then((answer) => {
      const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
      const params = [answer.newRole, answer.newSalary, answer.linkedDep];
      db.query(sql, params, (err, result) => {
        if (err) {
          console.log(err.message);
          return;
        }
        console.log("Role added successfuly.");
        init();
        return;
      });
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log("Something else went wrong");
      }
    });
}

function addEmployee() {
  console.clear();
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the new employee's first name?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a first name for the new employee.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a last name for the new employee.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "roleId",
        message: "What is the employee's role ID?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a role ID.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the employee's manager ID?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter the manager ID.");
            return false;
          }
        },
      },
    ])
    .then((answer) => {
      const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
      const params = [
        answer.firstName,
        answer.lastName,
        answer.roleId,
        answer.managerId,
      ];
      db.query(sql, params, (err, result) => {
        if (err) {
          console.log(err.message);
          return;
        }
        console.log("Employee added successfuly.");
        init();
        return;
      });
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log("Something else went wrong");
      }
    });
}

function updateEmployee() {
  console.clear();
  inquirer
    .prompt([
      {
        type: "input",
        name: "employeeId",
        message: "What is the new employee's ID?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter an ID.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "roleId",
        message: "What is the employee's role ID?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a role ID.");
            return false;
          }
        },
      },
    ])
    .then((answer) => {
      const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
      const params = [answer.roleId, answer.employeeId];
      db.query(sql, params, (err, result) => {
        if (err) {
          console.log(err.message);
          return;
        }
        console.log("Employee updated successfuly.");
        init();
        return;
      });
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log("Something else went wrong");
      }
    });
}
