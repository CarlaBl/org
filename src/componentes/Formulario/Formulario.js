import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) =>{
    const [nombre,actualizarNombre]= useState("")
    const [puesto,actualizarPuesto]= useState("")
    const [foto,actualizarFoto]= useState("")
    const [equipo,actualizarEquipo]= useState("")

    const manenjarEnvio = (e)=>{
        e.preventDefault()
        console.log("Manejar envio");
        let datosEnviar = {
            nombre:nombre,
            puesto:puesto,
            foto:foto,
            equipo:equipo
        }
        console.log(datosEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manenjarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
                />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                valor={puesto}
                actualizarValor={actualizarPuesto}
                />
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                valor={foto}
                actualizarValor={actualizarFoto}
                />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos = {props.equipos}
                />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario