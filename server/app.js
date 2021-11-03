const express = require('express')
const cors = require("cors");
const functions = require('./functions.js')
const { sequelize, survey, users, Files } = require('./models')
const cron = require('node-cron');
const axios = require('axios');
const fs = require('fs');
const { bonus_to_dollars } = require('./functions.js');

const app = express()
app.use(cors());
app.use(express.json())

//CRON.SCHEDULE, checks everyday at hour: 1, whats the current
//exchange rate for 1 US Dollar in Colombian Pesos
// the follow schema shows how to set the time of the cron job
// # ┌────────────── second(optional)
//  # │ ┌──────────── minute
//  # │ │ ┌────────── hour
//  # │ │ │ ┌──────── day of month
//  # │ │ │ │ ┌────── month
//  # │ │ │ │ │ ┌──── day of week
//  # │ │ │ │ │ │
//  # │ │ │ │ │ │
//  # * * * * * *
cron.schedule('* 1 * * *', async function usd_cop_rate() {
	const exchange_rate = {}
	try {
		const response = await axios.get('https://api.currencyfreaks.com/latest?apikey=4f74f47f67724b2fafd71a1e8317481c')
		exchange_rate['usdcop'] = response.data.rates["COP"]
		fs.writeFile('./exchange_rate.json', JSON.stringify(exchange_rate), err => {
			if (err) {
				console.error(err)
				return
			}
			console.log("File created!\n")
		})
	} catch (error) {
		console.error(error)
	}
});

//gets a file by id
app.get("/file/:id", async (req, res) => {
	const id = req.params.id;
	try {
		const file = await Files.findOne({
			where: { id: id }
		});
		console.log("File found!: \n");
		res.send(file.path)
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: 'File not found' });
	}
});

//submits a survey
app.post("/add_salary", async (req, res) => {
	const { gender, english_level, coding_learn, education_level,
		salary, bonus, currency, title, level, total_xp, at_company_xp,
		company, company_location, company_bussines, compensation, email } = req.body;
	try {
		const surveys = await survey.create({
			gender, english_level, coding_learn, education_level,
			salary, bonus, currency, title, level, total_xp, at_company_xp,
			company, company_location, company_bussines, compensation, email
		});
		return res.json(surveys.id);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});


//gets all survey results
app.get("/survey", async (req, res) => {
	try {
		const allsurvey = await survey.findAll()
		const rate = functions.get_rate()
		return res.json(allsurvey);
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: 'Something went wrong' });
	}
});

//gets a survey by id
app.get("/survey/:id", async (req, res) => {
	const id = req.params.id;
	try {
		const surveys = await survey.findOne({
			where: { id: id }
		});
		return res.json(surveys);
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: 'survey not found' });
	}
});

//links a survey to a user
app.put("/survey_registry/:s_id/:u_id", async (req, res) => {
	const s_id = req.params.s_id;
	const u_id = req.params.user_id;
	try {
		const surveys = await survey.findOne({ where: { id: s_id } })
		if (surveys) {
			const user = await users.findOne({ where: { id: u_id } })
			if (user) {
				surveys.user_id = u_id;
				surveys.save();
				return res.json(surveys)
			}
		}
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: 'survey not found' });
	}
});

//updates a survey
app.put("/survey/:id", async (req, res) => {
	const id = req.params.id;
	const { gender, english_level, coding_learn, education_level,
		salary, bonus, currency, title, level, total_xp, at_company_xp,
		company, company_location, company_bussines, compensation, email } = req.body;
	try {
		const surveys = await survey.findOne({ where: { id: id } })
		surveys.gender = gender
		surveys.english_level = english_level
		surveys.coding_learn = coding_learn
		surveys.education_level = education_level
		surveys.salary = salary
		surveys.bonus = bonus
		surveys.currency = currency
		surveys.title = title
		surveys.level = level
		surveys.total_xp = total_xp
		surveys.at_company_xp = at_company_xp
		surveys.company = company
		surveys.company_location = company_location
		surveys.company_bussines = company_bussines
		surveys.compensation = compensation
		surveys.email = email

		await surveys.save()

		return res.json(surveys)
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: 'survey not found' });
	}
});

