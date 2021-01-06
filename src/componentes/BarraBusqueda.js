import React, {Fragment} from 'react'
import {useState} from 'react'

function BarraBusqueda(props) {
    
    
    const {alBuscar} = props;
    const {textoBuscar, setTextoBuscar} = useState('');
    const manejarInput = (e) => {
        const text = e.target.value;
        setTextoBuscar(textoBuscar);
    }

    const enterPresionado = (e) => {
        if (e.hey=='Enter'){
            alBuscar(textoBuscar);
        }
    }


    return (
        
        

        <div>
            <div className="control ">
                <input type='search' className = 'form-control mr-sm-2' placeholder='Buscar' value = {textoBuscar} onChange = {(e) => console.log(e.target.value)} />
            </div>
        </div>
    );

    
}

export default BarraBusqueda;