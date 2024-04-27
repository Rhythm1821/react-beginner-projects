import { useState } from 'react'
// import './App.css'
import ToDoList from './ToDoList'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleInputChange = (e) => {
    setNewTask(e.target.value)
  }

  const addTask = () => {
    if (newTask.trim()!==''){
      setTasks([...tasks, newTask])
      setNewTask('')}
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_,i)=>i!==index))
  }

  const moveTaskUp = (index) => {
    if (index>0){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  const moveTaskDown = (index) => {
    if (index<tasks.length-1){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  return (
    <>
      <div className='to-do-list'>
        <h1>To Do List</h1>
        <input
          type='text'
          value={newTask}
          onChange={handleInputChange}
          placeholder='Add new task'
        />
        <button className="add-button" onClick={addTask}>Add</button>
      </div>

      <ol>
        {tasks.map((task,index)=>

          <li key={index}>
            <span className='text'>{task}</span>
            <button className="delete-button" 
            onClick={()=>deleteTask(index)}>
              Delete
            </button>

            <button className="move-button" 
            onClick={()=>moveTaskUp(index)}>
              👆 
            </button>

            <button className="move-button" 
            onClick={()=>moveTaskDown(index)}>
              👇
            </button>
          </li>
        )}
      </ol>
    </>
  )
}

export default App
