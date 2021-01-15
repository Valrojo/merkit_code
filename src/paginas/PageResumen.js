import { Component } from 'react';

export default class PageResumen extends Component{
    constructor(){
        super();
    }
    
    componentDidMount(){
        this.inventario = this.props.inventario;
        console.log(this.inventario.getCount());
    }
    
    render(){

        return (
            <div className = 'resumen'>
        
                <h1>Este sera el resumen</h1>
            
            </div>
        )
    }
}
