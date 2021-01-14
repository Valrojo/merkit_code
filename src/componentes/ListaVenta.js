import React, {Component,Fragment, useEffect, useState} from 'react'
import ProductosVenta from './ProductosVenta'

export default class ListaVenta extends Component {

    constructor(){
        super();
        this.state = {
            venta: null 
        
          };


        //Crea ventas
        this.creaVenta = async (id_venta) => {
    
            try {
               
                const creaVenta = await fetch("http://localhost:5000/ventas",
                {method: "POST"}
                );
    
                console.log(creaVenta);
    
                window.location = "/"
    
            } catch (err) {
                console.error(err.message)
            }
        }
    
        //Borra ventas
        this.borraVenta = async (id_venta) => {
    
            try {
                
                const borraProductos = await fetch(`http://localhost:5000/itemVenta/${id_venta}`,
                {method: "DELETE"}
                );
                const borraVenta = await fetch(`http://localhost:5000/ventas/${id_venta}`,
                {method: "DELETE"}
                );
    
                /* console.log(borraVenta); */
                /* this.state.venta.filter(venta => venta.id_venta !== id_venta) */ 
    
            } catch (err) {
                console.error(err.message)
            }
        }
    
        
    
        //get ventas
        this.getVenta = async () => {
            
            try {
                
                const respuesta = await fetch("http://localhost:5000/ventas");
                const dataJson = await respuesta.json();

                this.setState({venta: dataJson});
                
            } catch (err) {
                console.error(err.message)
            }
        }

        this.renderVentas =(venta) => {

            if (venta !== null){

                return(
                venta.map(ventas=> (

                    <div className="card" key={ventas.id_venta}>

                        <div className="card-header" id={`heading${ventas.id_venta}`}>

                            <h5 className="mb-0">

                                <button button type="button" className="close" aria-label="Close" style={{flex: '1'}} onClick={() => this.borraVenta(ventas.id_venta)}>x</button>
                                
                                <div className="btn" data-toggle="collapse" data-target={`#collapse${ventas.id_venta}`} aria-expanded="true" aria-controls={`collapse${ventas.id_venta}`} style={{display: 'flex', flexDirection: 'row'}} key={ventas.id_venta}>
                                    
                                    <div style={{flex: '5', alignItems: 'right'}}>{ventas.id_venta}</div>
                                    
                                </div>
                                
                            </h5>
                        </div>

                        
                            <div id={`collapse${ventas.id_venta}`} className="collapse" aria-labelledby={`heading${ventas.id_venta}`} data-parent="#accordion" >
                                <div className="card-body">

                                    <ProductosVenta id_venta = {ventas.id_venta}/>

                                </div>
                            </div>
                    

                    </div>
                ))
                )
            }
            else {console.log("venta es null")}
        }

    }

        
    componentDidMount() {
        this.getVenta();
    }
    
    
    render(){
        const { venta } = this.state;
        return(
            <Fragment>

            <div id="accordion" style={{height:"100%"}}>

                {this.renderVentas(venta)}
            
                <button className="btn btn-primary" style={{width: "100%"}} onClick={() => this.creaVenta()}>Crear venta</button>

            </div>

        </Fragment>
        )
    }
}