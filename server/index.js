const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const pool = require("./db");

app.get("/requests", async (req, res) => {
  const { tags } = req.query;
  if (tags) {
    const tagArray = tags.split(",");
    const result = await pool.query(
      `
      SELECT * FROM requests
      WHERE tags && $1
      `,
      [tagArray],
    );

    return res.json(result.rows);
  }
  const result = await pool.query("SELECT * FROM requests")
  res.json(result.rows);
});

app.post("/requests", async (req, res) => {
  const { id, initiator, email, requested, description, tags } = req.body;
  await pool.query(
    `
    INSERT INTO requests
    (id, initiator, email, requested, description, tags)
    VALUES ($1, $2, $3, $4, $5, $6)
    `,
    [id, initiator, email, requested, description, tags],
  );
  res.json(req.body);
});

app.delete("/requests/:id", async (req, res) => {
  const id = Number(req.params.id);
  await pool.query("DELETE FROM requests WHERE id = $1", [id]);

  res.json({ success: true });
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
