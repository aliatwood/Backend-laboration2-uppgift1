const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db");

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log("Servern körs på " + port);
});



