import React from 'react';
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import World from "@svg-maps/world";

export default function MyMap({data, setActualCountry})
{
    return <>
        <article className="map">
            <SVGMap className="map" locationClassName="svgmap" map={World} onLocationClick={ (e) => {
                let name = ( e.target.getAttribute("name") === "United States" ? "US" : e.target.getAttribute("name") );
                if ( !data[name] ) name = "Global";
                setActualCountry(name);
            }} />;
        </article>
    </>;
} 