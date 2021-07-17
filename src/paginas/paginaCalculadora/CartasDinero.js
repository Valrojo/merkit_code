import React, { Component } from 'react'
import { ButtonDinero } from './ButtonDinero';

export default class CartasDinero extends Component{

//export const cartasDinero = ({billete, moneda}) => {
    constructor(billete, moneda){
        super();
        this.billete = billete
        this.moneda = moneda
    }

    render ()
    {
        const {billete,moneda} = this.props
        
        
        return (
            <div className="row">

                <div className="col">
                    <ButtonDinero
                        key={`${Math.floor((Math.random()*1000000000)+1)}`}
                        price={billete}
                    />
                </div>
                <div className="col">
                    <ButtonDinero 
                        key={`${Math.floor((Math.random()*1000000000)+1)}`}
                        price={moneda}
                    />
                </div>
                
            </div>
        )
    }
}
