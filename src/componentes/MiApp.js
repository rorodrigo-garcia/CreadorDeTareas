import {useState} from "react"
import Todo from "./Todo";
import "./MiApp.css"

export default function MiApp(){
    const [titulo , setTitulo] = useState ("escribe aqui")
    const[todos,setTodos]= useState([])

 
    function handleChange(event){
        const value = event.target.value;
        setTitulo(value);
    }
    function handleSubmit(e){
        e.preventDefault()
        const todoNuevo={
            id: crypto.randomUUID(),
            titulo : titulo,
            completo : false
        }

        const temp = [...todos]
        temp.unshift(todoNuevo)
        setTodos(temp)

        setTitulo("")
    }

    function handleActualizacion(id,value){
            const temp= [...todos]
            const item = temp.find(item => item.id ===id)
            item.titulo = value
            setTodos(temp)
    }

    function handleBorrar(id){
        const temp = todos.filter(item => item.id != id)
        setTodos(temp)

    }

    return( 
    <div className="todoContenedor"> 
    <form className="todoForm" onSubmit={handleSubmit}> 
        <input onChange={handleChange} className="Input" value={titulo}/>
        <input onClick={handleSubmit } type="submit" value="Crear aqui" className="botonDeCreado"/>
    </form>
        <div className="todosContenedores">
        {
            todos.map((item)=> (
                <Todo key={item.id} item={item} enActualizacion={handleActualizacion} borrar={handleBorrar}/>
            ))
        }
        </div>
     </div>
    )
}