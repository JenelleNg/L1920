// include the required packages
const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3000;

// database config info
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
};

// middleware
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:3000", // React frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// start server
app.listen(port, () => {
  console.log("Server running on port", port);
});


// ==========================
// ROUTES
// ==========================

// Get all cards
app.get("/allcards", async (req, res) => {
  let connection;

  try {
    connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute(
      "SELECT * FROM cards"
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error for allcards" });
  } finally {
    if (connection) connection.end();
  }
});

// Add a new card
app.post("/addcard", async (req, res) => {
  const { card_name, card_pic } = req.body;
  let connection;

  try {
    connection = await mysql.createConnection(dbConfig);
    await connection.execute(
      "INSERT INTO cards (card_name, card_pic) VALUES (?, ?)",
      [card_name, card_pic]
    );

    res.json({ message: "Card added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error - could not add card" });
  } finally {
    if (connection) connection.end();
  }
});

// Edit a card
app.put("/editcard/:id", async (req, res) => {
  const { id } = req.params;
  const { card_name, card_pic } = req.body;
  let connection;

  try {
    connection = await mysql.createConnection(dbConfig);
    await connection.execute(
      "UPDATE cards SET card_name = ?, card_pic = ? WHERE id = ?",
      [card_name, card_pic, id]
    );

    res.json({ message: "Card updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error - could not update card" });
  } finally {
    if (connection) connection.end();
  }
});

// Delete a card
app.delete("/deletecard/:id", async (req, res) => {
  const { id } = req.params;
  let connection;

  try {
    connection = await mysql.createConnection(dbConfig);
    await connection.execute(
      "DELETE FROM cards WHERE id = ?",
      [id]
    );

    res.json({ message: "Card deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error - could not delete card" });
  } finally {
    if (connection) connection.end();
  }
});
