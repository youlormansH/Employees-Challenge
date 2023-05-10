INSERT INTO department
    (name)
VALUES
('sales'),
('Finance'), 
('engineering'),
('legal');

INSERT INTO role 
     (title, salary, department_id)
VALUES
('salesperson', 100000, 1),
('account managger', 90000, 2),
('accountant', 75000, 2),
('software engineer',120000, 3),
('Lead engineer', 125000, 3),
('legal lead', 140000, 4),
('lawyer', 150000, 4);


INSERT INTO employee
    (first_name, last_name, role_id, manager_id )
VALUES
('youlo', 'hill', 1, NULL NOT NULL AUTO_INCREMENT),
('martha', 'jorees', 2, NULL),
('john', 'chan', 2, 2),
('marcus', 'joseph', 3, null),
('linda', 'flinch', 3, 2),
('will', 'stone', 4, null),
('dave', 'chilla', 4, 2);

