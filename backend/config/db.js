const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Saroja#20",
    database: "store-rating-app"
});

connection.connect((err)=>{
    if(err)
        console.log(err);

    console.log("Database Connected");
});

module.exports = connection;