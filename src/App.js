import React, { useState } from 'react'
import { users } from './users'

const App = () => {
  const [userList, setUserList] = useState(users)

  return (
    <main className='container my-5'>
      <h3 className='fw-light'>Users List</h3>
      <hr />
      <ul className='list-group'>
        {userList.map((user) => {
          const { id, username, email, avatar } = user
          return (
            <li key={id} className='list-group-item'>
              <img width='50' src={avatar} alt={username} />
              {username} <small>{email}</small>
            </li>
          )
        })}
      </ul>
      <button onClick={() => setUserList([])} className='btn btn-danger my-3'>
        Clear All
      </button>
      <button
        onClick={() => setUserList([])}
        className='mx-2 btn btn-primary my-3'
      >
        Refresh
      </button>
    </main>
  )
}

export default App
