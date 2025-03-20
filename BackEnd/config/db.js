const mysql = require('mysql');
require('dotenv').config();


//create a connection to the MYSQL
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    databse: process.env.DB_NAME,
})

// connect to mysql 

connection.connect((error) => {
    if (error){
        console.log("Database connection failed");
        return;
    }
    console.log("Database connection successful");

});


modules.exports = connection;