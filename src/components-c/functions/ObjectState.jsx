import React, { useState } from 'react'

const ObjectState = () => {
  const [user, setUser] = useState({
    id: 1,
    firstName: 'Ahmed',
    email: 'abdrr97@gmail.com',
  })

  return (
    <div>
      <h3 className='fw-light'>Objects State</h3>
      <h5 className='fw-light'>{user.id}</h5>
      <h5 className='fw-light'>{user.firstName}</h5>
      <h5 className='fw-light'>{user.email}</h5>

      <button
        onClick={() => setUser({ ...user, email: 'admin@gmail.com' })}
        className='btn btn-sm btn-primary'
      >
        Change Email to Admin
      </button>

      <button
        onClick={() => setUser({ ...user, email: 'abdrr97@gmail.com' })}
        className='btn mx-5 btn-sm btn-success'
      >
        Change Email to Original
      </button>
    </div>
  )
}

export default ObjectState
