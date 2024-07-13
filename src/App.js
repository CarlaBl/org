import { useState } from 'react';
import './App.css';
import Encabezado from './componentes/Encabezado/Encabezado';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';

function App() {
  const [mostrarFormulario, actualizarMostrar]= useState(true)

  //Ternario --> condicion ? seMuestra : noSemuestra
  // condicion && seMuestra

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      <Encabezado/>
      {/*mostrarFormulario === true ? <Formulario/> : <div></div>*/}
      {mostrarFormulario && <Formulario/> }
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
