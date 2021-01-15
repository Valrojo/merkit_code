import React, { Component, Fragment} from 'react'

import ListaProductos from '../componentes/ListaProductos'
import ListaVenta from '../componentes/ListaVenta'


export default class PageVentas extends Component {

    constructor(){
        super();

        this.state = {
            listaProductos: [],
            listaVenta: []
        }

    }

    
    render(){
 
        return(
            <div className="h-100" style={{display: 'flex', flexFlow: 'row', alignItems: 'stretch', flex: '1 1'}}>
                    
                <div className = "container" style={{height: '100%', flex: '3 3', overflowY: "auto", flexFlow: 'row nowrap'}}>
                    <ListaProductos listaProductos = {this.state.listaProductos} listaVenta = {this.state.listaVenta}/>
                </div>

                <div className = "border-left" height='calc(100vh - 56px)' style={{flex: '1 1', paddingRight: '1%', overflowY: "auto"}} >
                    <ListaVenta listaProductos = {this.state.listaProductos} listaVenta = {this.state.listaVenta}/>
                    
                </div> 


            </div>
        )}

}