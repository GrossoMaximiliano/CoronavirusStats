import React from 'react';

export default function MyCard ({Titulo, Cantidad, Abreviatura, isBandera, Color})
{
    let mycolor = "amount " + (Color || "");
    let url_bandera = `https://www.countryflags.io/${Abreviatura}/shiny/64.png`;

    if ( Abreviatura === "globalFlag" ) url_bandera = "./img/global.jpg";

    return <>
        <article className="item">
            {
            isBandera === true
            ?
            <div className="bandera">
                <img src={url_bandera} alt={Titulo}/>
            </div>
            : 
               <>
                <h1 className="titulo">{Titulo}</h1>
                <h1 className={mycolor}>{Cantidad}</h1>
               </> 
            }

        </article>
    </>;
}