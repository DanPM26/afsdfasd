
//Al gual que App.js, el archivo comienza importando todos los módulos JS y otros activos que necesita para ejecutarse. src/index.css contiene estilos globales que se aplican a toda nuestra aplicación. Podemos ver que nuestro componente App también es importado acá; su importación es posible gracias a la declaración export en la parte inferior de App.js.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


//La función ReactDOM.render() de React con dos argumentos:
// El componente que queremos renderizar, <App /> en este caso.
// El elemento DOM dentro del cual queremos que se renderice el componente, en este caso, el elemento con un ID de root. Si miras dentro de public/index.html, verás que este es un elemento <div> justo dentro de <body>.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* Todo esto le indica a React que queremos renderizar nuestra aplicación React con el componente App como raíz, o primer componente. */}
    <App />
  </React.StrictMode>
);


