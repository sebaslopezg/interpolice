-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema interpolice
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema interpolice
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `interpolice` DEFAULT CHARACTER SET utf8;
USE `interpolice` ;

-- -----------------------------------------------------
-- Table `interpolice`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interpolice`.`categorias` (
  `id_categoria` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre_categoria` VARCHAR(45) NULL,
  PRIMARY KEY (`id_categoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interpolice`.`ciudadanos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interpolice`.`ciudadanos` (
  `id_ciudadanos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `apellido` VARCHAR(45) NULL,
  `fecha_nacimiento` VARCHAR(45) NULL,
  `foto` VARCHAR(45) NULL,
  `categoria_id_categoria` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id_ciudadanos`),
  INDEX `fk_ciudadanos_categoria_idx` (`categoria_id_categoria` ASC) ,
  CONSTRAINT `fk_ciudadanos_categoria`
    FOREIGN KEY (`categoria_id_categoria`)
    REFERENCES `interpolice`.`categorias` (`id_categoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interpolice`.`grados_delitos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interpolice`.`grados_delitos` (
  `id_grado_delito` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `descripcion` VARCHAR(45) NULL,
  PRIMARY KEY (`id_grado_delito`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interpolice`.`Delitos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interpolice`.`Delitos` (
  `id_delito` INT NOT NULL,
  `nombre_delito` VARCHAR(45) NULL,
  `descripcion_delito` VARCHAR(45) NULL,
  `grados_delitos_id_grado_delito` INT NOT NULL,
  PRIMARY KEY (`id_delito`),
  INDEX `fk_Delitos_grados_delitos1_idx` (`grados_delitos_id_grado_delito` ASC),
  CONSTRAINT `fk_Delitos_grados_delitos1`
    FOREIGN KEY (`grados_delitos_id_grado_delito`)
    REFERENCES `interpolice`.`grados_delitos` (`id_grado_delito`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interpolice`.`antecedentes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interpolice`.`antecedentes` (
  `id_antecedente` INT NOT NULL,
  `delito` VARCHAR(45) NULL,
  `ciudadanos_id_ciudadanos` INT NOT NULL,
  `Delitos_id_delito` INT NOT NULL,
  `fecha` DATE NULL,
  PRIMARY KEY (`id_antecedente`, `ciudadanos_id_ciudadanos`),
  INDEX `fk_antecedentes_ciudadanos1_idx` (`ciudadanos_id_ciudadanos` ASC),
  INDEX `fk_antecedentes_Delitos1_idx` (`Delitos_id_delito` ASC),
  CONSTRAINT `fk_antecedentes_ciudadanos1`
    FOREIGN KEY (`ciudadanos_id_ciudadanos`)
    REFERENCES `interpolice`.`ciudadanos` (`id_ciudadanos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_antecedentes_Delitos1`
    FOREIGN KEY (`Delitos_id_delito`)
    REFERENCES `interpolice`.`Delitos` (`id_delito`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interpolice`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interpolice`.`roles` (
  `id_rol` INT NOT NULL,
  `nombre_rol` INT NOT NULL,
  `descripcion_rol` INT NOT NULL,
  PRIMARY KEY (`id_rol`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `interpolice`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `interpolice`.`usuarios` (
  `id_usuario` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `apellido` VARCHAR(45) NULL,
  `estado` INT NULL,
  PRIMARY KEY (`id_usuario`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
