// Importerar express, cors och dotenv
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Importerar databasuppkoppling och routes
const db = require("./db");
const arbetserfarenheter = require("./arbetserfarenheter");

const app = express();
const port = process.env.PORT || 3000;

// Skapar tabellen om den ej finns
db.query(`CREATE TABLE IF NOT EXISTS workexperience (
    id INT AUTO_INCREMENT PRIMARY KEY,
    companyName VARCHAR(30) NOT NULL,
    jobTitle VARCHAR(25) NOT NULL,
    location VARCHAR(30) NOT NULL,
    startDate DATE NOT NULL,
    endDate DATE,
    description VARCHAR(200) NOT NULL
)`);

// Lägger in testdata om tabellen är tom
db.query(`INSERT INTO workexperience (companyName, jobTitle, location, startDate, endDate, description)
    SELECT * FROM (
        SELECT 'Sfmovie','cashier','Linkoping','2015-01-05','2025-02-05','Took on customers' UNION ALL
        SELECT 'Mainlibrary','booksorter','Norrkoping','2016-02-07','2026-03-07','Sorted books in order' UNION ALL
        SELECT 'Mcdonalds','crewmember','Stockholm','2017-03-09','2017-04-09','Made food from scratch' UNION ALL
        SELECT 'Coop','stocker','Sundsvall','2018-04-11','2018-05-11','Sorted and stocked food on different shelves' UNION ALL
        SELECT 'Liu','Substituteteacher','Uppsala','2019-05-13','2019-06-13','Taught students when teacher was unavailable'
    ) AS tmp
    WHERE NOT EXISTS (SELECT 1 FROM workexperience) LIMIT 5`);

// Middleware för cors och json
app.use(cors());
app.use(express.json());

// Routes för arbetserfarenheter
app.use("/api/workexperience", arbetserfarenheter);

// Startar servern
app.listen(port, () => {
    console.log("Servern körs på " + port);
});



