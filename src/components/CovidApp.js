import React, { useState, useEffect } from 'react';
import {useFetch} from '../hooks/useFetch';
import Cards from './Cards';
import MyMap from './Map';
import SelectorPaises from './Selector';

export default function CovidApp()
{
    const [ countrys, setCountrys ] = useState( [] )
    const [ actualCountry, setActualCountry ] = useState('Global')
    const [ dataLoaded, setDataLoaded ] = useState(false);
    const [ err, setErr ] = useState(null)

    const data = useFetch("https://covid-api.mmediagroup.fr/v1/cases"); 

    
    useEffect( () => {
       if ( !data.isPending )
       {    
           setCountrys(data.data);
           setDataLoaded(true);
       }
    }, [data, countrys])


     return (
        <>
            {dataLoaded && !err ?
            <>
                <Cards data={countrys[actualCountry]["All"]} />
                <section className="container">
                    <SelectorPaises data={countrys} setActualCountry={setActualCountry} />
                    <MyMap data={countrys} setActualCountry={setActualCountry}/>
                </section>
            </>
            :
            <div className="loadcenter">
                <div className="loader"></div>
            </div>
            
            }
        </>
     );
}