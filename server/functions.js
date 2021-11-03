const { sequelize, survey, user, Files } = require('./models')
const fs = require('fs')

survey_functions = {}

function average(nums) {
	return parseInt(nums.reduce((a, b) => (a + b)) / nums.length);
}

function median(arr) {
	const mid = Math.floor(arr.length / 2),
		nums = [...arr].sort((a, b) => a - b);
	return parseInt(arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2);
};

// Albanil memorial block
// Returns the median salaries of every level for an specific company
function level_salary(survey) {
	const l0_salaries = [];
	const l1_salaries = [];
	const l2_salaries = [];
	const l3_salaries = [];
	const l4_salaries = [];
	const l5_salaries = [];
	for (salaries of survey) {
		const us_salary = to_dollars(salaries)
		if (salaries["dataValues"]["level"] === "L0") {
			l0_salaries.push(us_salary)
		} else if (salaries["dataValues"]["level"] === "L1") {
			l1_salaries.push(us_salary)
		} else if (salaries["dataValues"]["level"] === "L2") {
			l2_salaries.push(us_salary)
		} else if (salaries["dataValues"]["level"] === "L3") {
			l3_salaries.push(us_salary)
		} else if (salaries["dataValues"]["level"] === "L4") {
			l4_salaries.push(us_salary)
		} else if (salaries["dataValues"]["level"] === "L5") {
			l5_salaries.push(us_salary)
		}
	}
	let l0_median = 0;
	let l1_median = 0;
	let l2_median = 0;
	let l3_median = 0;
	let l4_median = 0;
	let l5_median = 0;

	if (l0_salaries.length > 0) {
		l0_median = parseInt(median(l0_salaries));
	} if (l1_salaries.length > 0) {
		l1_median = parseInt(median(l1_salaries));
	}
	if (l2_salaries.length > 0) {
		l2_median = parseInt(median(l2_salaries));
	}
	if (l3_salaries.length > 0) {
		l3_median = parseInt(median(l3_salaries));
	}
	if (l4_salaries.length > 0) {
		l4_median = parseInt(median(l4_salaries));
	}
	if (l5_salaries.length > 0) {
		l5_median = parseInt(median(l5_salaries));
	}
	return ({
		"L0": l0_median, "L1": l1_median, "L2": l2_median, "L3": l3_median,
		"L4": l4_median, "L5": l5_median
	})

}

//Returns a dictionary containing the median salary per company per level
function company_salary(survey) {
	const company_salaries = {}
	dollar = get_rate()
	survey.forEach(e => company_salaries[e["dataValues"]["company"]] = {})
	survey.forEach(e => company_salaries[e["dataValues"]["company"]][e["dataValues"]["level"]] = [])
	survey.forEach(e => {
		co_name = e["dataValues"]["company"]
		const usd_salary = to_dollars(e)
		company_salaries[co_name][e["dataValues"]["level"]].push(usd_salary)
	})
	for (const co in company_salaries) {
		for (const sal in company_salaries[co]) {
			company_salaries[co][sal] = median(company_salaries[co][sal])
		}
	}
	return company_salaries
}

function salaries_level(survey) {
	const company_salaries = {}
	dollar = get_rate()
	survey.forEach(e => company_salaries[e["dataValues"]["level"]] = [])
	survey.forEach(e => {
		const usd_salary = to_dollars(e)
		company_salaries[e["dataValues"]["level"]].push(usd_salary)
	})
	return company_salaries
}

//Returns a list of salaries by position by level
function salaries_by_position(survey) {
	const company_salaries = {}
	const position_salaries = {}
	const position_bonus = {}
	dollar = get_rate()
	survey.forEach(e => {
		company_salaries[e.dataValues.title] = {}
		position_salaries[e.dataValues.title] = []
		position_bonus[e.dataValues.title] = []
	})
	survey.forEach(e => company_salaries[e.dataValues.title][e["dataValues"]["level"]] = [])
	survey.forEach(e => {
		const usd_salary = to_dollars(e)
		company_salaries[e.dataValues.title][e.dataValues.level].push(usd_salary)
		position_salaries[e.dataValues.title].push(usd_salary)
		position_bonus[e.dataValues.title].push(bonus_to_dollars(e))
	})
	for (salaries in position_salaries) {
		company_salaries[salaries]['average_salary'] = average(position_salaries[salaries]);
	}
	for (bonus in position_bonus) {
		company_salaries[bonus]['average_bonus'] = average(position_bonus[bonus]);
	}


	return company_salaries
}

