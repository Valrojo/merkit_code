import React, { Component } from 'react'

export default class CartasVuelto extends Component{
    
    constructor(){
        super()
    }

    render(){
        const {id,moneda} = this.props
        //console.log("ID : "+id+" \n TIpo :"+moneda);
        return(
            <>
                <div className="col card d-grid" key={`${Math.floor((Math.random()*1000000000)+1)}`}>
                    <div className="card-body" key={id}>
                        {moneda}

                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                            style={{color: 'white'}}
                        >
                            {+3}
                        </span>
                    </div>
                </div>
            </>

        );
    }
}