import { useEffect, useState, useRef } from 'react';

export const useFetch = ( url ) => {
//    SE USA EN ESTE CASO PARA QUE MANTENGA LA REFERENCIA AL MISMO Y NO SE RENDERICE NUEVAMENTE
    const isMounted = useRef(true);
const [state, setstate] = useState({ data: null, loading: true, error: null})

    // ESTE useEffect SE LE POENE EN LE RETURN LA REFERENCIA PARA
    //  LA REFERENCIA AL MISMO 

    useEffect(() => {

        return () => {
            isMounted.current = false;
        }

    }, [])



// DESPUES QUE LLEGUE LA PETICION QUEREMOS QUE TENGA UN EFECTO:

useEffect( () => {


    // ESTO ES PARA QUE SE VEA EL LOADING CADA VES QUE LE DE A SIGUIENTE QUOTE
    setstate({ data: null, loading: true, error: null });

    fetch( url )
    .then( resp => resp.json() )
    .then( data =>{


        // ACA BOTA UN ERROR SI NOSOTROS CERRAMOS EL COMPONENTE ANTES QUE SE EJECUTE
        // PARA SOLUCIONAR ESO CON EL USEREF SE PUEDE HTMLAnchorElement.
        // setTimeout( () => {

            if (isMounted.current ) {

        setstate({
        loading: false,
        error: null,
        data
        

        })
    } else {
        console.log('setState no se llamo');
    }

    // }, 4000);

    });

},[url])

return state;

}
