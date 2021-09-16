CREATE DATABASE IF NOT EXISTS group_8;
USE group_8;
DROP TABLE IF EXISTS user_info;
CREATE TABLE `user_info` (
  `Course id` int NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `zoom link` varchar(45) DEFAULT NULL,
  `access token` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Course id`)
) ENGINE=InnoDB;

INSERT INTO `group_8`.`user_info` (`Course id`, `username`, `password`, `email`, `zoom link`, `access token`) VALUES ('3206736', 'user1', 'password', 'CSUFstudent@csu.fullerton.edu', 'https://fullerton.zoom.us/j/83166205908', '1');
INSERT INTO `group_8`.`user_info` (`Course id`, `username`, `password`, `email`, `zoom link`, `access token`) VALUES ('3206737', 'user2', 'titan123', 'CSUFstudent2@csu.fullerton.edu', 'https://fullerton.zoom.us/j/83166205908', '2');
INSERT INTO `group_8`.`user_info` (`Course id`, `username`, `password`, `email`, `zoom link`, `access token`) VALUES ('3206738', 'user3', 'tuffy123', 'CSUFstudent3@csu.fullerton.edu', 'https://fullerton.zoom.us/j/83166205908', '3');
