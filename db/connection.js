const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "4756",
  database: "employee_tracker",
});

module.exports = db;
