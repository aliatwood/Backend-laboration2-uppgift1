// Importerar mysql2 för databasuppkoppling
const mysql = require("mysql2");

// Skapar en anslutning till databasen med miljövariabler från .env
const db = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQLPORT
});

// Ansluter till databasen och skriver ut ett meddelande
db.connect((err) =>{
    if (err){
        console.error("Databasfel: " + err);
        return;
    }
    console.log("Ansluten till databasen!");
});

// Exporterar databasuppkopplingen
module.exports = db;