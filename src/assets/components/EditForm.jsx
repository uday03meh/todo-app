import React from 'react'
import { useState, useEffect } from 'react'
import {CheckIcon} from '@heroicons/react/24/solid'
const EditForm = ({editedTask, updateTask, closeEditMode}) => {
const [updatedTaskName, setupdatedTaskName] = useState(editedTask.name)

useEffect(() => {
    const closeModalIfEscaped = (e) => {
        if(e.key === 'Escape'){
            closeEditMode()
        }
    }
    window.addEventListener('keydown', closeModalIfEscaped)

    return() => {
        window.removeEventListener('keydown',closeModalIfEscaped)
    }
},[closeEditMode])
    const handleFormSubmit = (e) => {
            e.preventDefault()
            updateTask({...editedTask, name:updatedTaskName})
    }
  return (
    <div role='dialog' 
    aria-labelledby='editTask'
    onClick={(e) => {e.target===e.currentTarget && closeEditMode()}}
     >
        <form className='todo'
        onSubmit={handleFormSubmit}>
<div className='wrapper'>
    <input type='text' id='editTask' className='input' value={updatedTaskName} onInput={(e) => setupdatedTaskName(e.target.value)} required autoFocus maxLength={60} placeholder='Update task'/>
    <label htmlFor='editTask'
    className='label'>Update Task</label>
</div>
<button className='btn'
        aria-label='Update Task'
        type='submit'>
            <CheckIcon strokeWidth={2} width={24} height={24} />
        </button>
        </form>
        </div>
  )
}

export default EditForm