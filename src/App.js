import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SumaMatrices2x2 from "./operaciones/suma/2x2/SumaMatricesDosxDos"
import SumaMatrices3x3 from './operaciones/suma/3x3/SumaMatricesTresxTres';
import SumaMatrices4x4 from './operaciones/suma/4x4/SumaMatricesCuatroxCuatro';


function App() {
  const[operaciones,setOperaciones]=useState("nada");

  const[animation,setAnimation]=useState(false)

  const[chooseOption,setChooseOption]=useState(0)

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
    setChooseOption(1)
  }

  const start3x3Sum = () => {
    setAnimation(!animation)
    setChooseOption(2)
  }

  const start4x4Sum = () => {
    setAnimation(!animation)
    setChooseOption(3)
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
              <button onClick={start3x3Sum}>(3x3)</button>
              <button onClick={start4x4Sum}>(4x4)</button>
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
          {chooseOption===1 &&(<SumaMatrices2x2 />)}
          {chooseOption===2 &&(<SumaMatrices3x3 />)}
          {chooseOption===3 &&(<SumaMatrices4x4 />)}
        </div>
      )}
    </div>
  );
}

export default App;