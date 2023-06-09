//1.-Las declaraciones de importación en la parte superior del archivo permiten que App.js use código que se ha definido en otro lugar.
import React from 'react';
import './App.css';


//-----------------
//2.- Import useState

import { useState } from 'react';
import ColorInput from './components/color';
import InputText from './components/text';


//------------------
//1.- La función App devuelve una expresión JSX.Esta expresión define lo que tu navegador presenta en última instancia al DOM.
function App() {
   // 1.- creación de variable 
   const aqui = "React"

  //-------EVENTOS--------

  //2.- mandar un submit con console.log
  // function handleSubmit(e){
  //   e.preventDefault();
  //   console.log("Acabas de presionar el botón")
  // }
 
  //---------------------------
  // Importamos el useState
// const [color, setColor] = useState('#00000')
// const [text,setText] = useState("holi")

  return (
   <div className="App">
        creacion de variable 
        <p>
       !Hola, {aqui}!
      </p> 
     </div>

    // 2.-----------------
//  <form onSubmit={handleSubmit}>
// <button>Submit</button>
//  </form>
    // <div>
    //   <button onClick={handleSubmit}>Enviar</button>
    // </div>
   
    //3.--------------------
    // <div className="App">
    // <h1 style={{color:color}}>{text}</h1>
    // <ColorInput colorValue={setColor} />
    // <InputText textValue={setText}/>
     

  
    
    // </div>
  );
 }

// la declaración export default App hace que nuestro componente App esté disponible para otros módulos
export default App;
