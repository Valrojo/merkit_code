import React, {Fragment, useEffect, useState} from "react";
import x from './x.jpg';

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
            {/*
            <table className="table table-sm text-center ">
                <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Boton</th>
                </tr>
                </thead>
                <tbody>
                {producto.map(producto=> (
                    <tr key={producto.id_producto}>
                        
                        <td><img src={x} /></td>
                        
                        <td>{producto.nombre}</td>

                        <td>{producto.descripcion}</td>

                        <td>
                            <button className="btn btn-primary" >
                                +
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
                */}

            <div className="row"> 

            {producto.map(productos=> (
                <div className="card" style={{alignItems: 'center', width: "300px" }} key={productos.id_producto}>
                <img className="card-img-top" src={x} alt=""/>
                <div className="card-body">
                    <h4 className="card-title">{productos.nombre}</h4>
                    <p className="card-text">{productos.descripcion}</p>
                    <p className="card-text">{productos.precio}</p>
                    <p className="btn btn-primary">+</p>
                </div>
                </div>
            ))}

            </div>
        </Fragment>
    )
};

export default ListaProductos;