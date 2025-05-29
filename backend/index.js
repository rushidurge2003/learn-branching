const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/getname/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello World! ${name} get from get request`);
});

app.post("/postname", (req, res) => {
  const { name } = req.body;
  res.send(`Hello World! ${name} get from post request`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});