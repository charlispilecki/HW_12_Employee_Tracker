/*
    Create tables
*/

create table department (
    id int,
    name VARCHAR(30),
    primary key (id)
);

create table role (
    id int,
    title VARCHAR(30),
    salary decimal,
    department_id int,
    primary key (id),
    foreign key (department_id) references department(id)
);

create table employee (
    id int,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id int,
    manager_id int,
    primary key (id),
    foreign key (role_id) references role(id),
    foreign key (manager_id) references employee(id)
);



