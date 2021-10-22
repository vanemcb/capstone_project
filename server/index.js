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
    let new_survey = {};
    new_survey = await pool.query("INSERT INTO init_survey (company, company_location, job_position,\
			job_level, years_of_experience, years_at_company, monthly_salary, currency, bonus,\
			gender) \
			VALUES ('"+ answers["company"] + "', '" + answers["company_location"] + "', '" + answers["job_position"] + "', \
			'"+ answers["job_level"] + "', " + answers["years_of_experience"] + ", \
			"+ answers["years_at_company"] + ", '" + answers["monthly_salary"] + "', \
			'"+ answers["currency"] + "', '" + answers["bonus"] + "', \
			'" + answers["gender"] + "') RETURNING *");
    res.json(new_survey.rows);
  } catch (err) {
    console.log(err);
  }
});

//test react
app.post("/test", async (req, res) => {
  try {
    const answers = req.body;
    let new_survey = {};

    new_survey = await pool.query("INSERT INTO test (title, description) \
      VALUES ('"+ answers["title"] + "', '" + answers["description"] + "') RETURNING *");
    res.json(new_survey.rows);
  } catch (err) {
    console.log(err);
  }
});

app.get('/', function (req, res) {
  res.write("HOLAAAAAA");
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
    const single_survey = await pool.query("SELECT * FROM survey WHERE id = $1", [id]);
    res.json(single_survey.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

//update a survey
app.put("/survey/:id", async (req, res) => {
	try {
		const answers = req.body;
		const { id } = req.params;
		let new_survey = {};
		new_survey = await pool.query("UPDATE survey SET (gender, english_level, coding_learning,\
			education_level, salary, bonus, currency, title, level, total_xp,\
			at_company_xp, company, company_location, business_field, compensation) = \
			('"+ answers["gender"] + "', '" + answers["english_level"] + "', '" + answers["coding_learning"] + "', \
			'"+ answers["education_level"] + "', " + answers["salary"] + ", \
			"+ answers["bonus"] + ", '" + answers["currency"] + "', \
			'"+ answers["title"] + "', '" + answers["level"] + "', \
			"+ answers["total_xp"] + ", " + answers["at_company_xp"] + ", \
			'" + answers["company"] + "', '" + answers["company_location"] + "', \
			'" + answers["business_field"] + "', '" + answers["compensation"] + "') WHERE id = " + id);
		res.json(new_survey.rows);
	} catch (err) {
		console.log(err);
	}
});

//delete a todo
app.delete("/survey/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const del_todo = await pool.query("DELETE FROM survey WHERE id = " + id);
		res.json("Survey data deleted!");
	} catch (err) {
		console.error(err.message);
	}
})

app.listen(5000, () => {
	console.log("SERVER running propertly on port 5000")
});
