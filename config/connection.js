//Set up mysql connection
var mysql = require("mysql");
var connection;
    if(process.env.JAWSDB_URL){
        connection = process.env.JAWSDB_URL;
    } else {connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "asdf1234",
    database: "burger_db"
})
};

//Make the connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//Export the connection
module.exports = connection;