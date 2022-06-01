INSERT INTO department_db (dept_name)
VALUES  ("IT"),
        ("Operations"),
        ("Sales"),
        ("Customer Service");

INSERT INTO role_db (title, salary, dept_id)
VALUES  ("Technician", 55000, 1),
        ("Manager", 70000, 2),
        ("Consultant", 45000, 3),
        ("Representative", 40000, 4);

INSERT INTO employee_db(f_name, l_name, role_id, mgr_id)
VALUES  ("Jules", "Winnfield", 2, NULL),
        ("Sarah", "Connor", 2, NULL),
        ("Apollo", "Creed", 3, 2),
        ("Rick", "Deckard", 4, 1),
        ("Dave", "Bowman", 1, 2);
        
        
        