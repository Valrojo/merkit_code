import React, {Fragment, Component} from 'react'


export default class ProductosVenta extends Component {

    constructor(){
        super();
        /* this.id_venta=this.props.id_venta; */
        this.state = {
            producto: null,
            nombreProducto: null
        
          };

        //borar producto ventas
        this.borraPV = async (id_venta, id_producto) => {

            try {
                
                const borraProductos = await fetch(`http://localhost:5000/itemVenta/${id_venta}&${id_producto}`,
                {method: "DELETE"}
                );
    
                /* console.log(borraVenta); */
                /* this.state.venta.filter(ventas => ventas.id_venta !== id_venta) */
    
            } catch (err) {
                console.error(err.message)
            }

        }

        //get productos ventas
        this.getPV = async (id_venta) => {
            
            try {
                
                const respuesta = await fetch(`http://localhost:5000/itemVenta/${id_venta}`);
                const dataJson = await respuesta.json();
                
                this.setState({producto: dataJson})

            } catch (err) {
                console.error(err.message)
            }
        }

        this.getNombreProducto = async (id_productos) =>{

            try {
                
                console.log("a")
                const respuesta = await fetch(`http://localhost:5000/productos/${id_productos}`);
                const dataJson = await respuesta.json();
                
                this.setState({nombreProducto: dataJson})
                
            } catch (err) {
                console.error(err.message)
            }
            
        } 


        this.renderPV =(producto, id_venta) => {

            if (producto !== null){

                return(
                    <div className = 'productosVenta'  >

                    {producto.map(productos=> (

                        
                        <ul className="list-group" key = {`${id_venta}${productos.id_productos}`}>

                            {/* {this.getNombreProducto(productos.id_productos)} */}
                            <li className="list-group-item" >Nombre producto: {productos.id_productos} {/* {this.state.nombreProducto.nombre} */}
                            
                            <button type="button" className="close" aria-label="Close" onClick={() => this.borraPV(id_venta, productos.id_productos)}>x</button>
                            </li>
                        
                            
                        
                        </ul>

                        
                    ))}
        
                    </div>
                )
            }

            else{console.log("producto es null")}
        }

    }

        
    componentDidMount() {
        this.getPV(this.props.id_venta);
    }
    
    
    render(){
        
        const { producto } = this.state;
        return(
            <div>

            {this.renderPV(producto, this.props.id_venta)}

            </div>
        )
    }
}