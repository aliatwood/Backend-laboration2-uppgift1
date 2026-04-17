// Importerar express, cors och dotenv
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Importerar databasuppkoppling och routes
const db = require("./db");
const arbetserfarenheter = require("./arbetserfarenheter");

const app = express();
const port = process.env.PORT || 3000;

// Middleware för cors och json
app.use(cors());
app.use(express.json());

// Routes för arbetserfarenheter
app.use("/api/workexperience", arbetserfarenheter);

// Startar servern
app.listen(port, () => {
    console.log("Servern körs på " + port);
});



