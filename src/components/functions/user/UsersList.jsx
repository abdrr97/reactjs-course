import React, { useState } from 'react'
import UserItem from './UserItem'
import { users } from './users'

const UsersList = () => {
  const [usersList, setUsersList] = useState(users)

  const removeUser = (id) => {
    const newUsersList = usersList.filter((user) => id !== user.id)
    setUsersList(newUsersList)
  }

  return (
    <div className=''>
      <h4 className='fw-light display-5 '>Users List</h4>

      <ul className='list-group'>
        {usersList.map((user) => (
          <UserItem key={user.id} user={user} removeUser={removeUser} />
        ))}
      </ul>
      <button onClick={() => setUsersList([])} className='btn btn-primary m-3'>
        clear all
      </button>
      <button
        onClick={() => setUsersList(users)}
        className='btn btn-success m-3'
      >
        refresh
      </button>
    </div>
  )
}

export default UsersList
