import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetButton, sumaButton } from '../../actions/botones';


export const ButtonDinero = ({id,print,tipo,valor}) => {

    //const contador = 0;    
    const dispatch = useDispatch()

    const btn = useSelector(state => state.btn)
    
    const [cnt, setCnt] = useState(1)

    useEffect(() => {
        if(btn[0].print==0){
            setCnt(1)
        }
    }, [btn])
    
    const handleBtn = () => {
        if(tipo!="Trash"){
            setCnt(cnt+1)
            dispatch(sumaButton({
                id:id,
                print:cnt,
                tipo:tipo,
                valor: valor
            }

            ))
        }else{
            for(const iv of btn){
                if(iv.tipo!= "Trash"){
                    dispatch(resetButton({
                        id:iv.id,
                        print:0,
                        tipo:iv.tipo,
                        valor:iv.valor
                        }
                    ))
                }
            }
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
