import React, {Fragment, useEffect, useState, Component} from "react";
import ComponenteProducto from './ComponenteProducto'
import x from './a.jpg';
import BarraBusqueda from "./BarraBusqueda"
import ItemProductosVentas from "./ItemProductosVentas"
import ProductosVenta from "./ProductosVenta";

export default class ListaVenta extends Component {

    constructor(){
        super();
        this.state = {
            producto: null,
            listaVentas: null,
            listaProductos: null
          }
        
    //get ventas
    
        //crea productos en venta
        this.creaPV = async (id_venta,id_producto,unidad,cantidad,precio) => {

            try {
                
                const body = {unidad, cantidad, precio}
                const creaPV = await fetch(`http://localhost:5000/itemVenta/${id_venta}&${id_producto}`,
                {method: "POST",
                headers: { "Content-type": "application/json"},
                body: JSON.stringify(body)
                });

            } catch (err) {
                console.error(err.message)
            }
        }
        
        this.creaComponenteProducto = (productos) => {

            if (productos !== null){
                productos.map(producto=> {
                    
                    let uProducto = new ComponenteProducto();
                    uProducto.id = producto.id_productos;
                    uProducto.nombre = producto.nombre;
                    uProducto.descripcion= producto.descripcion;
                    uProducto.marca= producto.marca;
                    uProducto.stock = producto.stock;
                    uProducto.unidad = producto.unidad;
                    uProducto.codigo = producto.codigo;
                    uProducto.precio= producto.precio;
                    uProducto.foto= producto.foto;

                    /* this.state.listaProductos.push(uProducto) */
                    this.state.listaProductos.push(uProducto);
                })
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

        this.renderVenta =(productos) =>{

            if (productos !== null && this.state.listaProductos !== null && this.state.listaVentas !== null){
                
                return(
                        
                        this.creaComponenteProducto(productos),

                        this.state.listaProductos.map(producto=> ( 
                            
                        <div className="col card text-center"  
        
                                key={producto.id}>
                            
                                    <div className="card-body" >
        
                                        <img className="card-img-top   " src={x} alt="" style = {{
                                            width: '100%',
                                            height: '5vw',
                                            objectFit: 'cover'
                                        }}/>
        
                                    </div>
                                        <h4 className="card-title">{producto.nombre}</h4>
                                        <p className="card-text">-{producto.descripcion}</p>
                                        <p className="card-text">Stock: {producto.stock}</p>
                                        <p className="card-text">${producto.precio}</p>

                                    <div className="dropdown card-footer text-center">

                                            <div>                       
                                            <input className="form-label" type="number" id="cantidadComprada" min="0" data-bind="value:replyNumber" style = {{width: "40%", height: "10%"}}/>{producto.unidad}
                                            </div>
                                            

                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                                Agregar
                                            </button>
            
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <div type="button" className="text-center" 
                                                onClick={() => 
                                                    {this.state.listaVentas[0].agregarProducto(producto), 
                                                    this.state.listaVentas[0].productosComprados(producto, document.getElementById("cantidadComprada").value),
                                                    this.state.listaVentas[0].state.cantidades.push(document.getElementById("cantidadComprada"))/* ,
                                                    this.props.funcUpdate(); */
                                                    }}>
                                                Venta 1</div>
                                                <div type="button" className="text-center" onClick={() => 
                                                    {this.state.listaVentas[1].agregarProducto(producto), 
                                                    this.state.listaVentas[1].productosComprados(producto, document.getElementById("cantidadComprada").value),
                                                    this.state.listaVentas[1].state.cantidades.push(document.getElementById("cantidadComprada"))/* ,
                                                    this.props.funcUpdate(); */
                                                    }}>Venta 2</div>
                                                <div type="button" className="text-center" onClick={() => 
                                                    {this.state.listaVentas[2].agregarProducto(producto), 
                                                    this.state.listaVentas[2].productosComprados(producto, document.getElementById("cantidadComprada").value),
                                                    this.state.listaVentas[2].state.cantidades.push(document.getElementById("cantidadComprada"))/* ,
                                                    this.props.funcUpdate(); */
                                                    }}>Venta 3</div>
                                            </div>
                                    </div>
                        
                        </div>
                    ))
                    
                )
        };
        

    }}
        
    componentDidMount() {
        this.setState({listaVentas: this.props.listaVenta, listaProductos: this.props.listaProductos});
        this.getProducto();
    }
    
    
    render(){
        const { producto } = this.state;
        return(
            <Fragment>

                <div className="container">


                <div className="row row-cols-1 row-cols-md-5 g-4"style={{
                        position: 'relative'}} > 

                        {this.renderVenta(producto)}

                </div>
                </div>


        </Fragment>
        
        )
    }
}