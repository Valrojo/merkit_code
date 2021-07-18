import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sumaButton } from '../../actions/botones';


export const ButtonDinero = ({id,print,tipo,valor}) => {

    //const contador = 0;    
    const dispatch = useDispatch()

    
    const [cnt, setCnt] = useState(1)
    
    const handleBtn = () => {
        if(tipo!="Trash"){
            setCnt(cnt+1)
            console.log("numero: "+cnt);
            dispatch(sumaButton({
                id:id,
                print:cnt,
                tipo:tipo,
                valor: valor
            }

            ))
        }
    }

    return (
        <>
        <br></br>
        <div>
            <button type="button" 
                className="btn btn-primary position-relative"
                onClick={handleBtn}
            >
                {
                    (tipo!="Trash")
                    ?
                        <>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                                style={{color: 'white'}}
                        >
                            <a>{print}</a>
                        </span>
                            {tipo+" "+valor}
                        </>
                    :
                    <>
                        {tipo}
                    </>
                }
            </button>
            
        </div>
        </>
    )
}
