require('dotenv').config();
const mysql = require("mysql2"); // mysql ����

const connection = mysql.createConnection({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASS,
    database : process.env.MYSQL_DB
});

connection.connect(function (err) {
    if(err) {
        console.error("MYSQL connection failed");
        console.error(err.message);
    }
    else {
        console.log("MYSQL connection successed");
    }
});

module.exports = connection;