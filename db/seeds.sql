-- Select burgers_db
USE `burgers_db`;

-- insert 3 burgers
INSERT INTO `burgers` (burger_name, devoured, date) VALUES ('Angus', false, CURRENT_TIMESTAMP);
INSERT INTO `burgers` (burger_name, devoured, date) VALUES ('Kobe', false, CURRENT_TIMESTAMP);
INSERT INTO `burgers` (burger_name, devoured, date) VALUES ('Veggie', false, CURRENT_TIMESTAMP);