import React from 'react'

const UserItem = ({ id, name, username, email, avatar, deleteUser }) => {
  return (
    <>
      <button
        onClick={() => deleteUser(id)}
        className='d-flex justify-content-between list-group-item list-group-item-action'
      >
        <div className=''>
          <img width='50' src={avatar} alt={username} />
          <span>{name}</span>
        </div>
        <small>{email}</small>
      </button>
    </>
  )
}

export default UserItem
