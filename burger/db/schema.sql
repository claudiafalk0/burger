### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	hasEaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
