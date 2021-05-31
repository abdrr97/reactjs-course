import React from 'react'

const UserItem = (props) => {
  const { id, name, username, email, avatar } = props.user
  const { removeUser } = props
  return (
    <>
      <li className='list-group-item d-flex justify-content-between align-items-center'>
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
    </>
  )
}

export default UserItem
