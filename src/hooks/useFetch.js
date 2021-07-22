import { useState, useEffect } from 'react';

export const useFetch = (url) => {

    const [data, setData ] = useState(null);
    const [error, setError ] = useState(null);
    const [isPending, setIsPending ] = useState(true);

    useEffect( () => {
        const get = async () => {
            try 
            {
                const res = await fetch(url);
                if ( !res.ok ) throw new Error("Fetch sin respuesta.");
                const data = await res.json();
                await setData(data);
                await setIsPending(false);
            }
            catch(e)
            {
                await setError(e);
                await setIsPending(false);
            }
        };

        get();
        
    }, [url])


    return {data, error, isPending};
}


