import React, { Component, createRef, Fragment } from 'react';
import Inventario from '../../shared/Inventario';

import ItemCard from '../../shared/ItemCard';
import ModalForm from './ModalForm';
import x from '../../shared/x.jpg';

export default class PageInventario extends Component{
    constructor(){
        super();
        this.state = { height: 0 };
        // Constants:
        this.formModalId = "form_modal";
        this.editModalId = "edit_modal";
        this.editModalRef = createRef();

        // Inventario:
        this.funcForceUpdate = () => {
            console.log("Updating Page");
            this.forceUpdate();
        }
        this.inventario = new Inventario();

        this.updateWindowDimensions = () => {
            console.log("Updated dimensions!");
            this.setState({
              height: window.innerHeight
            })
          };

        this.renderProductos = () => {
            const { inventario, editModalId, editModalRef } = this;
            let cardList = [];
            for(const producto of inventario.productos){
                cardList.push(
                    <ItemCard
                        key={`p${producto.id}`}
                        producto={producto}
                        imagen={x}
                        modalId={editModalId}
                        modalRef={editModalRef}
                    />
                )
            }
            return cardList;
        }
    }

    componentDidMount(){
        this.inventario.funcUpdate = this.funcForceUpdate;
        
        // Para las dimensiones:
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount(){
        // Para las dimensiones:
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    render(){
        const {
            renderProductos, funcForceUpdate,
            inventario, formModalId, 
            editModalId, editModalRef
        } = this;
        const { height } = this.state;
        // Constans:
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
                        data-toggle="modal" data-target={`#${formModalId}`}
                    >+</button>
                    <ModalForm titulo="Agregar nuevo producto" id={formModalId} functionVisualUpdate={funcForceUpdate}
                        buttonText="Crear"
                        buttonFunction={
                            (producto) => {
                                console.log("Button AddNew");
                                inventario.addProduct(producto);
                            }
                        }
                    />
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
                    <ModalForm titulo="Editar producto" id={editModalId} functionVisualUpdate={funcForceUpdate}
                        ref={editModalRef}
                        buttonText="Editar"
                        buttonFunction={
                            (producto) => {
                                console.log("Must edit!");
                                console.log(producto);
                            }
                        }
                    />
                    {renderProductos()}
                </div>
            </Fragment>
        );
    }
}