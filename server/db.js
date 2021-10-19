const Pool = require("pg").Pool;

const pool = new Pool({
	user: "postgres",
	password: "BE3c0cA",
	host: "localhost",
	port: 5432,
	database: "survey"
});

module.exports = pool;
