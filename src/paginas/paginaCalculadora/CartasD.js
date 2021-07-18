import React from 'react'
import { useSelector } from 'react-redux'
import { ButtonDinero } from './ButtonDinero';

export const CartasD = () => {

    const btn = useSelector(state => state.btn);

    return (
        <>
            <div className="row">
                <>
                    {   
                        btn.map( (em) => 
                        (em.tipo == "billete" || em.tipo == "moneda")
                        ?
                            <div className="col">
                                <ButtonDinero
                                    key={em.id}
                                    id={em.id}
                                    print={em.print}
                                    tipo={em.tipo}
                                    valor={em.valor}
                                />
                            </div>
                        :
                        <>
                            <div className="col">
                                <ButtonDinero
                                    key={em.id}
                                    id={em.id}
                                    print={em.print}
                                    tipo={em.tipo}
                                    valor={em.valor}
                                />
                            </div>
                        </>
                        )
                    }
                </>
               
            </div>
        </>
    )
}
