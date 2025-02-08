const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

function rollDice(sides = 6) {
return Math.floor(Math.random() * sides) + 1;
}

app.get("/roll-dice", (req, res) => {
const sides = req.query.sides ? parseInt(req.query.sides) : 6;
if (isNaN(sides) || sides <= 0) {
return res.status(400).json({ error: "Invalid dice type" });
}
res.json({ roll: rollDice(sides), sides: sides });
});

app.listen(5001, () => console.log("🎲 Dice Roller API running on port 5001"));
