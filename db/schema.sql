CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

DROP TABLE IF EXISTS burgers;

-- Create the table in the specified schema
CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOl DEFAULT false,
    PRIMARY KEY(id)
);
