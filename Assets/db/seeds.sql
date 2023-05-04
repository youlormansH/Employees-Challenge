INSERT INTO department (name)
values
('sales'), ('Finance'), ('engineering'), ('legal');

INSERT INTO role (title, salary, department_id)

values
('salesperson',100000,1), ('account managger', 90000, 2), ('accountant',75000,2),
 ('software engineer',120000,3), ('Lead engineer', 125000, 3), ('legal lead', 140000, 4),
 ('lawyer', 150000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id )
values
('youlo', 'hill',1 NULL),
('martha', 'jorees',2),
('john', 'chan', 2, 2),
('marcus', 'joseph', 3 null),
('linda', 'flinch', 3, 2),
('will', 'stone', 4),
('dave', 'chilla', 4,2);null

