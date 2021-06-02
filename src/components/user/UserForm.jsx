import React from 'react'

const UserForm = (props) => {
  // props from UsersList component
  const {
    name,
    setName,
    username,
    setUsername,
    email,
    setEmail,
    avatar,
    setAvatar,
    addNewUser,
  } = props

  return (
    <>
      <h5>Add new user form</h5>
      <form>
        <div className='row'>
          <div className='col-9'>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              className='my-2 form-control'
              placeholder='Name'
              type='text'
            />

            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value.split(' ').join(''))
                setAvatar(`${URL}${username}.svg`)
              }}
              className='my-2 form-control'
              placeholder='User Name'
              type='text'
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='my-2 form-control'
              placeholder='Email'
              type='text'
            />
          </div>
          <div className='col'>
            {name}
            {username}
            <img width='100' className='m-4' src={avatar} alt='' />
            {email}
          </div>
        </div>

        <button
          onClick={(e) => addNewUser(e)}
          className='mt-1 mb-5 btn btn-primary'
        >
          Add New User
        </button>
      </form>
    </>
  )
}

export default UserForm
