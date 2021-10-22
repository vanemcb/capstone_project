const express = require('express')
const { sequelize, Survey, User } = require('./models')

const app = express()
app.use(express.json())

//ROUTES//

//submits a survey
app.post("/add_salary", async (req, res) => {
  const { gender,	english_level, coding_learn, education_level,
    salary, bonus, currency, title, level, total_xp, at_company_xp,
    company, company_location, company_bussines } = req.body;
  try {
    const survey = await Survey.create({
      gender, english_level, coding_learn, education_level,
      salary, bonus, currency, title, level, total_xp, at_company_xp,
      company, company_location, company_bussines });
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
      where: { uuid: uuid}
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
    company, company_location, company_bussines } = req.body;
  try {
    const survey = await Survey.findOne({ where: { uuid: uuid }})
    survey.gender = gender
    survey.english_level = english_level
    survey.coding_learn = coding_learn
    survey. education_level = education_level
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

    await survey.save()

    return res.json(survey)
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Survey not found' });
  }
});

//delete a todo
app.delete("/survey/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const survey = await Survey.findOne({
      where: { uuid: uuid }
    });
      await survey.destroy();
      return res.json({ message: 'Suvey successfully deleted~'} );
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Survey not found' });
  }
});



app.listen( {port:5000 }, async () => {
  console.log("Server up on port 5000")
  await sequelize.authenticate()
  console.log("Database correctly CONNECTED")
});