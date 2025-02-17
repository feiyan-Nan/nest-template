const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'admin123',
  database: 'practice',
});

connection.query('SELECT name FROM customers', function (err, results, fields) {
  console.log(results);
  console.log(fields.map((item) => item.name));
});
