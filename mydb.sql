CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost' WITH GRANT OPTION;
CREATE USER 'username'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'username'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

CREATE TABLE Users(
  ID int NOT NULL AUTO_INCREMENT,
  Name varchar(255),
  StudentId varchar(255),
  Major varchar(255),
  PRIMARY KEY (ID)
);
