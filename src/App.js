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
      {userList.length <= 0 ? (
        <h1 className='text-center display-4'>No User Found</h1>
      ) : (
        ''
      )}
      <div className='list-group'>
        {userList.map((user) => {
          const { id, username, email, avatar } = user
          return (
            <button
              onClick={() => deleteUser(id)}
              key={id}
              className='list-group-item-action list-group-item'
            >
              <div>
                <img width='50' src={avatar} alt={username} />
                {username}
                <strong>
                  <u>{email}</u>
                </strong>
              </div>
            </button>
          )
        })}
      </div>
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
