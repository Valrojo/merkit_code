import React, {Fragment, Component} from 'react'

export default class ProductosVenta extends Component {

    constructor(imagen, nombre, descripcion, unidad ,precio) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.descripcion = unidad;
        this.precio = precio;
    }


    render(){
        <div>
            <img className="card-img-top   " src={x} alt=""/>
        
            <h4 className="card-title">{productos.nombre}</h4>
            <p className="card-text">Descripcion: {productos.descripcion}</p>
            <p className="card-text">Stock: {productos.stock}</p>
            <p className="card-text">${productos.precio}</p>
            
            <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Agregar
            </button>
            </div>
        </div>
    }
    
}