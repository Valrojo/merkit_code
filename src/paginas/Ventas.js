import React, {Fragment} from 'react'

import ListaProductos from '../componentes/ListaProductos'
import ListaVenta from '../componentes/ListaVenta'


function Ventas() {
    return (
        
        <div className = 'ventas' style={{display: 'flex', flexDirection: 'row'}}>
            
            <div className = "container" style={{flex: '3', paddingTop: '450px', paddingLeft: '20px'}}>
                <ListaProductos />
            </div>

            <div style={{flex: '1', height: '85%'/* width: '40%', height: '85%' */}}>
                <ListaVenta />
            </div> 

        </div>
    )
}

export default Ventas
