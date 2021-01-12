import React, {Fragment, useEffect, useState} from 'react'


function ListaVenta(){

    const [venta, setVentas] = useState([]);
    const [productos, setProductos] = useState([]);
    
    //get productos ventas
    const getPV = async (id_venta) => {

        try {
            
            const getPV = await fetch(`http://localhost:5000/itemVenta/${id_venta}`,
            {method: "GET"}
            );

            console.log(id_venta);
            setProductos(dataJson);

        } catch (err) {
            console.error(err.message)
        }
    }

    //Crea ventas
    const creaVenta = async (id_venta) => {

        try {
            
            const creaVenta = await fetch("http://localhost:5000/ventas",
            {method: "POST"}
            );

            console.log(creaVenta);
            /* setVentas(venta.filter(ventas => ventas.id_venta !== id_venta)) */

            window.location = "/"

        } catch (err) {
            console.error(err.message)
        }
    }

    //Borra ventas
    const borraVenta = async (id_venta) => {

        try {
            
            const borraVenta = await fetch(`http://localhost:5000/ventas/${id_venta}`,
            {method: "DELETE"}
            );

            console.log(borraVenta);
            setVentas(venta.filter(ventas => ventas.id_venta !== id_venta))

        } catch (err) {
            console.error(err.message)
        }
    }


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

    useEffect(() =>{
        getVenta();
        getPV();
    }, []);

    

    return (

        <div className = 'listaVenta' style={{ position: 'fixed', width: '37%', paddingLeft: '5px'}} >

            <div id="accordion">

            {venta.map(ventas=> (

                <div className="card">

                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <div className="btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{display: 'flex', flexDirection: 'row'}} key={ventas.id_venta}>
                                <div style={{flex: '5', alignItems: 'right'}}>{ventas.id_venta}</div>
                                
                            </div>
                            <button className="btn-warning" style={{flex: '1'}} onClick={() => borraVenta(ventas.id_venta)}>Borrar</button>
                        </h5>
                    </div>

                    
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion" /* onClick={() => getPV(ventas.id_venta)} */>
                            <div className="card-body">

                            {/* {productos.map(producto=> ( */}
                                <ul className="list-group">
                                    <li className="list-group-item">unu{/* {producto.id_producto} */}</li>
                                </ul>
                             {/* ))} */}

                            </div>
                        </div>
                   

                </div>
            ))}

                <button className="btn btn-primary" style={{width: "100%"}} onClick={() => creaVenta()}>Crear venta</button>

            </div>

        </div>

    )
}

export default ListaVenta;