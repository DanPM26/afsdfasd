//1.-Las declaraciones de importación en la parte superior del archivo permiten que App.js use código que se ha definido en otro lugar.
import React from 'react';
import './App.css';



// const App = () => {
// 1.- creación de variable 
// const aqui = "React"
//   return (
//     <div>
//  <h1>!Hola ${aqui}</h1>
//     </div>
//   )
// }




//-----------------
//1.- La función App devuelve una expresión JSX.Esta expresión define lo que tu navegador presenta en última instancia al DOM.

// function PrimerosEventos() {
   
//-------EVENTOS--------

//   //2.- mandar un submit con console.log 
   
//    function handleSubmit(e){
//      e.preventDefault();
//    console.log(`Acabas de presionar el botón`)
//    }
 
//    let contador = 0;
//    function enviar(){
//     contador++;
//  console.log(`${contador}`)
//    }

//   return (
//   <>
  
//  <form onSubmit={handleSubmit}>
//  <button>Submit</button>
//   </form>

//  <h1 id="elemento1"></h1>
//   <button onClick={()=> enviar()}>Enviar</button>
//   </>
//   );
//  }

//----------------------------------

//2.- Import useState

import { useState } from 'react';
import Color from './components/color';
import Text from './components/text';


function App() {
   
  //---------------------------
  // Importamos el useState
 const [color, setColor] = useState('#00000')
 const [text,setText] = useState("holi")

  return (
  <>
    <div className="App">

     <h1 style={{color:color}} >{text}</h1>
    <Color colorValue={setColor}/>
    <Text textValue={setText}/>

   </div> 

  </>
   
   
  );
 }

// la declaración export default App hace que nuestro componente App esté disponible para otros módulos

export default App

// module.exports= {
//   PrimerosEventos,
//   PrimerosPasos,

// }