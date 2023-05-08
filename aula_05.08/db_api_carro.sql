create database db_api_carros;

use db_api_carros;

create table carros(
	codigo int primary key auto_increment, 
    modelo varchar(30),
    placa varchar(7)
);

insert into carros(modelo, placa) values('Corolla', 'GGG1515'); 
insert into carros(modelo, placa) values('Civic','ELV1590');

select * from carros;