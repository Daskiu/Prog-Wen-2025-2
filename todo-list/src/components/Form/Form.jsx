import { useState } from 'react'
import './Form.css'

function Form() {
  const [taskInput, setTaskInput] = useState("")
  const [priority, setPriority] = useState("media")
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState("all")

  function handleSubmit(e) {
    e.preventDefault()
    if (taskInput.trim() === "") return

    const newTask = {
      text: taskInput,
      priority: priority,
    }

    setTasks([...tasks, newTask])
    setTaskInput("")
    setPriority("media") // reset al valor por defecto
  }

  const handleDelete = (id) => {
    const taskFiltered = tasks.filter((_, index) => id !== index)
    setTasks(taskFiltered)
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true
    return task.priority === filter
  })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={taskInput}
          placeholder="Nueva tarea"
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="alta">Alta</option>
          <option value="media">Media</option>
          <option value="baja">Baja</option>
        </select>
        <button type="submit">Agregar</button>
      </form>

      {/* Selector de filtro */}
      <div>
        <label>Filtrar por prioridad: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Todas</option>
          <option value="alta">Alta</option>
          <option value="media">Media</option>
          <option value="baja">Baja</option>
        </select>
      </div>

      {/* Lista filtrada */}
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task, index) => (
          <div key={index}>
            <li>
              {task.text} <strong>({task.priority})</strong>
            </li>
            <button onClick={() => handleDelete(index)}>Borrar</button>
          </div>
        ))
      ) : (
        <p>No hay tareas con este filtro</p>
      )}
    </>
  )
}

export default Form