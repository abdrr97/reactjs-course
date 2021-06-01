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

  const completedTodosCount = tasks.filter((task) => task.completed).length
  return (
    <div>
      {children}
      <h5 className='fw-light text-uppercase'>
        Todo - {completedTodosCount} / {tasks.length}
      </h5>
      <div className='list-group mb-5'>
        {tasks.map((task) => (
          <Task key={task.id} task={task} toggleCompleted={toggleCompleted} />
        ))}
      </div>

      <h5 className='fw-light text-uppercase'>completed Todos</h5>
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
