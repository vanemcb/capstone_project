survey_functions = {}

function average(nums) {
	return nums.reduce((a, b) => (a + b)) / nums.length;
}

// Albanil memorial block
function level_salary(survey) {
	const l0_salaries = [];
	const l1_salaries = [];
	const l2_salaries = [];
	const l3_salaries = [];
	const l4_salaries = [];
	const l5_salaries = [];
	for (salaries of survey) {
		if (salaries["dataValues"]["level"] === "L0") {
			l0_salaries.push(salaries["dataValues"]["salary"])
		} else if (salaries["dataValues"]["level"] === "L1") {
			l1_salaries.push(salaries["dataValues"]["salary"])
		} else if (salaries["dataValues"]["level"] === "L2") {
			l2_salaries.push(salaries["dataValues"]["salary"])
		} else if (salaries["dataValues"]["level"] === "L3") {
			l3_salaries.push(salaries["dataValues"]["salary"])
		} else if (salaries["dataValues"]["level"] === "L4") {
			l4_salaries.push(salaries["dataValues"]["salary"])
		} else if (salaries["dataValues"]["level"] === "L5") {
			l5_salaries.push(salaries["dataValues"]["salary"])
		}
	}
	let l0_average = 0;
	let l1_average = 0;
	let l2_average = 0;
	let l3_average = 0;
	let l4_average = 0;
	let l5_average = 0;

	if (l0_salaries.length > 0) {
		l0_average = parseInt(average(l0_salaries));
	} if (l1_salaries.length > 0) {
		l1_average = parseInt(average(l1_salaries));
	}
	if (l2_salaries.length > 0) {
		l2_average = parseInt(average(l2_salaries));
	}
	if (l3_salaries.length > 0) {
		l3_average = parseInt(average(l3_salaries));
	}
	if (l4_salaries.length > 0) {
		l4_average = parseInt(average(l4_salaries));
	}
	if (l5_salaries.length > 0) {
		l5_average = parseInt(average(l5_salaries));
	}
	return ({
		"L0": l0_average, "L1": l1_average, "L2": l2_average, "L3": l3_average,
		"L4": l4_average, "L5": l5_average
	})

}

function company_salary(survey) {
	const company_salaries = {}
	survey.forEach(e => company_salaries[e["dataValues"]["company"]] = {})
	survey.forEach(e => company_salaries[e["dataValues"]["company"]][e["dataValues"]["level"]] = [])
	survey.forEach(e => {
		co_name = e["dataValues"]["company"]
		company_salaries[co_name][e["dataValues"]["level"]].push(e["dataValues"]["salary"])
	})
	return company_salaries
}

function remove_null(array) {
	const new_array = []
	for (element of array) {
		if (element != null) {
			new_array.push(element)
		} else {
			continue
		}
	}
	return new_array
}

survey_functions.average = average
survey_functions.level_salary = level_salary
survey_functions.remove_null = remove_null
survey_functions.company_salary = company_salary

module.exports = survey_functions;