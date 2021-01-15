import React, {Component,Fragment, useEffect, useState} from 'react'
import ProductosVenta from './ProductosVenta'
import ComponenteVenta from './ComponenteVenta'
export default class ListaVenta extends Component {

    constructor(){
        super();
        this.state = {
            venta: null 
        
          };
        


        this.creaVenta = () => {

            for (var i = 0; i < 3; i++){
                this.props.listaVenta.push(new ComponenteVenta())
            }
            console.log(this.props)
            
            
        }

        //Crea ventas a base de datos
        this.creaVentaBD = async (id_venta) => {
    
            try {
               
                const creaVentaBD = await fetch("http://localhost:5000/ventas",
                {method: "POST"}
                );
    
                console.log(creaVentaBD);
    
                window.location = "/"
    
            } catch (err) {
                console.error(err.message)
            }
        }
    

        this.renderVentas =(venta) => {

            if (venta !== null){
                return(
                <div>

                    
                    <div className="card" /* key={venta.indexOf(ventas)} */>

                        <div className="card-header" id={`headingOne`}>

                            <h5 className="mb-0">
                                
                                <div className="btn" data-toggle="collapse" data-target={`#collapseOne`} aria-expanded="true" aria-controls={`collapseOne`} style={{display: 'flex', flexDirection: 'row'}} /* key={venta.indexOf(ventas)} */>
                                    
                                    <div style={{flex: '5', alignItems: 'right'}}>Venta 1</div>
                                    
                                </div>
                                
                            </h5> 
                        </div>
                            <div id={`collapseOne`} className="collapse" aria-labelledby={`headingOne`} data-parent="#accordion" >
                                <div className="card-body">

                
                                    {<ProductosVenta venta = {this.props.listaVenta[0]}/> }
                                    <div>
                                    
                                    Su total es de: $owo  
                                    <button className="btn btn-danger">Finalizar Venta</button>
                                    </div>
                                </div>
                            </div>

                            
                    </div>


{/* 
                    <div className="card" /* key={venta.indexOf(ventas)} >

                        <div className="card-header" id={`headingTwo`}>

                            <h5 className="mb-0">
                                
                                <div className="btn" data-toggle="collapse" data-target={`#collapseTwo`} aria-expanded="true" aria-controls={`collapseTwo`} style={{display: 'flex', flexDirection: 'row'}} /* key={venta.indexOf(ventas)} >
                                    
                                    <div style={{flex: '5', alignItems: 'right'}}>Venta 2</div>
                                    
                                </div>
                                
                            </h5> 
                        </div>
                            <div id={`collapseTwo`} className="collapse" aria-labelledby={`headingTwo`} data-parent="#accordion" >
                                <div className="card-body">
                                llamar a productos venta con la lista en 2
                
                                <ProductosVenta venta = {this.props.listaVenta[1]}/> 
                                <div>
                                    
                                    Su total es de: $owo  
                                    <button className="btn btn-danger">Finalizar Venta</button>
                                </div>
                                </div>
                            </div>

                            
                    </div>



                    <div className="card" /* key={venta.indexOf(ventas)} >

                        <div className="card-header" id={`headingThree`}>

                            <h5 className="mb-0">
                                
                                <div className="btn" data-toggle="collapse" data-target={`#collapseThree`} aria-expanded="true" aria-controls={`collapseThree`} style={{display: 'flex', flexDirection: 'row'}} /* key={venta.indexOf(ventas)} >
                                    
                                    <div style={{flex: '5', alignItems: 'right'}}>Venta 3</div>
                                    
                                </div>
                                
                            </h5> 
                        </div>
                            <div id={`collapseThree`} className="collapse" aria-labelledby={`headingThree`} data-parent="#accordion" >
                                <div className="card-body">
                                llamar a productos venta con la lista en 2
                
                                <ProductosVenta venta = {this.props.listaVenta[2]}/> 
                                <div>
                                    
                                    Su total es de: $owo  
                                    <button className="btn btn-danger">Finalizar Venta</button>
                                </div>
                                </div>
                            </div>

                         
                    </div> */}

                    
                </div>
                )
            }
            else {console.log("venta es null")}
        }

    }
    
    componentDidMount(){
        this.creaVenta();
    }

    render(){

        return(
            <Fragment>

            <div id="accordion" style={{height:"100%"}}>

                {
                this.renderVentas(this.props.listaVenta)
                }
        
            </div>

        </Fragment>
        )
    }
}