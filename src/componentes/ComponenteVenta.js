  
import React, { Component } from 'react';

export default class ComponenteVenta extends Component{
    constructor(){

        super();
        /* this.productos = []; */
        this.state = {
            productos: [],
            
        }
        
        this.getProductoPorId = (producto) =>{

            var cont = 0;
            productoEncontrado = "Producto no encontrado";
            while (cont < this.state.productos.length && productoEncontrado != ""){
                if (this.state.productos[cont].id == producto.id){
                    productoEncontrado = this.state.productos[cont];
                }

                cont = cont + 1 ;
            }

            return productoEncontrado;
        }

        
        this.getIndicePorId = (producto) =>{

            var cont = 0;
            productoEncontrado = "Producto no encontrado";
            while (cont < this.state.productos.length && productoEncontrado != ""){
                if (this.state.productos[cont].id == producto.id){
                    productoEncontrado = this.state.productos[cont];
                }
                else{
                cont = cont + 1 ;
                }
            }

            return cont;
        }
        


        this.productosComprados = (producto,cantidad) =>{

            var productoVenta = this.getProductoPorId(producto)
            if (productoVenta.stock >= 0){
                productoVenta.stock = productoVenta.stock-cantidad;
            }

            if (productoVenta.stock < 0){
                productoVenta.stock = 0;
            }

            
        }

        this.eliminarProducto = (producto)=>{
            var indiceProducto = this.getIndicePorId(producto)

            delete this.productos[indiceProducto];
        }

        }
    agregarProducto=(producto) => {
        this.state.productos.push(producto);
        console.log("producto agregado")
        /* this.forceUpdate(); */
    }

/*     componentDidMount() {
        this._isMount = true;
        console.log("esta montado")
    } */
}