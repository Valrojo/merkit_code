import { Component } from 'react';
import { VscCheck } from "react-icons/vsc";
import { MdAttachMoney } from "react-icons/md";

export default class PageCalculadora extends Component{
    constructor(){
        super();
    }
    
    render(){
        
        return (


            <div className="Calculadora" style={{display:'flex', flexFlow: 'column', width: '100%'}}>

                {/* Input de monto total */}
                <div className="input-group input-group-lg" style={{width: '70%', flex: '1', paddingTop:'2%', paddingLeft:'20%'}}>
                    <span className="input-group-text" style={{height: '48px', backgroundColor: '#edf5f0'}}>$</span>
                    <input type="text" className="form-control" aria-label="montoCliente" aria-describedby="inputGroup-sizing-lg" placeholder="Ingrese monto total"/>
                    <button className="btn btn-info" type="button" id="confirmarTotal" style={{height: '48px'}}><VscCheck/></button>
                </div>

                {/* Texto, botones e input de monto del cliente*/}
                <div className="TextInput" style={{display: 'flex', flexFlow: 'row', width: '100%', flex: '3', paddingTop: '2%'}}> 
                    
                                {/* Texto ingrese monto e input monto cliente*/}
                                <div className = "container" style={{flex: '1'}}> 

                                    <div >
                                        
                                        <h3 style={{paddingLeft: '25%'}}>
                                        Ingrese monto 
                                        </h3>

                                        <div className="input-group input-group-lg" style={{width: '100%', paddingTop: '2%'}}>
                                            <span className="input-group-text input-group-text-light" style={{backgroundColor: '#edf5f0'}}>$</span>
                                            <input type="text" className="form-control" aria-label="montoCliente" aria-describedby="inputGroup-sizing-lg" placeholder="Ingrese monto cliente"/>
                                            <button className="btn btn-info" type="button" id="confirmarCliente"><VscCheck/></button>
                                        </div>

                                        <div className="input-group input-group-lg" style={{width: '100%', paddingTop: '2%'}}>
                                            <span className="input-group-text input-group-text-light" style={{backgroundColor: '#ffffff', height:'80px', borderBlockColor: '#5ad188', width: '100%'}}>"$" y variable del vuelto</span>                                                                                        
                                        </div>

                                    </div>

                                </div>

                                {/* Texto o bien */}
                                <h5 className = "container" style={{flex: '1', alignItems: 'center'}}> 
                                    <div style={{paddingLeft: '40%', paddingTop: '2%'}}>
                                    ó bien 
                                    </div>
                                </h5>

                                {/* Texto papel moneda*/}
                                <div className = "container" style={{flex: '1', alignItems: 'flex-end'}}> 
                                    <h3 style={{paddingLeft: '15%'}}>
                                    Papel moneda 
                                    </h3>
                                </div>

                </div>

                {/* Placeholder para billetes resultantes */}
                <div style = {{width: '100%', flex: '2', paddingTop: '10%',justifyContent:'center'}}>
                    placeholder
                </div>

        </div>
        )
    }
}
