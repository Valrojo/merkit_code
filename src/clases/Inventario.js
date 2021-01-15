import { BiLeftArrowAlt } from "react-icons/bi";

export default class Inventario{
    constructor(){
        this.productos = [];
        this.funcUpdate = () => {console.log("Default update function.")};
        this.initialFetch();
    }

    async initialFetch(){
        try{
            console.log("Loading productos.");
            let ans = await fetch("http://http://146.83.216.218:8008/productos");
            ans = await ans.json();
            this.productos = [];
            for(const producto of ans){
                let correctedProducto = {
                    id: producto.id_producto,
                    nombre: producto.nombre,
                    descripcion: producto.descripcion,
                    marca: producto.marca,
                    codigo: producto.codigo,
                    unidad: producto.unidad,
                    stock: producto.stock,
                    precio: producto.precio
                };
                this.productos.push(correctedProducto);
            }
            console.log(`Loaded ${this.getCount()} productos.`);
            this.funcUpdate();
        }catch(err){ 
            console.log(err.message);
        }
    }

    async fetchProduct(producto){
        try{
            let ans = await fetch(`http://146.83.216.218:8008/productos`,
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(producto)
                }
            );
            ans = await ans.json();
            return ans;
        }catch(err){
            console.error(err.message);
        }
    }

    async addProduct(producto){
        const ans = await this.fetchProduct(producto);
        if("id_producto" in ans){
            producto.id = ans.id_producto;
            this.productos.push(producto);
            this.funcUpdate();
        }else{
            console.log("No se retorno id.");
        }
    }

    getCount(){
        return this.productos.length;
    }
}