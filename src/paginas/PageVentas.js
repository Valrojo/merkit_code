import React, { Component, Fragment} from 'react'

import ListaProductos from '../componentes/ListaProductos'
import ListaVenta from '../componentes/ListaVenta'


/* function Ventas() {
    return (
        
        <div className = 'ventas' style={{display: 'flex', flexDirection: 'row'}}>
            
            <div className = "container" style={{flex: '3', paddingTop: '150px', paddingLeft: '20px'}}>
                <ListaProductos />
            </div>

            <div style={{flex: '1', height: '85%'}}>
                <ListaVenta />
            </div> 

        </div>
    )
}

export default Ventas */

export default class PageVentas extends Component {

    constructor(){
        super();
    }

    render(){
        return(
            <div className="h-100" style={{display: 'flex', flexFlow: 'row', alignItems: 'stretch', flex: '1 1'}}>
                    
                <div className = "container" style={{height: '100%', flex: '3 3', overflowY: "auto", flexFlow: 'row nowrap'}}>
                    <ListaProductos />
                </div>

                <div className = "border-left" height='calc(100vh - 56px)' style={{flex: '1 1', paddingRight: '1%', overflowY: "auto"}} >
                    <ListaVenta />
                    
                </div> 


            </div>
        )}

}