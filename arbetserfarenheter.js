// Importerar express och skapar en router
const express = require("express");
const router = express.Router();

// Importerar databasuppkopplingen
const db = require("./db");

//GET där alla arbetserfarenheter från databasen hämtas
router.get("/", (req, res) =>{
    db.query("SELECT * FROM workexperience", (err, rows) => {
        if (err){
            res.status(500).json({ error: "Databasfel: " + err });
            return;
        }
        res.json(rows);
    });
});

// GET - Hämtar en specifik arbetserfarenhet baserat på id
router.get("/:id", (req, res) =>{
    const id = req.params.id;

    db.query("SELECT * FROM workexperience WHERE id=?", [id], (err, rows) =>{
        if (err){
            res.status(500).json({ error: "Databasfel: " + err});
            return;
        }
        res.json(rows);
    });
});

// POST där en ny arbetserfarenhet skapas
router.post("/", (req, res) =>{
    const {companyName, jobTitle, location, startDate, endDate, description} = req.body;

    // Validering, kontrollerar att alla fält är fyllda.
    if (!companyName || !jobTitle || !location || !startDate || !description) {
        res.status(400).json({ error: "Alla fält måste fyllas i!" });
        return;
    }

    // Sparar arbetserfarenheten i databasen
    db.query("INSERT INTO workexperience (companyName, jobTitle, location, startDate, endDate, description) VALUES (?, ?, ?, ?, ?, ?)",
        [companyName, jobTitle, location, startDate, endDate, description],
        (err, result) =>{
            if (err) {
                console.error("SQL fel:", err);
                res.status(500).json({ error: "Databasfel: " + err });
                return;
            }
            res.status(201).json({ message: "Arbetserfarenhet skapad!", id: result.insertId});
        }
    );
});

// PUT där en befintlig arbetserfarenhet baserat på id uppdateras
router.put("/:id", (req, res) =>{
    const {companyName, jobTitle, location, startDate, endDate, description} = req.body;
    const id = req.params.id;

    //Validering
    if (!companyName || !jobTitle || !location || !startDate || !endDate || !description) {
        res.status(400).json({ error: "Alla fält måste fyllas i!" });
        return;
    }

    // Uppdaterar arbetserfarenheten i databasen
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

// DELETE där en arbetserfarenhet baserat på id raderas
router.delete("/:id", (req, res) => {
    const id = req.params.id;

     // Raderar arbetserfarenheten från databasen
    db.query("DELETE FROM workexperience WHERE id=?", [id], (err, result) =>{
        if (err){
            res.status(500).json({ error: "Databasfel: " + err });
                return;
        }
        res.json({ message: "Arbetserfarenhet raderad!" });
    });
});

// Exporterar routern
module.exports = router;