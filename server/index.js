const express = require("express");
const app = express();
//create app which is coint to take express library and run it
const cors = require("cors");
const pool = require("./db");


//MIDDLEWARE//
app.use(cors());
app.use(express.json());
//it give us access to the request body to get json data

//ROUTES//

//submits a survey
app.post("/add_salary", async (req, res) => {
	try {
		const answers = req.body;
		console.log(req.body);
		let new_survey = {};
		new_survey = await pool.query("INSERT INTO survey (gender, english_level, coding_learning,\
			education_level, salary, bonus, currency, title, level, total_xp,\
			at_company_xp, company, company_location, business_field, compensation) \
			VALUES ('"+ answers["gender"] + "', '" + answers["english_level"] + "', '" + answers["coding_learning"] + "', \
			'"+ answers["education_level"] + "', " + answers["salary"] + ", \
			"+ answers["bonus"] + ", '" + answers["currency"] + "', \
			'"+ answers["title"] + "', '" + answers["level"] + "', \
			"+ answers["total_xp"] + ", " + answers["at_company_xp"] + ", \
			'" + answers["company"] + "', '" + answers["company_location"] + "', \
			'" + answers["business_field"] + "', '" + answers["compensation"] + "') RETURNING *");
		console.log("FINALIZADO");
		res.json(new_survey.rows);
	} catch (err) {
		console.log(err);
	}
});

//get all survey results
app.get("/survey", async (req, res) => {
  try {
    const allsurvey = await pool.query("SELECT * FROM survey")
    res.json(allsurvey.rows);
  } catch (err) {
    console.error(err.message);
  }
})

//get a survey by id
app.get("/survey/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const single_survey = await pool.query("SELECT * FROM survey WHERE survey_id = $1", [id]);
    res.json(single_survey.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

//update a survey
app.put("/survey/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const answers = req.body;
    for (const field in survey_fields) {
      const { field } = answers[field];
      const update_survey { field } = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [field], [answers[field]]);
      res.json("Information successfully updated");
  } catch (err) {
    console.error(err.message);
  }
})

/*delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const del_todo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
    res.json("Todo was deleted");
  } catch (err) {
    console.error(err.message);
  }
})*/

app.listen(5000, () => {
  console.log("SERVER running propertly on port 5000")
});
