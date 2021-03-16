import { useState } from 'react';


// EL initialState es el valor con el que va iniciar si no le mandan
// ningun valor 

export const useCounter = ( initialState = 10 ) => {
    const [counter, setCounter] = useState(initialState) // state = 10


    // const increment = () => {
    //     setCounter( state + 1 )
    // }

    // const decrement = () => {
    //     setCounter( state - 1 )
    // }


    // PARA PASARLO COMO FACTOR SE HACE ASI:
    // const increment = ( factor = 1 ) => {
    //     setCounter( state + factor )
    // }

    const increment = () => {
        setCounter( counter + 1 )
    }

    // const decrement = ( factor = 1 ) => {
    //     setCounter( state - factor )
    // }

    const decrement = () => {
        setCounter( counter - 1 )
    }


    const reset = () => {
        setCounter( initialState )
    }

    return{
        counter,
        increment,
        decrement,
        reset
    };

}
