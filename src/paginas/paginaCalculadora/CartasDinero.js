import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { ButtonDinero } from './ButtonDinero';

export default class CartasDinero extends Component{

    constructor(){
        this.super()
    }

    render (){

        const btn = useSelector(state => state.btn);
        
        return (
            <div className="row">
                {   
                    btn.map( (em) => 
                    (em.tipo == "billete")
                    &
                        <div className="col">
                            <ButtonDinero
                                key={em.id}
                                id={em.id}
                                print={em.print}
                                tipo={em.tipo}
                                valor={em.valor}
                            />
                        </div>
                    )
                }
                <div className="col">
                {   
                    btn.map( (em) => 
                    (em.tipo == "moneda")
                    &
                        <div className="col">
                            <ButtonDinero
                                key={em.id}
                                id={em.id}
                                print={em.print}
                                tipo={em.tipo}
                                valor={em.valor}
                            />
                        </div>
                    )
                }
                </div>
                
            </div>
        )
    }
}
