import { useState } from 'react';


// ESTE ES UN CUSTOME HOOK QUE SE VA A ENCARGAR DE MANEJAR LOS FORMULARIOS
// PODEMOS METERLE CUALQUIER CANTIDAD DE LOGICA aca 
export const useForm = ( initialState = {} ) => {
    
const [values, setValues] = useState(initialState);

// ESTO ES PARA RESETEAR EL FORMULARIO
const reset = () => {
    setValues( initialState );
}


const handleImputChnage = ({ target }) => {
  
    setValues({
        ...values,
        [ target.name ]: target.value


    });


}

    return [values, handleImputChnage, reset ];

}
