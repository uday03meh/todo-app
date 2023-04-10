import React, { useState } from 'react'
import styles from './TaskList.module.css'
import TaskItem from './TaskItem'
const TaskList = ({tasks, deleteTask, completeTask, enterEditMode}) => {
  return (
    <ul className={styles.tasks}>
    {
        tasks.map(task => {
            return(
            <TaskItem key={task.id} task={task} deleteTask={deleteTask}  completeTask = {completeTask} enterEditMode={enterEditMode}/>
            )
        })
    }
    </ul>
  )
  
}


export default TaskList