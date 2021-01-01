import React from 'react'

function BarritaArriba(){
    return (
        <div className = 'barritaArriba' >

            <nav className ="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <a className ="navbar-brand" href="#">Merkit</a>

                <form className ="form-inline my-2 my-lg-0">
                    <input className ="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" 
                    
                    />
                    <button className ="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form>
                
            </nav>
        
        </div>
    )
}

export default BarritaArriba;