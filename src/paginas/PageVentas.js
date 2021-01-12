import { Component } from 'react';

export default class PageVentas extends Component{
    constructor(){
        super();
    }
    
    render(){
        
        return (
            <div className = 'ventas'>
                <button 
                    onClick={ async () => {
                        console.log("Button!");
                        try {
                            let ans = await fetch(
                                "http://146.83.216.218:8008/testentry"
                            );
                            ans = await ans.json();
                            console.log(`Received: ${ans.length}`);
                        }catch(err){
                            console.log(err);
                        }
                    }
                }>
                    Testing
                </button>
            </div>
        )
    }
}
