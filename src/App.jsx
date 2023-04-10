import { useState } from 'react'
import './App.css'
// custom components
import CustomForm from './assets/components/CustomForm'
import TaskList from './assets/components/TaskList'
import EditForm from './assets/components/EditForm'

import useLocalStorage from './assets/hooks/useLocalStorage'
function App() {

  // name and initial state go in our custom hook
  const [tasks, setTasks] = useLocalStorage('todo.tasks', []) 
  const [PreviousFocusEl, setPreviousFocusEl] = useState(null) 
  const[editedTask, setEditedTask] = useState(null)
  const[isEditing, setIsEditing] = useState(false)
  const addTask =(task) => {
    console.log(task)
    setTasks((prevState) => [task, ...prevState])
   }

   const deleteTask =(id) => {
    setTasks(prevState => prevState.filter(task => task.id !== id))
   }  

   // toggles the checked key in task's state
   const completeTask =(id) => {
    setTasks(prevState => prevState.map(task => (task.id === id
      ? {...task, checked : !task.checked}: task)))
   }  
   const updateTask =(task) => {
    setTasks(prevState => prevState.map(t => (task.id === t.id
      ? {...t, name : task.name}: t)))
      closeEditMode()
   }
   
   const closeEditMode =() => {
    setIsEditing(false)
    PreviousFocusEl.focus()
   }
   // close the edit mode
   const enterEditMode =(task) => {
    setEditedTask(task)
    setIsEditing(true)
    setPreviousFocusEl(document.activeElement)
   }

  return (
    <div className="container">
    <header>
      <h1>My Task List</h1>
    </header>
    {
      isEditing &&  (<EditForm editedTask={editedTask} updateTask={updateTask} closeEditMode={closeEditMode}/>)
    }
   
    <CustomForm addTask={addTask}/>
    
      {tasks && <TaskList tasks={tasks} 
                          deleteTask = {deleteTask}
                          completeTask = {completeTask}
                          enterEditMode={enterEditMode}
      />}
      </div>
  )
}

export default App
