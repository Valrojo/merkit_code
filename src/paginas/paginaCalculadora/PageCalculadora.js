import { Component } from 'react';

export default class PageCalculadora extends Component{
    constructor(){
        super();
    }
    
    render(){
        
        return (


            <div className="Calculadora" style={{width: '100%'}}>

                {/* Input de monto total */}
                <div className="input-group input-group-lg" style={{width: '70%'}}>
                    <span className="input-group-text">$</span>
                    <input type="text" className="form-control" aria-label="montoCliente" aria-describedby="inputGroup-sizing-lg" placeholder="Ingrese monto total"/>
                    <button className="btn btn-outline-secondary" type="button" id="confirmar">OK</button>
                </div>

            <div className="a" style={{display: 'flex', flexFlow: 'row', width: '100%'}}> 
                {/* Texto y botones*/}

                            <div className = "container" style={{flex: '1'}}> 
                                Ingrese monto 
                                
                                <div className="input-group input-group-lg">
                                    <span className="input-group-text">$</span>
                                    <input type="text" className="form-control" aria-label="montoCliente" aria-describedby="inputGroup-sizing-lg" placeholder="Ingrese monto cliente"/>
                                    <button className="btn btn-outline-secondary" type="button" id="confirmar">OK</button>
                                </div>

                            </div>

                            <div className = "container" style={{flex: '1', alignItems: 'center'}}> 
                                ó bien 
                            </div>

                            <div className = "container" style={{flex: '1', alignItems: 'flex-end'}}> 
                                Papel moneda 
                            </div>

            </div>
        </div>
        )
    }
}
