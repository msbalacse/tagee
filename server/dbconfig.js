const { Pool } = require("pg");

const connection = "postgres://postgres:1234@localhost:5555/tagee";

const pool = new Pool({
  connectionString: connection,
});

module.exports = pool;
