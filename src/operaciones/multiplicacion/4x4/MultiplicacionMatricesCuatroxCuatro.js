import React from "react";
import "./MultiplicacionMatricesCuatroxCuatro.css";
import { useState } from "react";
import { IoClose } from "react-icons/io5";



export default function MultiplicacionMatrices4x4 (){
    
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


    const[mostrarMultiplicacion,setMostrarMultiplicacion]=useState(false)

    const calcularMultiplicacion = () => {
        setMostrarMultiplicacion(!mostrarMultiplicacion)
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
                <IoClose />
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
            <button className="calculateButton" onClick={calcularMultiplicacion}>CALCULAR</button>
            {mostrarMultiplicacion ===true &&(
            <div className="matriz4x4Resultado">
                <h1>{(A11*B11)+(A12*B21)+(A13*B31)+(A14*B41)}</h1>
                <h1>{(A11*B12)+(A12*B22)+(A13*B32)+(A14*B42)}</h1>
                <h1>{(A11*B13)+(A12*B23)+(A13*B33)+(A14*B43)}</h1>
                <h1>{(A11*B14)+(A12*B24)+(A13*B34)+(A14*B44)}</h1>

                <h1>{(A21*B11)+(A22*B21)+(A23*B31)+(A24*B41)}</h1>
                <h1>{(A21*B12)+(A22*B22)+(A23*B32)+(A24*B42)}</h1>
                <h1>{(A21*B13)+(A22*B23)+(A23*B33)+(A24*B43)}</h1>
                <h1>{(A21*B14)+(A22*B24)+(A23*B34)+(A24*B44)}</h1>

                <h1>{(A31*B11)+(A32*B21)+(A33*B31)+(A34*B41)}</h1>
                <h1>{(A31*B12)+(A32*B22)+(A33*B32)+(A34*B42)}</h1>
                <h1>{(A31*B13)+(A32*B23)+(A33*B33)+(A34*B43)}</h1>
                <h1>{(A31*B14)+(A32*B24)+(A33*B34)+(A34*B44)}</h1>

                <h1>{(A41*B11)+(A42*B21)+(A43*B31)+(A44*B41)}</h1>
                <h1>{(A41*B12)+(A42*B22)+(A43*B32)+(A44*B42)}</h1>
                <h1>{(A41*B13)+(A42*B23)+(A43*B33)+(A44*B43)}</h1>
                <h1>{(A41*B14)+(A42*B24)+(A43*B34)+(A44*B44)}</h1>
            </div>
            )}
        </section>
    )
}