import React from 'react'
import TaskList from './components/functions/TaskList'

function App() {
  return (
    <main className='container my-5 '>
      <h1 className='display-1'>Hello React App</h1>
      <TaskList>
        <p>hello world</p>
      </TaskList>
    </main>
  )
}

export default App
