const mysql = require("mysql2");

exports.db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "lamronfuegos",
  database: "botifly",
  port: 3306
});
