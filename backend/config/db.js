require('dotenv').config();
const mysql = require('mysql2');

const con = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSERNAME,
  password: process.env.MYSQLPSWD,
  database: process.env.MYSQLDB
});

const query = (sql, binding) => {
  return new Promise((resolve, reject) => {
    con.query(sql, binding, (err, result, fields) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

module.exports = { con, query };