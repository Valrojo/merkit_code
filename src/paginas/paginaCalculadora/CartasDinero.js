import React, { Component } from 'react'
import { GloboContador } from './GloboContador';


export default class CartasDinero extends Component{

//export const cartasDinero = ({billete, moneda}) => {
    constructor(billete, moneda){
        super();
        this.billete = billete
        this.moneda = moneda
    }

    render ()
    {
        const {id,billete,moneda} = this.props
        
        
        return (
            <div className="row">

                <div className="col">
                    <button type="button" className="btn btn-primary">
                        <GloboContador 
                            key={id}
                            numero={2}
                        />
                        {billete}
                    </button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-primary">
                        <GloboContador 
                            key={id}
                            numero={2}
                        />
                        {moneda}
                    </button>
                </div>
                
            </div>
        )
    }
}
