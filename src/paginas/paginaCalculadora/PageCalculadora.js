import React, { Component } from 'react';
import { VscCheck } from "react-icons/vsc";

import CartasVuelto from './CartasVuelto';
import CartasDinero from './CartasDinero';

export default class PageCalculadora extends Component{
    
    constructor(){
        super();

        //Variables a usar
        this.state = {
            montoTotal: 0,
            montoCliente: 0,
            // vuelto: 0
        };
        //this.vuelto = 0;

        //Inicializar las funciones de setState
        this.handleMontoTotal = this.handleMontoTotal.bind(this);
        this.handleMontoCliente = this.handleMontoCliente.bind(this);


    }

    //Función para actualizar la variable a tiempo real de montoTotal
    handleMontoTotal(evento){
        this.setState({montoTotal: evento.target.value});
    }
    
    //Función para actualizar la variable a tiempo real de montoCliente
    handleMontoCliente(evento){
        this.setState({montoCliente: evento.target.value});
    }

    /* Función donde se calcula el valor del vuelto */
    calcularVuelto(mTotal, mCliente){
        return mCliente-mTotal;
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
                    
                    {/* Bloque de input para ingresar el monto total de la compra */}
                    <span className="input-group-text" style={{height: '48px', backgroundColor: '#edf5f0'}}>$</span>
                    <input type="text" className="form-control" id="montoTotal" aria-describedby="inputGroup-sizing-lg" placeholder="Ingrese total compra" onChange={this.handleMontoTotal}/>
                    <button className="btn btn-info" type="button" id="confirmarTotal" style={{height: '48px'}}><VscCheck/></button>
                </div>

                {/* Texto, botones e input de monto del cliente*/}
                <div className="row" style={{display: 'flex', flexFlow: 'row', width: '100%', flex: '3', paddingTop: '2%'}}> 
                        
                                {/* Texto ingrese monto e input monto cliente*/}
                                <div className = "container col" style={{flex: '1'}}> 

                                    <div >
                                        
                                        <h3 style={{paddingLeft: '25%'}}>
                                        Ingrese monto
                                        </h3>

                                        {/* Bloque input para ingresar el monto entregado por el cliente*/}
                                        <div className="input-group input-group-lg" style={{width: '100%', paddingTop: '2%'}}>
                                            <span className="input-group-text input-group-text-light" style={{backgroundColor: '#edf5f0', width: '33px'}}>$</span>
                                            <input type="text" className="form-control" id="montoCliente" aria-describedby="inputGroup-sizing-lg" placeholder="Ingrese monto recibido" onChange={this.handleMontoCliente}/>
                                            <button className="btn btn-info" type="button" id="confirmarCliente" onClick = {this.montoCliente += 8}><VscCheck/></button>
                                        </div>

                                        {/* Bloque con el resultado del valor del vuelto */}
                                        <div className="input-group input-group-lg" style={{width: '100%', paddingTop: '2%'}}>
                                            <span className="input-group-text input-group-text-light" style={{backgroundColor: '#ffffff', height:'80px', borderBlockColor: '#5ad188', width: '100%'}}>El vuelto es de $ {this.calcularVuelto(this.state.montoTotal, this.state.montoCliente)}</span>                                                                                        
                                        </div>

                                    </div>

                                </div>

                                {/* Texto o bien */}
                                <h5 className = "container col" style={{flex: '1', alignItems: 'center'}}> 
                                    <div style={{paddingLeft: '40%', paddingTop: '2%'}}>
                                    ó bien 
                                    </div>
                                </h5>

                                {/* Texto papel moneda*/}
                                <div className = "container col" style={{flex: '1', alignItems: 'flex-end'}}> 
                                    <h3 style={{paddingLeft: '15%'}}>
                                        Papel moneda 
                                    </h3>
                                    <div className="container">
                                        {
                                            dinero.map((elem1) => 
                                                
                                                <CartasDinero
                                                    key={`${Math.floor((Math.random()*1000000000)+1)}`}
                                                    id={`${Math.floor((Math.random()*1000000000)+1)}`}
                                                    billete={elem1.billete}
                                                    moneda={elem1.moneda}
                                                />

                                            )
                                        }
                                        
                                    </div>
                                </div>

                </div>
                

                {/* Billetes resultantes */}
                
                <div className = "container" style={{flex: '1', alignItems: 'flex-end'}}> 
                    <div className = "container" >
                        <div className = "row" key='A'>
                            {
                                dinero.map((elem1)=>
                                    
                                    <CartasVuelto
                                        key={`${Math.floor((Math.random()*1000000000)+1)}`}
                                        id={`${Math.floor((Math.random()*1000000000)+1)}`}
                                        moneda={elem1.billete}
                                    />
                                
                                )
                            }
                        </div>
                    </div>
                    <div className= "container">
                        <div className = "row" key='B'>
                            {
                                dinero.map((elem2)=>
                                    (elem2.moneda!="Icon Trash")
                                    ?
                                        <CartasVuelto
                                            key={`${Math.floor((Math.random()*1000000000)+1)}`}
                                            id={`${Math.floor((Math.random()*1000000000)+1)}`}
                                            moneda={elem2.moneda}
                                        />
                                    :
                                    <></>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <p></p>
                    </div>
                </div>
            </div>

        
        )   
    }

}
