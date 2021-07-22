import React from 'react';
import MyCard from './MyCard';

export default function Cards({data})
{

    const calcPorcentaje = ()=>
    {
        let resultado = (data["deaths"] / data["confirmed"] ) * 100;
        return resultado.toFixed(2) +"%";
    }

    return <>
        <section className="cards">
            <MyCard Titulo='none' Cantidad='0' Abreviatura={data["abbreviation"] || "globalFlag"} isBandera={true} Color=''></MyCard>
            <MyCard Titulo='Confirmados' Cantidad={data["confirmed"]} Abreviatura='' isBandera='false' Color='orange'></MyCard>
            <MyCard Titulo='Recuperados' Cantidad={data["recovered"]} Abreviatura='' isBandera='false' Color='green'></MyCard>
            <MyCard Titulo='Muertes' Cantidad={data["deaths"]} Abreviatura='' isBandera='false' Color='red'></MyCard>
            <MyCard Titulo='Letalidad' Cantidad={calcPorcentaje()} Abreviatura='' isBandera='false' Color='red'></MyCard>
        </section>
    </>;
}