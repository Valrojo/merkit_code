import React, {Fragment, useEffect, useState, Component} from "react";

import x from './a.jpg';
import BarraBusqueda from "./BarraBusqueda"
import ItemProductosVentas from "./ItemProductosVentas"

export default class ListaVenta extends Component {

    constructor(){
        super();
        this.state = {
            venta: null,
            producto: null
          }


        //Crea ventas
    //get ventas
    this.getVenta = async () => {

        try {
            
            const respuesta = await fetch("http://localhost:5000/ventas");
            const dataJson = await respuesta.json();

            this.setState({venta: dataJson});
            
        } catch (err) {
            console.error(err.message)
        }
    }
    
    //crea productos en venta
    this.creaPV = async (id_venta,id_producto,unidad,cantidad,precio) => {

        try {
            
            const body = {unidad, cantidad, precio}
            const creaPV = await fetch(`http://localhost:5000/itemVenta/${id_venta}&${id_producto}`,
            {method: "POST",
            headers: { "Content-type": "application/json"},
            body: JSON.stringify(body)
            });
            console.log(creaPV);
            console.log(body);

        } catch (err) {
            console.error(err.message)
        }
    }
    
    
    //get productos
    this.getProducto = async () => {

        try {
            
            const respuesta = await fetch("http://localhost:5000/productos");
            const dataJson = await respuesta.json();

            this.setState({producto: dataJson});
        } catch (err) {
            console.error(err.message)
        }
    }

    this.renderPV =(venta, producto)=>{
        
        if (venta !== null){
            return(
            venta.map(ventas=> (
                <div key={ventas.id_venta}>
                <a className="dropdown-item" href="#" key={ventas.id_venta} onClick={() => this.creaPV(ventas.id_venta,producto.id_productos,producto.unidad,1,producto.precio)}>Venta id: {ventas.id_venta}</a>
                </div>
            )))

    }}

    this.renderVenta =(venta,producto) =>{

        if (producto !== null){
            
            return(
                producto.map(productos=> (
                    
                    <div className="col card text-center"  
    
                            key={productos.id_productos}>
    
                        

                                <div className="card-body" >
    
                                    <img className="card-img-top   " src={x} alt="" style = {{
                                        width: '100%',
                                        height: '5vw',
                                        objectFit: 'cover'
                                    }}/>
    

                                    

    
                                </div>
                                    <h4 className="card-title">{productos.nombre}</h4>
                                    <p className="card-text">{productos.descripcion}</p>
                                    <p className="card-text">Stock: {productos.stock}</p>
                                    <p className="card-text">${productos.precio}</p>

                                        <div className="dropdown card-footer text-center">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                            Agregar
                                        </button>
        
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            {this.renderPV(venta,productos)}
                                        </div>
                                </div>
                    
                    </div>
                ))
                
            )
    };
    

    }}
        
    componentDidMount() {
        this.getProducto();
        this.getVenta();
    }
    
    
    render(){
        const { venta } = this.state;
        const { producto } = this.state;
        return(
            <Fragment>

                <div className="container">


                <div className="row row-cols-1 row-cols-md-5 g-4"style={{
                        position: 'relative'}} > 

                        {this.renderVenta(venta,producto)}

                </div>
                </div>


        </Fragment>
        )
    }
}