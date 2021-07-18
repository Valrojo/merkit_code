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
    },{
        id:Math.floor((Math.random()*1000000000)+1),
        print:0,
        tipo:"Trash",
        valor: 10
    }
]


export const dineroReducer = (state = initstate, action) =>{
    switch (action.type){

        case types.addButton:
            return [...state, action.payload]
        
        case types.sumaButton:
            return state.map( prg => 
                (prg.id === action.payload.id)
                ? {...prg, print: action.payload.print }
                :{...prg} );

        case types.resetButton:
            return state=[];

        default:
            return state;

    }
}