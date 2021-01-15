import React, { Component } from 'react';

export default class ItemCard extends Component{
    constructor(){
        super();
    }

    render(){
        const { nombre, descripcion, marca, precio, imagen } = this.props;
        return(
            <div 
                className="card text-center"
                style={{ 
                    alignItems: "center",
                    width: "150px",
                    margin: "10px 0px 0px 10px"
                }}
            >
                <img className="card-img-top" src={imagen} alt=""/>
                <div className="card-body d-flex flex-column p-0 w-100"
                    style={{ height: "8rem" }}
                >
                    <strong className="card-title">{nombre}</strong>
                    <div className="card-text">{descripcion}</div>
                    <div className="card-text">{marca}</div>
                    <div className="card-text mt-auto">${precio}</div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary btn-block">Editar</button>
                </div>
            </div>
        );
    }
}