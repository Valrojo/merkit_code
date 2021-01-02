import React, {Fragment, useEffect, useState} from "react";
import x from './automata.jpg';
import {barraBusqueda} from "./BarritaArriba"




const ListaProductos = () => {

    const [producto, setProductos] = useState([]);


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
    }, []);

    return(
        <Fragment>

            <div className="row row-cols-1 row-cols-md-4 g-4"style={{
                    position: 'relative'}} > 

            {producto.map(productos=> (
                <div className="col card text-center" style={{
                    alignItems: 'center', 
                    height: "300px",

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around"}} 

                        key={productos.id_producto}>
                        
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
                                <p className="card-text">{productos.descripcion}</p>
                                <p className="card-text">{productos.precio}</p>
                                
                                <p className="btn btn-primary" style={{ 
                                    width: "50px"
                                    }}
                                >+</p>
                            </div>
                </div>
            ))}

            </div>
        </Fragment>
    )
};

export default ListaProductos;