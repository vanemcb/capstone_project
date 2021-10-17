CREATE TABLE users (
	login_id SERIAL PRIMARY KEY,
	username VARCHAR(255),
	password VARCHAR (24),
	email VARCHAR (50) UNIQUE
	);

CREATE TABLE survey (
	survey_id SERIAL PRIMARY KEY REFERENCES users(login_id) ON UPDATE cascade,
	gender VARCHAR(12),
	english_level VARCHAR(4),
	coding_learning VARCHAR(24),
	education_level VARCHAR(48),
	salary INT,
	bonus INT,
	currency VARCHAR(32),
	title VARCHAR(128),
	level VARCHAR(64),
	total_xp FLOAT,
	at_company_xp FLOAT,
	company VARCHAR(128),
	company_location VARCHAR(128),
	business_field VARCHAR(128),
	compensation VARCHAR
	);
