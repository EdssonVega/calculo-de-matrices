import React from "react";
import "./SumaMatricesDosxDos.css";
import { useState } from "react";




export default function SumaMatrices2x2 (){
    
    const[number11,setNumber11]=useState([])

    const handleInputNumber11 = (target) => {
        setNumber11(target.value)
    }
    console.log(number11)

    return(
        <section className="mainContainerMatrices">
            <div className="contenedorDeMatrices">
                <div className="matriz2x2">
                    <input type="number" onChange={handleInputNumber11}></input>
                    <input type="number"></input>
                    <input type="number"></input>
                    <input type="number"></input>
                </div>
                <div className="matriz2x2">
                    <input type="number"></input>
                    <input type="number"></input>
                    <input type="number"></input>
                    <input type="number"></input>
                </div>
                <button className="addMatriz">añadir matriz</button>
            </div>
            <button className="calculateButton">CALCULAR</button>
        </section>
    )
}