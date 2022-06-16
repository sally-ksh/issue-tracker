-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema issue_tracker
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema issue_tracker
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `issue_tracker` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `issue_tracker` ;

-- -----------------------------------------------------
-- Table `issue_tracker`.`issue_tracker_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `issue_tracker`.`issue_tracker_user` (
                                                                    `user_id` BIGINT NOT NULL AUTO_INCREMENT,
                                                                    `nick_name` VARCHAR(12) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(12) NOT NULL,
    `image` VARCHAR(200) NULL,
    `is_deleted` TINYINT(1) NULL DEFAULT 0,
    PRIMARY KEY (`user_id`))
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `issue_tracker`.`issue_tracker_project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `issue_tracker`.`issue_tracker_project` (
                                                                       `project_id` BIGINT NOT NULL AUTO_INCREMENT,
                                                                       `project_name` VARCHAR(30) NOT NULL,
    `project_description` VARCHAR(10000) NULL,
    PRIMARY KEY (`project_id`))
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `issue_tracker`.`issue_tracker_label`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `issue_tracker`.`issue_tracker_label` (
                                                                     `label_id` BIGINT NOT NULL AUTO_INCREMENT,
                                                                     `label_name` VARCHAR(30) NOT NULL,
    `label_description` VARCHAR(50) NULL,
    `background_color` VARCHAR(10) NOT NULL,
    `font_color` VARCHAR(10) NOT NULL DEFAULT 'font_color',
    `is_deleted` TINYINT(1) NULL DEFAULT 0,
    `project_id` BIGINT NOT NULL,
    PRIMARY KEY (`label_id`, `project_id`),
    INDEX `fk_label_project1_idx` (`project_id` ASC) VISIBLE,
    CONSTRAINT `fk_label_project1`
    FOREIGN KEY (`project_id`)
    REFERENCES `issue_tracker`.`issue_tracker_project` (`project_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `issue_tracker`.`issue_tracker_milestone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `issue_tracker`.`issue_tracker_milestone` (
                                                                         `milestone_id` BIGINT NOT NULL AUTO_INCREMENT,
                                                                         `milestone_title` VARCHAR(45) NOT NULL,
    `description` VARCHAR(45) NULL,
    `completion_date` VARCHAR(45) NOT NULL,
    `is_deleted` TINYINT(1) NOT NULL DEFAULT 0,
    `project_id` BIGINT NOT NULL,
    PRIMARY KEY (`milestone_id`, `project_id`),
    INDEX `fk_milestone_project1_idx` (`project_id` ASC) VISIBLE,
    CONSTRAINT `fk_milestone_project1`
    FOREIGN KEY (`project_id`)
    REFERENCES `issue_tracker`.`issue_tracker_project` (`project_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `issue_tracker`.`issue_tracker_member`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `issue_tracker`.`issue_tracker_member` (
                                                                      `project_id` BIGINT NOT NULL,
                                                                      `user_id` BIGINT NOT NULL,
                                                                      `is_deleted` TINYINT(1) NULL DEFAULT 0,
    INDEX `fk_project_has_user_user1_idx` (`user_id` ASC) VISIBLE,
    INDEX `fk_project_has_user_project1_idx` (`project_id` ASC) VISIBLE,
    PRIMARY KEY (`user_id`, `project_id`),
    CONSTRAINT `fk_project_has_user_project1`
    FOREIGN KEY (`project_id`)
    REFERENCES `issue_tracker`.`issue_tracker_project` (`project_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_project_has_user_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `issue_tracker`.`issue_tracker_user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `issue_tracker`.`issue_tracker_issue`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `issue_tracker`.`issue_tracker_issue` (
                                                                     `issue_id` BIGINT NOT NULL AUTO_INCREMENT,
                                                                     `issue_title` VARCHAR(50) NOT NULL,
    `issue_status` VARCHAR(10) NOT NULL DEFAULT 'opened' COMMENT 'opened or closed',
    `issue_order` INT NOT NULL,
    `user_id` BIGINT NOT NULL,
    `project_id` BIGINT NOT NULL,
    `milestone_id` BIGINT NOT NULL,
    `is_deleted` TINYINT(1) NULL DEFAULT 0,
    PRIMARY KEY (`issue_id`, `user_id`, `project_id`, `milestone_id`),
    INDEX `fk_issue_tracke_issue_issue_tracke_milestone1_idx` (`milestone_id` ASC) VISIBLE,
    INDEX `fk_issue_tracker_issue_issue_tracker_member1_idx` (`user_id` ASC, `project_id` ASC) VISIBLE,
    CONSTRAINT `fk_issue_tracke_issue_issue_tracke_milestone1`
    FOREIGN KEY (`milestone_id`)
    REFERENCES `issue_tracker`.`issue_tracker_milestone` (`milestone_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_issue_tracker_issue_issue_tracker_member1`
    FOREIGN KEY (`user_id` , `project_id`)
    REFERENCES `issue_tracker`.`issue_tracker_member` (`user_id` , `project_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `issue_tracker`.`issue_tracker_commant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `issue_tracker`.`issue_tracker_commant` (
                                                                       `issue_id` BIGINT NOT NULL,
                                                                       `comment_content` VARCHAR(500) NOT NULL,
    `date_of_created` TIMESTAMP NOT NULL,
    `is_deleted` TINYINT(1) NULL DEFAULT 0,
    `user_id` BIGINT NOT NULL,
    `project_id` BIGINT NOT NULL,
    PRIMARY KEY (`issue_id`, `user_id`, `project_id`),
    INDEX `fk_member_has_issue1_issue1_idx` (`issue_id` ASC) VISIBLE,
    INDEX `fk_issue_tracker_commant_issue_tracker_member1_idx` (`user_id` ASC, `project_id` ASC) VISIBLE,
    CONSTRAINT `fk_member_has_issue1_issue1`
    FOREIGN KEY (`issue_id`)
    REFERENCES `issue_tracker`.`issue_tracker_issue` (`issue_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_issue_tracker_commant_issue_tracker_member1`
    FOREIGN KEY (`user_id` , `project_id`)
    REFERENCES `issue_tracker`.`issue_tracker_member` (`user_id` , `project_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `issue_tracker`.`issue_tracker_manager`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `issue_tracker`.`issue_tracker_manager` (
                                                                       `issue_id` BIGINT NOT NULL,
                                                                       `user_id` BIGINT NOT NULL,
                                                                       `project_id` BIGINT NOT NULL,
                                                                       PRIMARY KEY (`issue_id`, `user_id`, `project_id`),
    INDEX `fk_member_has_issue_issue2_idx` (`issue_id` ASC) VISIBLE,
    INDEX `fk_issue_tracker_manager_issue_tracker_member1_idx` (`user_id` ASC, `project_id` ASC) VISIBLE,
    CONSTRAINT `fk_member_has_issue_issue2`
    FOREIGN KEY (`issue_id`)
    REFERENCES `issue_tracker`.`issue_tracker_issue` (`issue_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_issue_tracker_manager_issue_tracker_member1`
    FOREIGN KEY (`user_id` , `project_id`)
    REFERENCES `issue_tracker`.`issue_tracker_member` (`user_id` , `project_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `issue_tracker`.`label_has_issue`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `issue_tracker`.`label_has_issue` (
                                                                 `label_id` BIGINT NOT NULL,
                                                                 `issue_id` BIGINT NOT NULL,
                                                                 PRIMARY KEY (`label_id`, `issue_id`),
    INDEX `fk_label_has_issue_issue1_idx` (`issue_id` ASC) VISIBLE,
    INDEX `fk_label_has_issue_label1_idx` (`label_id` ASC) VISIBLE,
    CONSTRAINT `fk_label_has_issue_label1`
    FOREIGN KEY (`label_id`)
    REFERENCES `issue_tracker`.`issue_tracker_label` (`label_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_label_has_issue_issue1`
    FOREIGN KEY (`issue_id`)
    REFERENCES `issue_tracker`.`issue_tracker_issue` (`issue_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
