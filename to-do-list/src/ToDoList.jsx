import { useState } from "react"

export default function ToDoList(){

  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')


  function handleTaskInput(event){
    setNewTask(event.target.value)
  }

  function addTask(){
    if(newTask.trim() !== ""){
          setTasks(t=> [...t, newTask]);
          setNewTask('')
    }
  }

  function deleteTask(index){
    setTasks(tasks.filter((_, i)=> i !== index))
  }


  return(
    <>
      <div className="to-do-list">
        <div>
          <h2>To Do List</h2>
          <input 
                className="input"
                type="text" 
                placeholder="Enter task..." 
                value={newTask}
                onChange={handleTaskInput} 
          />

          <button 
                className="add-button" 
                onClick={addTask}>
                  Add Task
          </button>
        </div>

        <ol>
          {tasks.map((task, index)=> 
            <li key={index} >
              <span className="text">{task}</span>
              <button
                className="delete-button" 
                onClick={()=> deleteTask(index)}>
                  Delete
              </button>
            </li>)}
        </ol>

      </div>
    </>
  )
}