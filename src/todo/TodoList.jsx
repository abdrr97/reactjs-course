import React, { useState } from 'react'
import { data } from '../data'
import ButtonTodo from './ButtonTodo'

const TodoList = () => {
  const [todoList, setTodoList] = useState(data)

  const completedTodoList = todoList.filter((todo) => todo.completed)

  const toggleCompleted = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo
    })

    setTodoList(newTodoList)
  }

  return (
    <div>
      <h1 className='display-5'>Todo List</h1>
      <div className='list-group'>
        {todoList.map((todo) => (
          <ButtonTodo
            key={todo.id}
            obj={todo}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </div>

      <h1 className='display-5'>Completed Todo</h1>
      <div className='list-group'>
        {completedTodoList.map((todo) => (
          <ButtonTodo
            key={todo.id}
            obj={todo}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoList
