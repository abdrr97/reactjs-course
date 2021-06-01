import React from 'react'

const ButtonTodo = (props) => {
  const {
    obj: { id, title, completed },
    toggleCompleted,
  } = props

  return (
    <>
      <button
        onClick={() => toggleCompleted(id)}
        className='
              list-group-item d-flex 
              justify-content-between 
              list-group-item-action'
      >
        {title}
        <span>{completed ? '✔' : '❌'}</span>
      </button>
    </>
  )
}

export default ButtonTodo
