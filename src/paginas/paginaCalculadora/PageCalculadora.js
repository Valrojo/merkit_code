import React, { Component, useEffect } from 'react';
import { VscCheck } from "react-icons/vsc";
import { CalcuContext } from '../../context/CalcuContext';
import { CartasD } from './CartasD';
import { CartasV } from './CartasV';



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
        this.handleChangeTotal = this.handleChangeTotal.bind(this);
        this.handleChangeCliente = this.handleChangeCliente.bind(this);

    }

    //Función para actualizar la variable a tiempo real de montoTotal
    handleMontoTotal(evento){
        this.setState({montoTotal: evento.target.value});
    }
    
    //Función para actualizar la variable a tiempo real de montoCliente
    handleMontoCliente(evento){
        this.setState({montoCliente: evento.target.value});
    }

    handleChangeTotal(value){
        this.setState({montoTotal: value})
    }
    handleChangeCliente(value){
        this.setState({montoCliente: value})
    }

    /* Función donde se calcula el valor del vuelto */
    calcularVuelto(mTotal, mCliente){
        return mCliente-mTotal;
    }

    render(){

        const {montoTotal, montoCliente}=this.state
        const {handleChangeTotal,handleChangeCliente} = this

        return (
            /*<funcion de context >*/        
           <CalcuContext.Provider value={{
                montoCliente,
                montoTotal,
                handleChangeTotal,
                handleChangeCliente
                
            }}
           >
                <div className="Calculadora" style={{display:'flex', flexFlow: 'column', width: '100%'}}>

                    {/* Input de monto total */}
                    <div className="input-group input-group-lg" style={{width: '70%', flex: '1', paddingTop:'2%', paddingLeft:'20%'}}>
                        
                        {/* Bloque de input para ingresar el monto total de la compra */}
                        <span className="input-group-text" 
                            style={{height: '48px', backgroundColor: '#edf5f0'}}
                        >
                            $
                        </span>
                        <input type="text" 
                            className="form-control" 
                            id="montoTotal" 
                            aria-describedby="inputGroup-sizing-lg" 
                            placeholder="Ingrese total compra" 
                            onChange={this.handleMontoTotal}
                        />
                        <button className="btn btn-info" 
                            type="button" 
                            id="confirmarTotal" 
                            style={{height: '48px'}}
                        >
                            <VscCheck/>
                        </button>
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
                                            <div className="input-group input-group-lg" 
                                                style={{width: '100%', paddingTop: '2%'}}
                                            >
                                                <span className="input-group-text input-group-text-light" 
                                                    style={{backgroundColor: '#edf5f0', width: '33px'}}
                                                >
                                                    $
                                                </span>
                                                <input type="text" 
                                                    className="form-control" 
                                                    id="montoCliente" 
                                                    aria-describedby="inputGroup-sizing-lg" 
                                                    placeholder="Ingrese monto recibido" 
                                                    onChange={this.handleMontoCliente}/
                                                >
                                                {/*<button 
                                                    className="btn btn-info" 
                                                    type="button" 
                                                    id="confirmarCliente" 
                                                    onClick={this.montoCliente += 8}
                                                >
                                                    <VscCheck/>
                                                </button>*
                                                */}
                                            </div>

                                            {/* Bloque con el resultado del valor del vuelto */}
                                            <div className="input-group input-group-lg" 
                                                style={{width: '100%', paddingTop: '2%'}}
                                            >
                                                <span className="input-group-text input-group-text-light" 
                                                    style={{backgroundColor: '#ffffff', height:'80px', borderBlockColor: '#5ad188', width: '100%'}}
                                                >
                                                    El vuelto es de $ {this.calcularVuelto(this.state.montoTotal, this.state.montoCliente)}
                                                </span>
                                            </div>
                                           

                                        </div>
                                                                                                              

                                    </div>

                                    {/* Texto o bien */}
                                    <h5 className = "container col" 
                                        style={{flex: '1', alignItems: 'center'}}
                                    > 
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
                                            <CartasD
                                                key={`${Math.floor((Math.random()*1000000000)+1)}`}
                                            />
                                        </div>
                                    </div>

                    </div>
                    
                    
                    {/* Placeholder para billetes resultantes */}
                  
                    {/* Billetes resultantes */}
                    <div className = "container" style={{flex: '1', alignItems: 'flex-end'}}> 
                            <CartasV
                                 key={`${Math.floor((Math.random()*1000000000)+1)}`}
                                                    />
                    </div>

                    <div className="container">
                        <div className="row">
                            <p></p>
                        </div>
                    </div>
                    
                </div>
            </CalcuContext.Provider>
        
        )   
    }

}
