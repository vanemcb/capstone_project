const express = require('express')
const cors = require("cors");
const functions = require('./functions.js')
const { sequelize, Survey, User } = require('./models')

const app = express()
app.use(cors());
app.use(express.json())

//ROUTES//

//submits a survey
app.post("/add_salary", async (req, res) => {
	const { gender, english_level, coding_learn, education_level,
		salary, bonus, currency, title, level, total_xp, at_company_xp,
		company, company_location, company_bussines, compensation } = req.body;
	try {
		const survey = await Survey.create({
			gender, english_level, coding_learn, education_level,
			salary, bonus, currency, title, level, total_xp, at_company_xp,
			company, company_location, company_bussines, compensation
		});
		return res.json(survey);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});

//get all survey results
app.get("/survey", async (req, res) => {
	try {
		const allsurvey = await Survey.findAll()
		return res.json(allsurvey);
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: 'Something went wrong' });
	}
});

//get a survey by id
app.get("/survey/:uuid", async (req, res) => {
	const uuid = req.params.uuid;
	try {
		const survey = await Survey.findOne({
			where: { uuid: uuid }
		});
		return res.json(survey);
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: 'Survey not found' });
	}
});

//update a survey
app.put("/survey/:uuid", async (req, res) => {
	const uuid = req.params.uuid;
	const { gender, english_level, coding_learn, education_level,
		salary, bonus, currency, title, level, total_xp, at_company_xp,
		company, company_location, company_bussines, compensation } = req.body;
	try {
		const survey = await Survey.findOne({ where: { uuid: uuid } })
		survey.gender = gender
		survey.english_level = english_level
		survey.coding_learn = coding_learn
		survey.education_level = education_level
		survey.salary = salary
		survey.bonus = bonus
		survey.currency = currency
		survey.title = title
		survey.level = level
		survey.total_xp = total_xp
		survey.at_company_xp = at_company_xp
		survey.company = company
		survey.company_location = company_location
		survey.company_bussines = company_bussines
		survey.compensation = compensation

		await survey.save()

		return res.json(survey)
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: 'Survey not found' });
	}
});

//delete a survey
app.delete("/survey/:uuid", async (req, res) => {
	const uuid = req.params.uuid;
	try {
		const survey = await Survey.findOne({
			where: { uuid: uuid }
		});
		await survey.destroy();
		return res.json({ message: 'Survey successfully deleted~' });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: 'Survey not found' });
	}
});


//HOME --> Get 3 random companies and display its averages salaries by position
app.get("/", async (req, res) => {
	try {
		const allsurvey = await Survey.findAll()
		const salary_company = functions.company_salary(allsurvey)
		console.log(salary_company)
		return res.json(salary_company);
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: 'Something went wrong' });
	}
});

//gets all company names
app.get("/by_company", async (req, res) => {
	try {
		const allsurvey = await Survey.findAll()
		const companies_list = [...new Set(allsurvey.map(item => item.company))];
		return res.json(companies_list);
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: 'Something went wrong' });
	}
});
//gets a list positions in a company and non salary benefits
app.get("/by_company/:company_name", async (req, res) => {
	const company_name = req.params.company_name;
	try {
		const survey = await Survey.findAll({
			where: { company: company_name }
		});
		const positions_list = [...new Set(survey.map(item => item.title))];
		const benefits = [...new Set(survey.map(item => item.compensation))];
		const benefits_list = functions.remove_null(benefits)
		return res.json({ "positions_list": positions_list, "benefits": benefits_list });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: 'Survey not found' });
	}
});

//gets salary range, non salary benefits, salaries by level and
app.get("/by_company/:company_name/:title", async (req, res) => {
	const company_name = req.params.company_name;
	const title = req.params.title;
	try {
		const survey = await Survey.findAll({
			where: { company: company_name, title: title }
		});
		const salaries_list = [];
		const bonus_list = [];
		for (salaries of survey) {
			salaries_list.push(salaries["dataValues"]["salary"])
			bonus_list.push(salaries["dataValues"]["bonus"])
		}
		const benefits = [...new Set(survey.map(item => item.compensation))];
		const benefits_list = functions.remove_null(benefits)
		const salary_by_level = functions.level_salary(survey);
		average_salary = parseInt(functions.average(salaries_list));
		average_bonus = parseInt(functions.average(bonus_list));
		return res.json({
			"salary_by_level": salary_by_level, "salaries_list": salaries_list,
			"average_salary": average_salary, "average_bonus": average_bonus, "benefits": benefits_list
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: 'Survey not found' });
	}
});


app.listen({ port: 5000 }, async () => {
	console.log("Server up on port 5000")
	await sequelize.authenticate()
	console.log("Database correctly CONNECTED")
});
