DROP DATABASE IF EXISTS burgers_db;
Create DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id int(11) auto_increment NOT NULL,
  burger_name VARCHAR(45) NOT NULL,
  devoured TINYINT(1) DEFAULT 0,
	created_at DATETIME NOT NULL,
	PRIMARY KEY ( `id` )
);
