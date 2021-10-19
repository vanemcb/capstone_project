CREATE DATABASE compensation;

CREATE TABLE users (
	login_id INT SERIAL PRIMARY KEY,
	username VARCHAR(255),
	password VARCHAR (24),
	email VARCHAR (50) UNIQUE
	);

CREATE TABLE survey (
	id SERIAL PRIMARY KEY,
	login_id INT,
	FOREIGN KEY(login_id)
	REFERENCES users(login_id),
	gender VARCHAR(12),
	english_level VARCHAR(4),
	coding_learning VARCHAR(24),
	education_level VARCHAR(48),
	salary INT,
	bonus INT,
	currency VARCHAR(32),
	title VARCHAR(128),
	level VARCHAR(64),
	total_xp INT,
	at_company_xp INT,
	company VARCHAR(128),
	company_location VARCHAR(128),
	business_field VARCHAR(128),
	compensation VARCHAR
	);
