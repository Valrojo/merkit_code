CREATE DATABASE merkitdb;

CREATE TYPE type_unidad AS ENUM ('Kg', 'gr', 'Unidad');

CREATE TABLE productos
(
ID_Productos serial,
Nombre varchar(20),
Descripcion varchar(20),
Marca varchar(20),
Stock DOUBLE PRECISION,
Codigo varchar(20),
Unidad type_unidad,
Precio int,
Foto varchar(20),
PRIMARY KEY(ID_Productos)
);