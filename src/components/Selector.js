import React from 'react';

export default function SelectorPaises({data, setActualCountry})
{

    const updateCountry = (e) => {
        setActualCountry(e.target.textContent )
    }
    

    return <>
        <article className="casospaises">
        <h2>Selecciona un pais para ver su respectiva información sobre el <label className="red">Coronavirus</label></h2>
            <ul>
                <li key="Global"><button onClick={updateCountry} >Global</button><br/></li>
                {
                    Object.values(data).map(x => x.All.country ? <li key={x.All.country}><button onClick={updateCountry}>{x.All.country}</button><br/></li> : null )
                }

            </ul>
        </article>
    </>
} 