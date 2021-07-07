import React, { Component } from 'react';
import { VscCheck } from "react-icons/vsc";
import { MdAttachMoney } from "react-icons/md";
import cartasDinero from './cartasDinero';

export default class PageCalculadora extends Component{
    
    constructor(){
        super();
    }
    
    
    render(){
        const dinero=[
            {
                billete:"billete 20000",
                moneda:"moneda 500"
            },
            {
                billete:"billete 10000",
                moneda:"moneda 100"
            },
            {
                billete:"billete 5000",
                moneda:"moneda 50"
            },
            {
                billete:"billete 2000",
                moneda:"moneda 10"
            },
            {
                billete:"billete 1000",
                moneda:"Icon Trash"
            }]
        
        
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
                                    <div className="container">
                                        {
                                            
                                            dinero.map((elem1) => 
                                            <div className="row">
                                                <div className="col">
                                                    <button type="button" class="btn btn-primary">{elem1.billete}</button>
                                                </div>
                                                <div className="col">
                                                    <button type="button" class="btn btn-primary">{elem1.moneda}</button>
                                                </div>
                                            </div>
                                            )
                                            
                                            
                                        }
                                        
                                    </div>
                                </div>

                </div>
                

                {/* Placeholder para billetes resultantes */}
                
                <div className = "container" style={{flex: '1', alignItems: 'flex-end'}}> 
                    <div className = "container">
                        <div className = "row">
                            {
                                dinero.map((elem)=>
                                    <div className="col card d-grid">
                                        <div className="card-body">
                                            {elem.billete}
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className = "row">
                            {
                                dinero.map((elem)=>
                                    (elem.moneda!="Icon Trash")
                                    ?
                                    <>
                                        <div className="col card d-grid">
                                            <div className="card-body">
                                                {elem.moneda}
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <></>
                                )
                            }
                        </div>
                                        


                    </div>

                                    
                </div>
            </div>

        
        )
    }
}
