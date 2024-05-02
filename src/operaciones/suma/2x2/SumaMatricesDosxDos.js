import React from "react";
import "./SumaMatricesDosxDos.css";
import { useState } from "react";




export default function SumaMatrices2x2 (){
    
    const[A11,setA11]=useState(0)
    const[A12,setA12]=useState(0)
    const[A21,setA21]=useState(0)
    const[A22,setA22]=useState(0)

    const[B11,setB11]=useState(0)
    const[B12,setB12]=useState(0)
    const[B21,setB21]=useState(0)
    const[B22,setB22]=useState(0)

    const[mostrarSuma,setMostrarSuma]=useState(false)

    const calcularSuma = () => {
        setMostrarSuma(!mostrarSuma)
    }

    return(
        <section className="mainContainerMatrices">
            <div className="contenedorDeMatrices">
                <div className="matriz2x2">
                    <input type="number" onChange={(e) => {setA11(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA12(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA21(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA22(parseInt(e.target.value))}}></input>
                </div>
                <div className="matriz2x2">
                    <input type="number" onChange={(e) => {setB11(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB12(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB21(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB22(parseInt(e.target.value))}}></input>
                </div>
                <button className="addMatriz">añadir matriz</button>
            </div>
            <button className="calculateButton" onClick={calcularSuma}>CALCULAR</button>
            {mostrarSuma ===true &&(
            <div className="matriz2x2Resultado">
                <h1>{A11+B11}</h1>
                <h1>{A12+B12}</h1>
                <h1>{A21+B21}</h1>
                <h1>{A22+B22}</h1>
            </div>
            )}
        </section>
    )
}