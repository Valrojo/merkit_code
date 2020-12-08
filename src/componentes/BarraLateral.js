//Escribir rfce y enter
//Usando iconos de react

import React, {useState} from 'react'
import * as iconoReact from "react-icons/fc";
import { Link } from 'react-router-dom'
import { DatosBarra } from './DatosBarra'
import './BarraLateral.css';
import { IconContext } from 'react-icons'

function BarraLateral() {
    const [barra, setBarra] = useState(false)

    const muestraBarra = () => setBarra(!barra)

    return (
        <>
        <IconContext.Provider value = {{color: '#324237'}}> 
                  
            <div className = 'barraLateral' />


            <nav className = {barra ? 'nav-menu active' : 'nav-menu'}>
                <ul className = 'nav-menu-items'>
                    {DatosBarra.map((item, index) => {
                        return (
                            <li key={index} className = {item.nombreClase}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default BarraLateral
