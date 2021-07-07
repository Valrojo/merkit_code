import React, { Component } from 'react'


export default class cartasDinero extends Component{

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
            <div>
                <p>elemento</p>

                <div class="col">
                    <button type="button" class="btn btn-primary">{billete}</button>
                </div>
                <div class="col">
                    <button type="button" class="btn btn-primary">{moneda}</button>
                </div>
                
            </div>
        )
    }
}
