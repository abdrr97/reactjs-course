import React from 'react'

const Task = (props) => {
  const { id, title, completed } = props.task
  const { toggleCompleted } = props
  return (
    <>
      <button
        onClick={() => toggleCompleted(id)}
        className='list-group-item list-group-item-action d-flex justify-content-between'
      >
        {title}
        <span>{completed ? '✔' : '❌'}</span>
      </button>
    </>
  )
}

export default Task
