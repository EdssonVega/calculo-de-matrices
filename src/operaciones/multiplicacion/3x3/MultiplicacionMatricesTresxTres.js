import React from "react";
import "./MultiplicacionMatricesTresxTres.css";
import { useState } from "react";
import { IoClose } from "react-icons/io5";




export default function MultiplicacionMatrices3x3 (){
    
    const[A11,setA11]=useState(0)
    const[A12,setA12]=useState(0)
    const[A13,setA13]=useState(0)
    const[A21,setA21]=useState(0)
    const[A22,setA22]=useState(0)
    const[A23,setA23]=useState(0)
    const[A31,setA31]=useState(0)
    const[A32,setA32]=useState(0)
    const[A33,setA33]=useState(0)


    const[B11,setB11]=useState(0)
    const[B12,setB12]=useState(0)
    const[B13,setB13]=useState(0)
    const[B21,setB21]=useState(0)
    const[B22,setB22]=useState(0)
    const[B23,setB23]=useState(0)
    const[B31,setB31]=useState(0)
    const[B32,setB32]=useState(0)
    const[B33,setB33]=useState(0)


    const[mostrarMultiplicacion,setMostrarMultiplicacion]=useState(false)

    const calcularMultiplicacion = () => {
        setMostrarMultiplicacion(!mostrarMultiplicacion)
    }

    return(
        <section className="mainContainerMatrices">
            <div className="contenedorDeMatrices">
                <div className="matriz3x3">
                    <input type="number" onChange={(e) => {setA11(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA12(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA13(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA21(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA22(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA23(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA31(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA32(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setA33(parseInt(e.target.value))}}></input>
                </div>
                <IoClose />
                <div className="matriz3x3">
                    <input type="number" onChange={(e) => {setB11(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB12(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB13(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB21(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB22(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB23(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB31(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB32(parseInt(e.target.value))}}></input>
                    <input type="number" onChange={(e) => {setB33(parseInt(e.target.value))}}></input>
                </div>
                <button className="addMatriz">añadir matriz</button>
            </div>
            <button className="calculateButton" onClick={calcularMultiplicacion}>CALCULAR</button>
            {mostrarMultiplicacion ===true &&(
            <div className="matriz3x3Resultado">
                <h1>{(A11*B11)+(A12*B21)+(A13*B31)}</h1>
                <h1>{(A11*B12)+(A12*B22)+(A13*B32)}</h1>
                <h1>{(A11*B13)+(A12*B23)+(A13*B33)}</h1>

                <h1>{(A21*B11)+(A22*B21)+(A23*B31)}</h1>
                <h1>{(A21*B12)+(A22*B22)+(A23*B32)}</h1>
                <h1>{(A21*B13)+(A22*B23)+(A23*B33)}</h1>

                <h1>{(A31*B11)+(A32*B21)+(A33*B31)}</h1>
                <h1>{(A31*B12)+(A32*B22)+(A33*B32)}</h1>
                <h1>{(A31*B13)+(A32*B23)+(A33*B33)}</h1>
            </div>
            )}
        </section>
    )
}