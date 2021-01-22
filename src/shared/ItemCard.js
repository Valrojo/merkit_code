import React, { Component } from 'react';

export default class ItemCard extends Component{
    constructor(){
        super();
    }

    render(){
        const {
            modalId, modalRef, // For modal use 
            producto, imagen
        } = this.props;
        const { nombre, descripcion, marca, precio } = producto;

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
                    <button className="btn btn-primary btn-block"
                        data-toggle="modal" data-target={`#${modalId}`}
                        onClick={() => {
                            modalRef.current.setData(producto);
                        }}
                    >Editar</button>
                </div>
            </div>
        );
    }
}