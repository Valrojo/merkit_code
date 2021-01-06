//Escribir rfce y enter
//Usando iconos de react

import React from 'react';
import { Link } from 'react-router-dom';
import { DatosBarra } from './DatosBarra';
import './BarraLateral.css';
import { IconContext } from 'react-icons';

function BarraLateral() {

    return (
        <IconContext.Provider value = {{color: '#324237'}}> 
            <nav className = 'nav-menu active'>
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
    );
}

export default BarraLateral;
