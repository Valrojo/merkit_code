import React from 'react'
import BarraBusqueda from './BarraBusqueda'


function BarritaArriba(){
    return (
        <div className = 'barritaArriba'>

            <nav className ="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                
                <a className ="navbar-brand" href="#">Merkit</a>
                
                <div style={{position: 'absolute', left: '50%'}}>
                <BarraBusqueda/>
                </div>
                
            </nav>
        
        </div>
    )
}

export default BarritaArriba;