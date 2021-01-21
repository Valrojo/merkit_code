import React, {Fragment, Component} from 'react'
import ComponenteProducto from './ComponenteProducto'


export default class ProductosVenta extends Component {

    constructor(){
        super();
        /* this.id_venta=this.props.id_venta; */
        this.state = {
            producto: null,
            nombreProducto: null
        
          };


        this.renderPV =(venta) => {
                    /* <div className = 'productosVenta'  > */
            if (venta !== undefined && venta.productos.length !== 0){
                return(
                    console.log("hay algo"),
                    venta.productos.map(producto=> (

                        <ul className="list-group" key = {`${producto.id}`}>


                            <li className="list-group-item" >Nombre producto: {producto.nombre}
                            
                            <button type="button" className="close" aria-label="Close" onClick={() => venta.eliminarProducto(producto)}>x</button>
                            </li>
                        
                            
                        
                        </ul>

                        
                    ))
        
                    /* </div> */
                )
            }

            else{                
                console.log("no hay nada")
                return(
                    <div className = 'productosVenta'  >

                        <ul className="list-group">


                            <li className="list-group-item" >No hay productos</li>                    
                            
                        
                        </ul>
                        
        
                    </div>
                )}
        }

    }

        
    /* componentDidMount() {
        this.getPV(this.props.id_venta);
    } */
    
    
    render(){
        return(
            <div>
                { this.renderPV(this.props.venta) }
            </div>
        )
    }
}