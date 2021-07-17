import { useState } from "react"


export const useForm = ( initialState={} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () =>{
        setValues(initialState);
    }

    //valida e ingresa a través del input
    //con prop respectivo
    const handleInputChange =({target})=>{
        //target corresponde a una propiedad del evento "e" desestructurado
        //con sub argumentos name y value
        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }
    return [values, handleInputChange, reset];
}

// como usarlo
// const initialForm = {
//         name= '',
//         age= 0,
//         email: ''
//     };
// 
//     const [formValues, handleInputChange, reset] = useForm( initialForm );
