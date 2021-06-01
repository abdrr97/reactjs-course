import React, { useState } from 'react'

// const { useState } = React

const App = () => {
  // const [title, setTitle] = useState('Hello World')
  // const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({
    id: 1,
    username: 'Ahmed',
    age: 30,
  })

  const handleClick = () => {
    if (user.username === 'Ahmed') {
      setUser({
        ...user,
        username: 'Amine',
        age: 50,
      })
    } else {
      setUser({
        ...user,
        username: 'Ahmed',
        age: 25,
      })
    }
  }

  return (
    <main className='container my-5'>
      <h1 className='fw-light'>
        <strong>id</strong> : {user.id}
      </h1>
      <h1 className='fw-light'>
        <strong>username</strong> : {user.username}
      </h1>
      <h1 className='fw-light'>
        <strong>age</strong> : {user.age}
      </h1>
      <button
        style={{ backgroundColor: user.username === 'Amine' ? 'green' : 'red' }}
        className='btn btn-primary my-3 '
        onClick={handleClick}
      >
        {user.username}
      </button>
    </main>
  )
}

export default App
