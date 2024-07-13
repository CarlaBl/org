import { useState } from 'react';
import './App.css';
import Encabezado from './componentes/Encabezado/Encabezado';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';

function App() {
  const [mostrarFormulario, actualizarMostrar]= useState(false)
  const [colaboradores, actualizarColaboradores]= useState([])

  //Ternario --> condicion ? seMuestra : noSemuestra
  // condicion && seMuestra

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador)=>{
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])

  }


  //lista equipos
  const equipos=[
    {
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2" 
    },
    {
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8" 
    },
    {
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      titulo:"Móvil",
      colorPrimario:"#FFBA05" ,
      colorSecundario:"#FFF5D9" 
    },
    {
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario: "#FFEEDF"
    }   
]

  return (
    <div>
      <Encabezado/>
      { /*mostrarFormulario === true ? <Formulario/> : <div></div>*/
      mostrarFormulario && <Formulario 
      equipos={equipos.map( (equipo)=> equipo.titulo)}
      registrarColaborador = {registrarColaborador}
      /> 
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />
      
      {//recorrer un arreglo
        equipos.map( (equipo)=><Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores}
          />
        )
      }

    </div>
  );
}

export default App;