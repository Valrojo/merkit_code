import React, { Component } from 'react'
import { GloboContador } from './GloboContador'

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

                        <GloboContador
                            key={id} 
                            id={id}
                            numero={3}
                        />
                    </div>
                </div>
            </>

        );
    }
}