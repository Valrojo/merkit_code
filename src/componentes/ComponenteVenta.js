  
import React, { Component } from 'react';

export default class ComponenteVenta extends Component{
    constructor(){

        super();
        /* this.productos = []; */
        this.state = {
            productos: [],
            cantidades: []
            
        }
        
        
        this.getProductoPorId = (producto) =>{

            var cont = 0;
            var productoEncontrado = "Producto no encontrado";
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
        this.agregarProducto=(producto) => {
            this.state.productos.push(producto);
            console.log("producto agregado")
            console.log(this.state.productos)
            /* this.forceUpdate(); */
        }


        this.productosComprados = (producto,cantidad) =>{

            var productoVenta = this.getProductoPorId(producto)

            
            productoVenta.stock = productoVenta.stock-cantidad;
            

            if (productoVenta.stock < 0){
                productoVenta.stock = 0;
            }
        }

        this.eliminarProducto = (producto)=>{
            var indiceProducto = this.getIndicePorId(producto)

            delete this.state.productos[indiceProducto];
        }

        this.precioTotal = () => {
            if (this.state.cantidades==undefined || this.state.cantidades.length !== 0){
                const sum = (acc, curr) =>acc + curr;
                const total = this.state.cantidades.reduce(sum);
                return(total);
            }
            else{
                return "-";
            }
        }
    }
}