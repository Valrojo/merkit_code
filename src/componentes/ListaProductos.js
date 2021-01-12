import React, {Fragment, useEffect, useState} from "react";
import x from './automata.jpg';
import BarraBusqueda from "./BarraBusqueda"




const ListaProductos = () => {
    const [venta, setVentas] = useState([]);
    const [producto, setProductos] = useState([]);
    
    //get ventas
    const getVenta = async () => {

        try {
            
            const respuesta = await fetch("http://localhost:5000/ventas");
            const dataJson = await respuesta.json();

            setVentas(dataJson);
        } catch (err) {
            console.error(err.message)
        }
    }

    //crea productos en venta
    const creaPV = async (id_venta,id_producto,unidad,cantidad,precio) => {

        try {
            
            const body = {unidad, cantidad, precio}
            const creaPV = await fetch(`http://localhost:5000/itemVenta/${id_venta}&${id_producto}`,
            {method: "POST",
            headers: { "Content-type": "application/json"},
            body: JSON.stringify(body)
            });
            console.log(creaPV);
            console.log(body);
            /* setVentas(venta.filter(ventas => ventas.id_venta !== id_venta)) */

            /* window.location = "/" */

        } catch (err) {
            console.error(err.message)
        }
    }

    //get productos
    const getProducto = async () => {

        try {
            
            const respuesta = await fetch("http://localhost:5000/productos");
            const dataJson = await respuesta.json();

            setProductos(dataJson);
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() =>{
        getProducto();
        getVenta();
    }, []);

    return(


        <div className="container">


            <div className="row row-cols-1 row-cols-md-5 g-4"style={{
                    position: 'relative'}} > 

            {producto.map(productos=> (
                <div className="col card text-center" style={{
                    alignItems: 'center', 
                    height: "300px",

                    display: "flex",
                    flexDirection: "col",
                    justifyContent: "space-around"}} 

                        key={productos.id_productos}>
                        
                            <Fragment>
                            </Fragment>

                            <div className="card-body" 
                                    style={{
                                    display: "flex",
                                    flexFlow: "column",
                                    justifyContent: "space-around",
                                    alignItems: "center"
                                    }}>

                                <img className="card-img-top   " src={x} alt=""/>

                                <h4 className="card-title">{productos.nombre}</h4>
                                <p className="card-text">Descripcion: {productos.descripcion}</p>
                                <p className="card-text">Stock: {productos.stock}</p>
                                <p className="card-text">${productos.precio}</p>
                                
                                <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Agregar
                                </button>


                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    {venta.map(ventas=> (
                                        <a className="dropdown-item" href="#" onClick={() => creaPV(ventas.id_venta,productos.id_productos,productos.unidad,1,productos.precio)}>Venta id: {ventas.id_venta}</a>
                                    ))}
                                    </div>

                                </div>

                            </div>
                </div>
            ))}

            </div>
        </div>
    )
};

export default ListaProductos;