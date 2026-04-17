// Importerar mysql2 för databasuppkoppling
const mysql = require("mysql2");

// Skapar en anslutning till databasen med miljövariabler från .env
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
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