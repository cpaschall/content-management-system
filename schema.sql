DROP DATABASE IF EXISTS cms_db;
CREATE DATABASE cms_db;

USE cms_db;

CREATE TABLE department_db (
    id INT NOT NULL,
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role_db (
    id INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    dept_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (dept_id)
    REFERENCES department_db (id)
    ON DELETE SET NULL
);

CREATE TABLE employee_db (
    id INT NOT NULL,
    f_name VARCHAR(30) NOT NULL,
    l_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    mgr_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (mgr_id)
    REFERENCES role (id)
    ON DELETE SET NULL
);