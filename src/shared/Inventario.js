import { BiLeftArrowAlt } from "react-icons/bi";

export default class Inventario{
    constructor(){
        this.productos = [];
        this.funcUpdate = () => {};
        this.getAllFromDB();
    }
    
    getCount(){
        return this.productos.length;
    }

    async getAllFromDB(){
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

    async postToDB(producto){
        try{
            const ans = await fetch(`http://localhost:5000/productos`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(producto)
                }
            );
            // ans = await ans.json(); // error "unexpected end of json input"
            if(!ans.ok) return null;
            
            return ans;
        }catch(err){
            console.error(err.message);
            return null;
        }
    }

    async addProduct(producto){
        const ans = await this.postToDB(producto);
        if(ans === null){
            console.log(" [Inventario] No se pudo enviar a DB.");
            return false;
        }
        this.getAllFromDB();
        return true;
    }

    async putToDB(producto){
        try{
            const ans = await fetch(`http://localhost:5000/productos/${producto.prod_id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(producto)
                }
            );
            console.log(ans);
            return ans.ok;
        }catch(err){
            console.log(err.message);
            return null;
        }
    }

    async updateProduct(producto){
        const ans = await this.putToDB(producto);
        console.log(ans); // here is true
        if(!ans){
            console.log(" [Inventario] No se pudo actualizar item.");
            return false;
        }
        this.getAllFromDB();
        return true;
    }
}