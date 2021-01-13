import React, { Component, Fragment } from 'react';

import ItemCard from '../componentes/ItemCard';
import x from '../componentes/x.jpg';
import Inventario from '../clases/Inventario';

export default class PageInventario extends Component{
    constructor(){
        super();
        this.state = {
            inventario: undefined,
            height: 0
        };

        this.updateWindowDimensions = () => {
            console.log("Update!");
            this.setState({
              height: window.innerHeight
            })
          };

        this.renderProductos = () => {
            const { inventario } = this.state;
            if(inventario !== undefined){
                let cardList = [];
                for(const producto of inventario.productos){
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

        this.onClickAddButton = (nombre) => {
            let { inventario } = this.state;
            if(inventario !== undefined){
                inventario.addProduct(nombre);
            }
            this.forceUpdate();
        }
    }

    componentDidMount(){
        this.setState({ inventario: this.props.inventario });
        // Para las dimensiones:
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    render(){
        const { renderProductos, onClickAddButton } = this;
        const { height } = this.state;
        const listHeight = `${height - 20}px`;
        return (
            <Fragment>
                <div style={{
                        textAlign: "center",
                        width: "100px",
                        backgroundColor: "#DCDCDC" 
                    }}
                >
                    <button className="btn btn-primary font-weight-bold"
                        style={{ margin: "10px", width: "80px", height: "80px" }}
                        onClick={ () => onClickAddButton("Nuevo Item") }
                    >
                        +
                    </button>
                </div>
                <div 
                    style={{
                        display: "flex",
                        flex: "1",
                        flexFlow: "row wrap",
                        alignItems: "flex-start",
                        minHeight: "0",
                        height: listHeight,
                        overflowY: "auto" 
                    }}
                >
                    {renderProductos()}
                </div>
            </Fragment>
        );
    }
}