import React, { useState } from 'react'

let data = [
  { id: 1, title: 'HTML', completed: false },
  { id: 2, title: 'JAVASCRIPT', completed: false },
  { id: 3, title: 'CSS', completed: false },
  { id: 4, title: 'REACT JS', completed: false },
  { id: 5, title: 'PHP', completed: false },
]
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
        {tasks.map(({ id, title, completed }) => {
          return (
            <button
              onClick={() => toggleCompleted(id)}
              key={id}
              className='list-group-item list-group-item-action d-flex justify-content-between'
            >
              {title}
              <span>{completed && '✔'}</span>
            </button>
          )
        })}
      </div>

      <h2 className='display-6'>Task are Done</h2>
      <div className='list-group'>
        {tasks
          .filter(({ completed }) => completed)
          .map(({ id, title, completed }) => {
            return (
              <button
                onClick={() => toggleCompleted(id)}
                key={id}
                className='list-group-item list-group-item-action d-flex justify-content-between'
              >
                {title}
                <span>{completed && '✔'}</span>
              </button>
            )
          })}
      </div>
    </div>
  )
}

export default TaskList
