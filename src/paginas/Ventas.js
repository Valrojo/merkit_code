import React, {Fragment} from 'react'
import ListaProductos from './ListaProductos'

function Ventas() {
    return (
        
        <div className = 'ventas'>
            
            <div className = "container" style={{position: "static", paddingTop: "450px" }}>

            <ListaProductos />
            

            </div>

        </div>
    )
}

export default Ventas
