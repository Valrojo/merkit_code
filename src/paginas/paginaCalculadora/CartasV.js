import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetVuelto, sumaVuelto } from '../../actions/vueltos'
import { CalcuContext } from '../../context/CalcuContext'
import { VueltoD } from './VueltoD'

export const CartasV = () => {

    const {montoCliente, montoTotal,handleChangeTotal,
        handleChangeCliente} = useContext(CalcuContext)
    const dispatch = useDispatch()

    const mon = [20000,10000,5000,2000,1000,500,100,50,10];
    
    const vlto = (ingreso) =>{
        var vuelto = []
        for(const a of mon){
            if(ingreso>=a){
                vuelto.push(a);
            }
        }
        const idx = vuelto.length-1;
        let suma = 0;
        let indices = []
        for(let i=0;i<100000;i++){
            let ix = Math.floor((Math.random()*idx));
            suma = suma + vuelto[ix];
            indices.push(ix)
            if(suma>ingreso){
                suma=0;
                indices=[]
            }
            if(suma==ingreso){
                break;
            }

        }
        return ({vuelto, indices})
    }

    useEffect(() => {

        if((montoCliente-montoTotal)>0){
            const {vuelto, indices} = vlto(montoCliente-montoTotal);
           
            for(const rst of vuelto){
                dispatch(resetVuelto({
                    valor:rst
                }))
            }

            for(const idx of indices){
                dispatch(sumaVuelto({
                    valor:vuelto[idx]
                }))
            }

        }
    }, [montoCliente])

    const handleClean = () =>{
        handleChangeTotal(0);
        handleChangeCliente(0);
        for(const rst of mon){
            dispatch(resetVuelto({
                valor:rst
            }))
        }
    }

    const vlt = useSelector(state => state.vlt) 

    return (
        <div>
            <div className = "container" >
                    <button 
                        className="btn btn-primary"
                        onClick={handleClean}
                    >
                        Limpiar
                    </button>
                <div className="row">
                {   
                            vlt.map( (em) => 
                            (em.tipo == "billete") 
                            ?
                                    <div className="col">
                                        <VueltoD
                                            key={em.id}
                                            id={em.id}
                                            print={em.print}
                                            tipo={em.tipo}
                                            valor={em.valor}
                                        />
                                    </div>
                            :
                            <></>
                            )
                }
                </div>
                <div className="row">
                {
                    vlt.map((em)=>
                    (em.tipo == "moneda")
                    ?
                            <>
                                    <div className="col">
                                        <VueltoD
                                            key={em.id}
                                            id={em.id}
                                            print={em.print}
                                            tipo={em.tipo}
                                            valor={em.valor}
                                        />
                                    </div>
                            </>
                    :
                    <></>
                    )
                }
                </div>
            </div>
        </div>
    )
}
