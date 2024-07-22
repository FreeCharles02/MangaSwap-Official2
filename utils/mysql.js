var mysql = require('mysql2');

var con = mysql.createConnection ({
    host: "localhost",
    user: "charles",
    password: "TheBulls2"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});