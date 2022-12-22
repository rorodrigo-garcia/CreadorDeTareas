import { useState } from "react"
import "./MiApp.css"

export default function Todo({item,enActualizacion,borrar}){

    const [editar,setEditar] = useState(false)
    function FormularioEdit(){
        
        const [nuevoValor,setNuevoValor] = useState(item.titulo)

        function handleSubmit(e){
            e.preventDefault()
        }

        function handleChange(e){
            const value = e.target.value
            setNuevoValor(value)
        }
 
        function handleClickActualizacion(){
            enActualizacion(item.id,nuevoValor)
            setEditar(false)
        }

        return <form className="actualizacionForm" onSubmit={handleSubmit}>
            <input type="text" className="todoInput" onChange={handleChange} value={nuevoValor}/>
            <button className="botonActualizar" onClick={handleClickActualizacion}>actualizar</button>
        </form>
    }
    function TodoElemento(){
        return(
            <div className="todoInfo">
                <span className="todoTitulo">{item.titulo}</span>
        <button className="boton" onClick={()=> setEditar(true)}> Editar</button>
        <button className="botonBorrar" onClick={(e)=> borrar(item.id)}> Eliminar</button>
        </div>
        )
    }
    return(

        <div className="todo"> {editar ? <FormularioEdit/> : <TodoElemento />}
           
       
         </div>
    )
}