//deletes a survey
app.delete("/survey/:id", async (req, res) => {
	const id = req.params.id;
	try {
		const surveys = await survey.findOne({
			where: { id: id }
		});
		await surveys.destroy();
		return res.json({ message: 'survey successfully deleted~' });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: 'survey not found' });
	}
});


//HOME --> Gets all companies and displays its median salaries by position
app.get("/", async (req, res) => {
	try {
		const all_survey = await survey.findAll()
		const salary_company = functions.company_salary(all_survey)
		return res.json(salary_company);
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: 'Something went wrong' });
	}
});

//returns all company names, picks a random company and gets the non-salary benefits
// positions, median salary, average salary and bonus for such company
app.get("/by_company", async (req, res) => {
	try {
		const all_survey = await survey.findAll()
		const companies_list = [...new Set(all_survey.map(item => item.company))];
		const company_name = functions.random_array(companies_list)
		try {
			const surveys = await survey.findAll({
				where: { company: company_name }
			});
			const positions_list = [...new Set(surveys.map(item => item.title))];
			const benefits = [...new Set(surveys.map(item => item.compensation))];
			const benefits_list = functions.remove_null(benefits)
			const salary_company = functions.company_salary(surveys)
			const salaries_by_level = functions.salaries_by_position(surveys) //
			const salaries_list = []
			const bonus_list = []
			for (salaries of surveys) {
				const usd_salary = functions.to_dollars(salaries)
				salaries_list.push(usd_salary)
				bonus_list.push(bonus_to_dollars(salaries))
			}
			const average_salary = functions.average(salaries_list);
			const average_bonus = functions.average(bonus_list);
			return res.json({
				"company_name": company_name,
				"company_median_salary": salary_company,
				"average_salary": average_salary,
				"average_bonus": average_bonus,
				"positions_list": positions_list,
				"benefits": benefits_list,
				"companies_list": companies_list,
				"salaries_by_level": salaries_by_level
			});
		} catch (err) {
			console.log(err);
			return res.status(500).json({ error: 'survey not found' });
		}
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: 'Something went wrong' });
	}
});

//returns all company names, and gets the non-salary benefits
// positions, median salary, average salary and bonus for a specific company
app.get("/by_company/:company", async (req, res) => {
	const company_name = req.params.company;
	try {
		const all_survey = await survey.findAll()
		const companies_list = [...new Set(all_survey.map(item => item.company))];
		try {
			const surveys = await survey.findAll({
				where: { company: company_name }
			});
			const positions_list = [...new Set(surveys.map(item => item.title))];
			const benefits = [...new Set(surveys.map(item => item.compensation))];
			const benefits_list = functions.remove_null(benefits)
			const salary_company = functions.company_salary(surveys)
			const salaries_by_level = functions.salaries_by_position(surveys) //
			const salaries_list = []
			const bonus_list = []
			for (salaries of surveys) {
				const usd_salary = functions.to_dollars(salaries)
				salaries_list.push(usd_salary)
				bonus_list.push(bonus_to_dollars(salaries))
			}
			const average_salary = functions.average(salaries_list);
			const average_bonus = functions.average(bonus_list);
			return res.json({
				"company_name": company_name,
				"company_median_salary": salary_company,
				"average_salary": average_salary,
				"average_bonus": average_bonus,
				"positions_list": positions_list,
				"benefits": benefits_list,
				"companies_list": companies_list,
				"salaries_by_level": salaries_by_level
			});
		} catch (err) {
			console.log(err);
			return res.status(500).json({ error: 'survey not found' });
		}
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: 'Something went wrong' });
	}
});

