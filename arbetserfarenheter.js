const express = require("express");
const router = express.Router();
const db = require("./db");

router.get("/", (req, res) =>{
    db.query("SELECT * FROM workexperience", (err, rows) => {
        if (err){
            res.status(500).json({ error: "Databasfel: " + err });
            return;
        }
        res.json(rows);
    });
});

router.post("/", (req, res) =>{
    const {companyName, jobTitle, location, startDate, endDate, description} = req.body;

    if (!companyName || !jobTitle || !location || !startDate || !endDate || !description) {
        res.status(400).json({ error: "Alla fält måste fyllas i!" });
        return;
    }

    db.query("INSERT INTO workexperience (companyName, jobTitle, location, startDate, endDate, description) VALUES (?, ?, ?, ?, ?, ?)",
        [companyName, jobTitle, location, startDate, endDate, description],
        (err, result) =>{
            if (err) {
                res.status(500).json({ error: "Databasfel: " + err });
                return;
            }
            res.status(201).json({ message: "Arbetserfarenhet skapad!", id: result.insertId});
        }
    );
});

router.put("/:id", (req, res) =>{
    const {companyName, jobTitle, location, startDate, endDate, description} = req.body;
    const id = req.params.id;

    if (!companyName || !jobTitle || !location || !startDate || !endDate || !description) {
        res.status(400).json({ error: "Alla fält måste fyllas i!" });
        return;
    }

    db.query("UPDATE workexperience SET companyName=?, jobTitle=?, location=?, startDate=?, endDate=?, description=? WHERE id=?",
        [companyName, jobTitle, location, startDate, endDate, description, id],
        (err, result) =>{
            if (err){
                res.status(500).json({ error: "Databasfel: " + err });
                return;
            }
            res.json({ message: "Arbetserfarenhet uppdaterad!" });
        }
    );
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM workexperience WHERE id=?", [id], (err, result) =>{
        if (err){
            res.status(500).json({ error: "Databasfel: " + err });
                return;
        }
        res.json({ message: "Arbetserfarenhet raderad!" });
    });
});

module.exports = router;