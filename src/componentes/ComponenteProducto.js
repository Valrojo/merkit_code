  
import React, { Component } from 'react';

export default class ComponenteProducto extends Component{
    constructor(id,nombre,descripcion,marca,stock,unidad,codigo,precio,foto){
        super();
        this.id= id;
        this.nombre= nombre;
        this.descripcion= descripcion;
        this.marca= marca;
        this.stock = stock;
        this.unidad = unidad;
        this.codigo = codigo;
        this.precio= precio;
        this.foto= foto;
    }
}