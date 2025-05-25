const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Snehangshu@28',
  database: 'land_db',
});

db.connect((err) => {
  if (err) throw err;
  console.log('✅ MySQL Connected');
});

module.exports = db;
