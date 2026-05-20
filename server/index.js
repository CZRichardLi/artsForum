const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// temporary in-memory "database"
let requests = [];

app.get("/requests", (req, res) => {
  res.json(requests);
});

app.post("/requests", (req, res) => {
  const newRequest = req.body;
  requests.push(newRequest);
  res.json(newRequest);
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});