//Returns a dictionary containing a list with the median salary per company per level
// for a given position
function postion_salary(survey) {
	const company_salaries = {}
	survey.forEach(e => company_salaries[e["dataValues"]["company"]] = [])
	survey.forEach(e => {
		const us_salary = to_dollars(e)
		co_name = e["dataValues"]["company"]
		company_salaries[co_name].push(us_salary)
	})
	for (const co in company_salaries) {
		company_salaries[co] = median(company_salaries[co])
	}
	return company_salaries
}

//SHOULD NOT ALLOW FOR SALARY FILTER
//EXPERIENCE SHOULD GO ON RANGES
// returns a dictionary with the salaries for a company and a given position with one additiona filter
// option such as gender, english level, etc
function postion_salary_filter(survey, filter) {
	const filter_salaries = {}
	survey.forEach(e => filter_salaries[e["dataValues"]["company"]] = {})
	survey.forEach(e => filter_salaries[e["dataValues"]["company"]][e["dataValues"][filter]] = [])
	survey.forEach(e => {
		const us_salary = to_dollars(e)
		co_name = e["dataValues"]["company"]
		filter_salaries[co_name][e["dataValues"][filter]].push(us_salary)
	})
	for (const co in filter_salaries) {
		for (const sal in filter_salaries[co]) {
			filter_salaries[co][sal] = median(filter_salaries[co][sal])
		}
	}
	return filter_salaries
}

// returns a dictionary with information filtered by only one
// specific parameter in the survey such as per gender population, english level,
// studies, xp, etc
function general_filters(survey, filter) {
	const general_filter = {}
	survey.forEach(e => {
		if (!Object.keys(survey)[0]) {
			return ({ filter: "No data available" })
		}
		if (typeof general_filter[e["dataValues"][filter]] === 'undefined') {
			general_filter[e["dataValues"][filter]] = 0
		}
		general_filter[e["dataValues"][filter]] += 1
	})
	return general_filter
}

//Returns a list of the last 15 entries for a given position in all companies
// with the parameters given in the entries_field variable
async function last_entries(position) {
	const surveys = await survey.findAll({
		where: { title: position }, order: [['createdAt', 'DESC']], limit: 15
	});
	const entries_list = []
	const entries_fields = ["company", "createdAt", "level", "total_xp", "at_company_xp", "salary", "bonus"]
	for (registry of surveys) {
		const recent_entries = {}
		for (fields in registry["dataValues"]) {
			if (entries_fields.includes(fields)) {
				if (fields === "salary") {
					recent_entries[fields] = to_dollars(registry)
				} else {
					recent_entries[fields] = registry["dataValues"][fields]
				}
			}
		}
		entries_list.push(recent_entries)
	}
	return entries_list
}

// Goes trough a list, removes all null elements and returs the modified list
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

//Opens the local file where the current day usd_cop exchange rate is stored
// and returns it
'use strict';
function get_rate() {
	let rawdata = fs.readFileSync('./exchange_rate.json', 'utf8');
	let usd_cop_rate = JSON.parse(rawdata);
	rate_us = parseInt(usd_cop_rate['usdcop'])
	return (rate_us)
}

// If salary information for a ginve survey is in Colombian Peso (COP)
// converts it to Dollars before returning it
function to_dollars(e) {
	if (e.dataValues.currency === "COP") {
		return parseInt(e.dataValues.salary / get_rate())
	}
	else {
		return e.dataValues.salary
	}
}

// If bonus information for a ginve survey is in Colombian Peso (COP)
// converts it to Dollars before returning it
function bonus_to_dollars(e) {
	if (e.dataValues.currency === "COP") {
		return parseInt(e.dataValues.bonus / get_rate())
	}
	else {
		return e.dataValues.bonus
	}
}

//Opens the local file where the current day usd_cop exchange rate is stored
// and returns it
'use strict';
function load_file(path) {
	let rawdata = fs.readFileSync(path);
	return (rawdata)
}

function random_array(array) {
	return array[Math.floor(Math.random() * array.length)]

}

survey_functions.average = average
survey_functions.level_salary = level_salary
survey_functions.remove_null = remove_null
survey_functions.company_salary = company_salary
survey_functions.postion_salary = postion_salary
survey_functions.last_entries = last_entries
survey_functions.postion_salary_filter = postion_salary_filter
survey_functions.general_filters = general_filters
survey_functions.get_rate = get_rate
survey_functions.to_dollars = to_dollars
survey_functions.bonus_to_dollars = bonus_to_dollars
survey_functions.load_file = load_file
survey_functions.median = median
survey_functions.random_array = random_array
survey_functions.salaries_level = salaries_level
survey_functions.salaries_by_position = salaries_by_position


module.exports = survey_functions;