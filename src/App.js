import React, { useState } from 'react'
import { users } from './users'

const App = () => {
  const [userList, setUserList] = useState(users)

  const deleteUser = (id) => {
    const newUserList = userList.filter((user) => user.id !== id)
    setUserList(newUserList)
  }

  return (
    <main className='container my-5'>
      <h3 className='fw-light'>Users List</h3>
      <hr />
      <ul className='list-group'>
        {userList.map((user) => {
          const { id, username, email, avatar } = user
          return (
            <li
              key={id}
              className='d-flex justify-content-between align-items-center list-group-item'
            >
              <div>
                <img width='50' src={avatar} alt={username} />
                {username}
                <strong>
                  <u>{email}</u>
                </strong>
              </div>
              <button
                onClick={() => deleteUser(id)}
                className='btn btn-sm btn-danger'
              >
                &times;
              </button>
            </li>
          )
        })}
      </ul>
      <button onClick={() => setUserList([])} className='btn btn-danger my-3'>
        Clear All
      </button>
      <button
        onClick={() => setUserList(users)}
        className='mx-2 btn btn-primary my-3'
      >
        Refresh
      </button>
    </main>
  )
}

export default App
