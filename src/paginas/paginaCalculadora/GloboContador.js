import React from 'react'

export const GloboContador = ({id,numero}) => {


    return (
        <div>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                style={{color: 'white'}}
                key={`${id}`}
            >
                {numero}
            </span>
        </div>
    )
}
