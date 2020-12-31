import React from 'react'

function Ventas() {
    return (
        <div className = 'ventas'>
            <button 
                onClick={ async () => {
                    console.log("Button!");
                    try {
                        let ans = await fetch(
                            "http://localhost:8008/testentry"
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

export default Ventas
