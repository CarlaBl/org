import { useState } from 'react';
import {v4 as uuid} from "uuid";
import './App.css';
import Encabezado from './componentes/Encabezado/Encabezado';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
  {
    id:uuid(),
    equipo:"Front End",
    foto: "https://github.com/CarlaBl.png",
    nombre: "Carla Blacio",
    puesto: "Estudiante"
  }

  ])
  //lista equipos
  const [equipos,actualizarEquipos] = useState([
    {
      id:uuid(),
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id:uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id:uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2" 
    },
    {
      id:uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8" 
    },
    {
      id:uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id:uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05" ,
      colorSecundario:"#FFF5D9" 
    },
    {
      id:uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario: "#FFEEDF"
    }   
])

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
  
  //Eliminar colaborador
  const eliminarColaborador = (id)=>{
    console.log("Eliminar");
    const nuevosColaboradores = colaboradores.filter((colaborador => colaborador.id !== id))
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColorEquipo = (color, id)=>{
    const equiposActualizados = equipos.map((equipo)=>{
      if (equipo.id === id) {
        equipo.colorPrimario = color 
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)

  }

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
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColorEquipo}
          />
        )
      }

      <Footer/>

    </div>
  );
}

export default App;