const express = require("express");
const app = express();
//create app which is coint to take express library and run it
const cors = require("cors");
const pool = require("./db")


//MIDDLEWARE//
app.use(cors());
app.use(express.json());
//it give us access to the request body to get json data
const survey_fields = [
	"survey_id",
	"gender",
	"english_level",
	"coding_learning",
	"education_level",
	"salary",
	"bonus",
	"currency",
	"title",
	"level",
	"total_xp",
	"at_company_xp",
	"company",
	"company_location",
	"business_field",
	"compensation",
	]

//ROUTES//

//submits a survey
app.post("/add_salary", async (req, res) => {

	try {
		const answers = req.body
		for (const field in survey_fields) {
			const { field } = answers[field];
			const new_survey = await pool.query("INSERT INTO todo ($1) VALUES($2) RETURNING *",[field[0], field[1]]);

			const { description } = req.body;
			const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",
				[description]);
			res.json(newTodo.rows[0]);

		}


		const { survey_id } = req.body;
		res.json(newTodo.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
})

//get all todos
app.get("/todos", async (req, res) => {
	try {
		const allTodos = await pool.query("SELECT * FROM todo")
		res.json(allTodos.rows);
	} catch (err) {
		console.error(err.message);
	}
})

//get a todo
app.get("/todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
		res.json(todo.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
})

//update a todo
app.put("/todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { description } = req.body;
		const updated_todo = await pool.query(
			"UPDATE todo SET description = $1 WHERE todo_id = $2",
			[description, id]);
		res.json("todo was updated");
	} catch (err) {
		console.error(err.message);
	}
})

//delete a todo
app.delete("/todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const del_todo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
		res.json("Todo was deleted");
	} catch (err) {
		console.error(err.message);
	}
})

app.listen(5000, () => {
	console.log("SERVER running propertly on port 5000")
});
