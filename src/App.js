import React, { useState } from 'react'
import UserList from './components/user/UserList'

const App = () => {
  const [isDark, setIsDark] = useState(false)

  document.body.className = isDark ? 'bg-dark text-white ' : ''
  return (
    <main className='container my-5'>
      <div className='d-flex justify-content-end'>
        <button
          onClick={() => setIsDark(!isDark)}
          className={isDark ? 'btn btn-light' : 'btn btn-dark'}
        >
          dark
        </button>
      </div>
      <h1 className='display-6'>App js</h1>

      <UserList />
    </main>
  )
}

export default App
