const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "arts_forum",
  password: "Richard041220",
  port: 5432,
});

module.exports = pool;
