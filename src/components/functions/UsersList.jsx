import React, { useState } from 'react'
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
        {usersList.map(({ id, name, username, email, avatar }) => {
          return (
            <li
              key={id}
              className='list-group-item d-flex justify-content-between align-items-center'
            >
              <div className='d-flex align-items-center'>
                <img width='40' src={avatar} alt={name} />
                <div>
                  <h6>@{username}</h6>
                  <small className='fw-light'>{email}</small>
                </div>
              </div>
              <button onClick={() => removeUser(id)} className='btn btn-link'>
                remove
              </button>
            </li>
          )
        })}
      </ul>
      <button
        onClick={() => setUsersList([])}
        className='mx-auto btn btn-primary my-2'
      >
        clear all
      </button>
    </div>
  )
}

export default UsersList
