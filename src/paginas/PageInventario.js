import React, { Component, Fragment } from 'react';

import ItemCard from '../componentes/ItemCard';
import x from '../componentes/x.jpg';
import Inventario from '../clases/Inventario';

export default class PageInventario extends Component{
    constructor(){
        super();
        this.inventario = new Inventario();
        
        this.renderProductos = () => {
            let cardList = [];
            for(const producto of this.inventario.productos){
                console.log(producto);
                cardList.push(
                    <ItemCard
                        key={producto.id}
                        nombre={producto.nombre}
                        descripcion={producto.descripcion}
                        marca={producto.marca}
                        precio={producto.precio}
                        imagen={x}
                    />
                )
            }
            return cardList;
        }
    }

    render(){
        const { renderProductos } = this;
        return (
            <div className="inventario h-100" 
                style={{
                    display: "flex",
                    flexFlow: "row nowrap",
                    flex: "1 1",
                    alignItems: "stretch"
                }}
            >
                <div style={{
                    textAlign: "center",
                    width: "150px",
                    backgroundColor: "#DCDCDC"}}
                >
                    <button 
                        className="btn btn-primary font-weight-bold"
                        style={{ margin: "10px", width: "100px", height: "100px" }}
                    >
                        +
                    </button>
                </div>
                <div style={{
                    display: "flex",
                    flexFlow: "row wrap",
                    flex: "1 1",
                    alignItems: "flex-start" }}
                >
                    {renderProductos()}
                </div>
            </div>
        );
    }
}
{/* <div className = 'inventario'>
    <ItemCard
        nombre="nombre1"
        descripcion="desc2"
        marca="marca3"
        precio="$12354"
        imagen={x}
    />
</div> */}