// For a given company, returns: all positions, also the salaries per level for a
// given title, its median salaries, average salary and bonus and a list of all
// non salary benefits
app.get("/by_company/:company_name/:position", async (req, res) => {
	const company_name = req.params.company_name;
	const position = req.params.position
	try {
		const all_survey = await survey.findAll();
		const companies_list = [...new Set(all_survey.map(item => item.company))];
		try {
			const surveys = await survey.findAll({
				where: { company: company_name, title: position }
			});
			const positions_list = [...new Set(surveys.map(item => item.title))];
			const benefits = [...new Set(surveys.map(item => item.compensation))];
			const benefits_list = functions.remove_null(benefits)
			const salary_company = functions.salaries_level(surveys)
			const salaries_list = []
			const bonus_list = []
			for (salaries of surveys) {
				const usd_salary = functions.to_dollars(salaries)
				salaries_list.push(usd_salary)
				bonus_list.push(bonus_to_dollars(salaries))
			}
			const average_salary = functions.average(salaries_list);
			const average_bonus = functions.average(bonus_list);
			return res.json({
				"company_name": company_name,
				"title_salaries": salary_company,
				"average_salary": average_salary,
				"average_bonus": average_bonus,
				"positions_list": positions_list,
				"benefits": benefits_list,
				"companies_list": companies_list
			});
		} catch (err) {
			console.log(err);
			return res.status(500).json({ error: 'survey not found' });
		}
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: 'Something went wrong' });
	}
});

//gets salaries, salaries by company and latest entries for a given postion
// and gender
app.get("/by_position/:position/:filter", async (req, res) => {
	const position = req.params.position;
	const filter = req.params.filter
	try {
		const surveys = await survey.findAll({
			where: { title: position }
		});
		const salary_company = functions.postion_salary_filter(surveys, filter)
		const salaries_list = [];
		const bonus_list = [];
		let pos_avg_salary;
		for (salaries of surveys) {
			salaries_list.push(salaries["dataValues"]["salary"])
			bonus_list.push(salaries["dataValues"]["bonus"])
		}
		if (salaries_list.length > 0) {
			pos_avg_salary = functions.median(salaries_list);
		}
		const recent_entries = await functions.last_entries(position)
		return res.json({
			"salaries_by_company": salary_company, "salaries": salaries_list,
			"bonus": bonus_list, "postion_avg_salary": pos_avg_salary,
			"last_entries": recent_entries
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({ error: 'No data found' });
	}
});

// returns general information of survey population, allowed filters are
// those listed in the -available_filters- list.
app.get("/filter/:filter", async (req, res) => {
	const filter = req.params.filter;
	const available_filters =
		[
			"gender",
			"english_level",
			"education_level",
			"total_xp",
			"company_location",
			"coding_learn",
			"by_company"
		]
	if (available_filters.includes(filter)) {
		try {
			const surveys = await survey.findAll();
			const general_filters = functions.general_filters(surveys, filter)
			if (Object.keys(general_filters).length === 0) {
				console.log("No data found")
				return res.status(500).json({ message: 'No data found' });
			}
			return res.json(general_filters);
		} catch (err) {
			console.log(err);
			return res.status(500).json({ error: 'No data found' });
		}
	} else {
		console.log("Filter not available")
		return res.status(500).json({ error: "Filter not available" })
	}
});

// Endpoints to deal with users registration, requests and responses -------------------------------------

//submits a user registration request
app.post("/user_registry", async (req, res) => {
	const { name, last_name, username, email, password } = req.body;
	try {
		const user = await users.create({
			name: name,
			last_name: last_name,
			username: username,
			email: email,
			password: password
		});
		return res.json(user);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});

app.get("/users", async (req, res) => {
	try {
		const surveys = await users.findAll();
		return res.json(surveys);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});

app.get("/user/:id", async (req, res) => {
	const id = req.params.id;
	try {
		const user = await users.findAll({
			where: { id: id }
		});
		return res.json(surveys);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});


app.put("/user/:id", async (req, res) => {
	const id = req.params.id;
	const { name, last_name, username, email, password } = req.body;
	try {
		const surveys = await survey.update({
			name: name,
			last_name: last_name,
			username: username,
			email: email,
			password: password
		}, {
			where: { id: id }
		});
		return res.json(surveys);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
})

app.delete("/user/:id", async (req, res) => {
	const id = req.params.id;
	try {
		const surveys = await survey.destroy({
			where: { id: id }
		});
		return res.json(surveys);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
})

app.listen({ port: 5000 }, async () => {
	console.log("Server up on port 5000")
	await sequelize.authenticate();
	console.log("Database correctly CONNECTED")
});

