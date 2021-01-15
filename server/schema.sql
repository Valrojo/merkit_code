-- Always restart db
DROP DATABASE IF EXISTS merkitdb;

CREATE DATABASE merkitdb;

CREATE TYPE type_unidad AS ENUM ('unidad', 'kg', 'gr');

CREATE TABLE productos
(
id_producto serial,
nombre varchar(20),
descripcion varchar(20),
marca varchar(20),
stock DOUBLE PRECISION,
codigo varchar(20),
unidad type_unidad,
precio int,
foto varchar(20),
PRIMARY KEY(id_producto)
);

CREATE TABLE logs_inventario
(
id serial,
fecha date,
id_producto int,
diferenciastock DOUBLE PRECISION,
tipo type_unidad,
detalle varchar(100),
PRIMARY KEY(ID),
CONSTRAINT fk_productos FOREIGN KEY(id_producto) REFERENCES productos(id_producto)
);

CREATE TABLE ventas
(
id_venta serial,
fecha date,
PRIMARY KEY(id_venta)
);

CREATE TABLE items_venta
(
id_venta int,
id_producto int,
unidad type_unidad,
cantidad DOUBLE PRECISION,
precio int,
PRIMARY KEY(id_venta,id_producto),
CONSTRAINT fk_venta FOREIGN KEY(id_venta) REFERENCES ventas(id_venta),
CONSTRAINT fk_producto FOREIGN KEY(id_producto) REFERENCES productos(id_producto)
);