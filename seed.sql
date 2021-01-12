
/*
    Drop tables if they exist for a clean start
*/
drop table if exists employee;
drop table if exists role;
drop table if exists department;

/*
    Create tables
*/
create table department (
    id int not null auto_increment,
    name VARCHAR(30),
    primary key (id)
);


create table role (
    id int not null auto_increment,
    title VARCHAR(30),
    salary decimal,
    department_id int,
    primary key (id),
    foreign key (department_id) references department(id)
);


create table employee (
    id int not null auto_increment,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id int,
    manager_id int,
    primary key (id),
    foreign key (role_id) references role(id),
    foreign key (manager_id) references employee(id)
);

/*
    Add some data
*/
insert into department (name) values 
('Marketing'), ('Human Resources'), ('Operations'), ('Sales')
;

select * from department
;

insert into role (title, salary, department_id) values
('Marketing Associate', 75000, 1), 
('Head of Marketing', 150000, 1), 
('People Partner', 90000, 2), 
('Customer Support Agent', 60000, 3), 
('Sales Associate', 50000, 4), 
('Sales Manager', 100000, 4)
;

select * from role
;

insert into employee (first_name, last_name, role_id, manager_id) values
('Bossypants', 'McPhee', 6, null),
('Teddy', 'Darling', 5, 1)
;

select * from employee
k
