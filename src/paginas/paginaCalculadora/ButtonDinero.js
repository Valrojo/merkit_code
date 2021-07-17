import React, { useState } from 'react'


export const ButtonDinero = ({price}) => {

    const contador = 0;

    const [cnt, setCnt] = useState(contador)

    const handle = () => {
        if(price!="Icon Trash"){
            setCnt(cnt+1)
            console.log(price+"  " +cnt);
        }else{
            setCnt(0)
        }
    }

    return (
        <>
        <br></br>
        <div>
            <button type="button" 
                className="btn btn-primary position-relative"
                onClick={handle}
            >
                {
                (price!="Icon Trash")
                ?
                    <>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                            style={{color: 'white'}}
                    >
                        <a>{cnt}</a>
                    </span>
                        {price}
                    </>
                :
                <>
                    {price}
                </>
                }
            </button>
            
        </div>
        </>
    )
}
