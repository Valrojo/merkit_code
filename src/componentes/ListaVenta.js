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
        this.creaVentaBD = async () => {
    
            try {
               
                const id_venta = await fetch("http://localhost:5000/ventas",
                {method: "POST"}
                );
    
                return id_venta
    
                
    
            } catch (err) {
                console.error(err.message)
            }
        }

        //Crea item_ventas 
        this.creaItemVenta = async (id_venta,producto)=>{
            try {
               
                //falta poner como van a entrar los atributos al post
                const body = producto;
                const creaVentaBD = await fetch(`/productos/${producto.id}`,
                {method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
                });
    
    
            } catch (err) {
                console.error(err.message)
            }
        }

        this.updateProducto = async (producto) => {
            try {
                const body = {producto};
                const creaVentaBD = await fetch(`/productos/${producto.id}`,
                {method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
                });
    


                console.log(creaVentaBD);
    
                
    
            } catch (err) {
                console.error(err.message)
            }
        }
    
        //Agrega todo lo de una venta a la base de datos
        this.finalizarVenta = (productos) => {

            var id_venta = this.creaVentaBD();

            productos.map(producto => {
                this.creaItemVenta(id_venta, producto.id);
            })

        }

        this.renderVentas =(venta) => {

            if (venta !== null){
                return(
                <div>

                    
                    <div className="card" /* key={venta.length[0]} */>

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
                                    <div className="text-right">
                                    
                                    Su total es de: ${/* {venta.precioTotal()} */}  
                                    <button className="btn btn-danger text-left" onClick={() => {this.finalizarVenta(this.props.listaVenta[0])}}>Finalizar Venta</button>
                                    </div>
                                </div>
                            </div>

                            
                    </div>

                    <div className="card" /* key={venta.indexOf(ventas)} */>

                        <div className="card-header" id={`headingTwo`}>

                            <h5 className="mb-0">
                                
                                <div className="btn" data-toggle="collapse" data-target={`#collapseTwo`} aria-expanded="true" aria-controls={`collapseTwo`} style={{display: 'flex', flexDirection: 'row'}} /* key={venta.indexOf(ventas)} */>
                                    
                                    <div style={{flex: '5', alignItems: 'right'}}>Venta 2</div>
                                    
                                </div>
                                
                            </h5> 
                        </div>
                            <div id={`collapseTwo`} className="collapse" aria-labelledby={`headingTwo`} data-parent="#accordion" >
                                <div className="card-body">

                
                                    {<ProductosVenta venta = {this.props.listaVenta[1]}/> }
                                    <div className="text-right">
                                    
                                    Su total es de: $-  
                                    <button className="btn btn-danger text-left" onClick={() => {this.finalizarVenta(this.props.listaVenta[1])}}>Finalizar Venta</button>
                                    </div>
                                </div>
                            </div>

                            
                    </div>

                    <div className="card" /* key={venta.indexOf(ventas)} */>

                        <div className="card-header" id={`headingThree`}>

                            <h5 className="mb-0">
                                
                                <div className="btn" data-toggle="collapse" data-target={`#collapseThree`} aria-expanded="true" aria-controls={`collapseThree`} style={{display: 'flex', flexDirection: 'row'}} /* key={venta.indexOf(ventas)} */>
                                    
                                    <div style={{flex: '5', alignItems: 'right'}}>Venta 3</div>
                                    
                                </div>
                                
                            </h5> 
                        </div>
                            <div id={`collapseThree`} className="collapse" aria-labelledby={`headingThree`} data-parent="#accordion" >
                                <div className="card-body">

                
                                    {<ProductosVenta venta = {this.props.listaVenta[2]}/> }
                                    <div className="text-right">
                                    
                                    Su total es de: $-  
                                    <button className="btn btn-danger text-left" onClick={() => {this.finalizarVenta(this.props.listaVenta[2])}}>Finalizar Venta</button>
                                    </div>
                                </div>
                            </div>

                            
                    </div>
                    
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