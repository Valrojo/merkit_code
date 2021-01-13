export default class Inventario{
    constructor(){
        this.productos = [
            {
                id: 1,
                nombre: "Papas Fritas Clasicas",
                descripcion: "300g",
                marca: "Lays",
                precio: 1300
            },
            {
                id: 2,
                nombre: "Galletas de Vino",
                descripcion: "150g",
                marca: "McKay",
                precio: 800
            },
            {
                id: 3,
                nombre: "Mermelada Light",
                descripcion: "Durazno",
                marca: "Watts",
                precio: 1200
            }
        ];
        // Para popular
        for(let i=4; i < 20; ++i){
            let otro = {...this.productos[i%3]};
            otro.id = i;
            this.productos.push(otro);
        }
    }

    addProduct(name){
        this.productos.push({
            id: this.productos.length + 1,
            nombre: name,
            descripcion: "New",
            marca: "New",
            precio: 1100
        });
    }

    getCount(){
        return this.productos.length;
    }
}