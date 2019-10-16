CREATE DATABASE sequelize_burger;

USE sequelize_burger;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    customer_name VARCHAR (255) NOT NULL,
    PRIMARY KEY (id)
);