import React, { useState } from 'react'
import { data } from './data'
import Task from './Task'

const TaskList = ({ children }) => {
  const [tasks, setTasks] = useState(data)

  const toggleCompleted = (id) => {
    let newTasks = tasks.map((task) => {
      return task.id === id
        ? {
            ...task,
            completed: !task.completed,
          }
        : task
    })

    setTasks(newTasks)
  }
  return (
    <div>
      {children}
      <h2 className='display-6'>Tasks List</h2>
      <div className='list-group mb-5'>
        {tasks.map((task) => (
          <Task key={task.id} task={task} toggleCompleted={toggleCompleted} />
        ))}
      </div>

      <h2 className='display-6'>Task are Done</h2>
      <div className='list-group'>
        {tasks
          .filter(({ completed }) => completed)
          .map((task) => (
            <Task key={task.id} task={task} toggleCompleted={toggleCompleted} />
          ))}
      </div>
    </div>
  )
}

export default TaskList
