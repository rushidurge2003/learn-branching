const mysql2 = require("mysql2");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "test",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});