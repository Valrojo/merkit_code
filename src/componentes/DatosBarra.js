import React from 'react'
import * as iconoReact from "react-icons/fc";
import * as BIIcon from "react-icons/bi";

export const DatosBarra = [
    {
        title: 'Ventas',
        path: '/',
        icon: <BIIcon.BiCart />,
        nombreClase: 'texto-nav'
    },
    {
        title: 'Inventario',
        path: '/inventario',
        icon: <BIIcon.BiClipboard />,
        nombreClase: 'texto-nav'
    },
    {
        title: 'Resumen',
        path: '/resumen',
        icon: <BIIcon.BiBookmark />,
        nombreClase: 'texto-nav'
    },
    {
        title: 'Calculadora',
        path: '/calculadora',
        icon: <BIIcon.BiDizzy />,
        nombreClase: 'texto-nav'
    }

]