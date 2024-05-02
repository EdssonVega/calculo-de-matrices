import React from "react";
import "./SumaMatricesCuatroxCuatro.css";
import { useState } from "react";
import { TiPlusOutline } from "react-icons/ti";




export default function SumaMatrices4x4 (){
    
    const[A11,setA11]=useState(0)
    const[A12,setA12]=useState(0)
    const[A13,setA13]=useState(0)
    const[A14,setA14]=useState(0)
    const[A21,setA21]=useState(0)
    const[A22,setA22]=useState(0)
    const[A23,setA23]=useState(0)
    const[A24,setA24]=useState(0)
    const[A31,setA31]=useState(0)
    const[A32,setA32]=useState(0)
    const[A33,setA33]=useState(0)
    const[A34,setA34]=useState(0)
    const[A41,setA41]=useState(0)
    const[A42,setA42]=useState(0)
    const[A43,setA43]=useState(0)
    const[A44,setA44]=useState(0)



    const[B11,setB11]=useState(0)
    const[B12,setB12]=useState(0)
    const[B13,setB13]=useState(0)
    const[B14,setB14]=useState(0)
    const[B21,setB21]=useState(0)
    const[B22,setB22]=useState(0)
    const[B23,setB23]=useState(0)
    const[B24,setB24]=useState(0)
    const[B31,setB31]=useState(0)
    const[B32,setB32]=useState(0)
    const[B33,setB33]=useState(0)
    const[B34,setB34]=useState(0)
    const[B41,setB41]=useState(0)
    const[B42,setB42]=useState(0)
    const[B43,setB43]=useState(0)
    const[B44,setB44]=useState(0)


    const[mostrarSuma,setMostrarSuma]=useState(false)

    const calcularSuma = () => {
        setMostrarSuma(!mostrarSuma)
    }

    return(
        <section className="mainContainerMatrices">
            <div className="contenedorDeMatrices">
                <div className="matriz4x4">
                    <input type="number" onChange={(e) => {setA11(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA12(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA13(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA14(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA21(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA22(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA23(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA24(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA31(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA32(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA33(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA34(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA41(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA42(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA43(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA44(parseInt(e.target.value))}}></input>
                </div>
                <TiPlusOutline />
                <div className="matriz4x4">
                    <input type="number" onChange={(e) => {setB11(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB12(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB13(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB14(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB21(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB22(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB23(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB24(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB31(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB32(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB33(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB34(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB41(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB42(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB43(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB44(parseInt(e.target.value))}}></input>
                </div>
                <button className="addMatriz">añadir matriz</button>
            </div>
            <button className="calculateButton" onClick={calcularSuma}>CALCULAR</button>
            {mostrarSuma ===true &&(
            <div className="matriz4x4Resultado">
                <h1>{A11+B11}</h1>
                <h1>{A12+B12}</h1>
                <h1>{A13+B13}</h1>
                <h1>{A14+B14}</h1>
                <h1>{A21+B21}</h1>
                <h1>{A22+B22}</h1>
                <h1>{A23+B23}</h1>
                <h1>{A24+B24}</h1>
                <h1>{A31+B31}</h1>
                <h1>{A32+B32}</h1>
                <h1>{A33+B33}</h1>
                <h1>{A34+B34}</h1>
                <h1>{A41+B41}</h1>
                <h1>{A42+B42}</h1>
                <h1>{A43+B43}</h1>
                <h1>{A44+B44}</h1>
            </div>
            )}
        </section>
    )
}