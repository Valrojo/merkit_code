import React from 'react'

export const VueltoD = ({id,print,tipo,valor}) => {

    return (
        <div>
            <>
                <div className="col card d-grid" key={`${Math.floor((Math.random()*1000000000)+1)}`}>
                    <div className="card-body" key={id}>
                        {tipo+" "+valor}

                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                            style={{color: 'white'}}
                        >
                            {print}
                        </span>
                    </div>
                </div>
            </>
            
        </div>
    )
}
