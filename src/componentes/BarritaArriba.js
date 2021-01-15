import React, { Component} from 'react'
import BarraBusqueda from './BarraBusqueda'

export default class BarritaArriba extends Component {
    constructor(){
        super();
    }

    render(){
        return(
        <div className = 'barritaArriba'>

            <nav className ="navbar navbar-expand-lg navbar-light bg-light">
                
                <a className ="navbar-brand" href="#">Merkit</a>
                
                <div style={{left: '50%'}}>
                <BarraBusqueda/>
                </div>
                
            </nav>
        
        </div>
        )
    }
}