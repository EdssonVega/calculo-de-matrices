import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SumaMatrices2x2 from "./operaciones/suma/2x2/SumaMatricesDosxDos"

function App() {
  const[operaciones,setOperaciones]=useState("nada");

  const[animation,setAnimation]=useState(false)


  

  const sumita = () =>{
    setOperaciones("sumita")
  }

  const restita = () =>{
    setOperaciones("restita")
  }

  const multi = () => {
    setOperaciones("multi")
  }

  const start2x2Sum = () => {
    setAnimation(!animation)
  }

  return (
    <div className="App">
      <div className={animation?"menuContainerAnimation":"menuContainer"}>
        <h1>Menu</h1>
        <div className='sumaButton' onClick={sumita}>
          {(operaciones==="nada"|| operaciones==="restita" || operaciones==="multi") &&(
            <h2>SUMA</h2>)}
          {operaciones==="sumita" &&(
            <div className='sumaDosTres'> 
              <button onClick={start2x2Sum}>(2x2)</button>
              <button>(3x3)</button>
              <button>(4x4)</button>
            </div>
          )}
        </div>
        <div className='restaButton' onClick={restita}>
          {(operaciones==="nada"||operaciones==="sumita"||operaciones==="multi")&&(
          <h2>RESTA</h2>)}
          {operaciones==="restita" &&(
            <div className='restaDosTres'>
              <button>(2x2)</button>
              <button>(3x3)</button>
              <button>(4x4)</button>
            </div>
          )}
        </div>
        <div className='multiplicacionButton' onClick={multi}>
          {(operaciones==="nada"|| operaciones==="restita" || operaciones==="sumita") &&(
            <h2>MULTIPLICACION</h2>)}
          {operaciones==="multi" &&(
            <div className='sumaDosTres'> 
              <button>(2x2)</button>
              <button>(3x3)</button>
              <button>(4x4)</button>
            </div>
          )}
        </div>
      </div>
      {animation === true && (
        <div className='calculusContainer'>
          <SumaMatrices2x2 />
        </div>
      )}
    </div>
  );
}

export default App;