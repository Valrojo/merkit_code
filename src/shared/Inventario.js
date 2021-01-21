import { BiLeftArrowAlt } from "react-icons/bi";

export default class Inventario{
    constructor(){
        this.productos = [];
        this.funcUpdate = () => {};
        this.initialFetch();
    }

    async initialFetch(){
        try{
            let ans = await fetch("http://localhost:5000/productos");
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
            console.log(`[Inventario] Loaded ${this.getCount()} productos.`);
            this.funcUpdate();
        }catch(err){ 
            console.log(err.message);
        }
    }

    async sendToDB(producto){
        try{
            let ans = await fetch(`http://localhost:5000/productos`,
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
        const ans = await this.sendToDB(producto);
        if("id_producto" in ans){
            producto.id = ans.id_producto;
            this.productos.push(producto);
            this.funcUpdate();
        }else{
            console.log(" [Inventario-E] Nuevo ID invalido.");
        }
    }

    getCount(){
        return this.productos.length;
    }
}