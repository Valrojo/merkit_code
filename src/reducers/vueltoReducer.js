import { types } from "../types/types";

const initstate=[
    {
        id:Math.floor((Math.random()*1000000000)+1),
        print:0,
        tipo:"billete",
        valor: 20000
    },
    {
        id:Math.floor((Math.random()*1000000000)+1),
        print:0,
        tipo:"billete",
        valor: 10000
    },
    {
        id:Math.floor((Math.random()*1000000000)+1),
        print:0,
        tipo:"billete",
        valor: 5000
    },
    {
        id:Math.floor((Math.random()*1000000000)+1),
        print:0,
        tipo:"billete",
        valor: 2000
    },
    {
        id:Math.floor((Math.random()*1000000000)+1),
        print:0,
        tipo:"billete",
        valor: 1000
    },
    {
        id:Math.floor((Math.random()*1000000000)+1),
        print:0,
        tipo:"moneda",
        valor: 500
    },{
        id:Math.floor((Math.random()*1000000000)+1),
        print:0,
        tipo:"moneda",
        valor: 100
    },{
        id:Math.floor((Math.random()*1000000000)+1),
        print:0,
        tipo:"moneda",
        valor: 50
    },
    {
        id:Math.floor((Math.random()*1000000000)+1),
        print:0,
        tipo:"moneda",
        valor: 10
    }
]


export const vueltoReducer = (state = initstate, action) =>{
    switch (action.type){

        case types.addVuelto:
            return [...state, action.payload]
        
        case types.sumaVuelto:
            return state.map( prg => 
                (prg.valor === action.payload.valor)
                ? {...prg, print: prg.print + 1 }
                :{...prg} );

        case types.resetVuelto:
            return state.map( prg => 
                (prg.valor === action.payload.valor)
                ? {...prg, print: 0 }
                :{...prg} )

        default:
            return state;

    }
}