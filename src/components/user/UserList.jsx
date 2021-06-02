import React, { useState } from 'react'
import UserForm from './UserForm'
import UserItem from './UserItem'
import { users } from './users'

const UserList = () => {
  const URL = 'https://avatars.dicebear.com/api/avataaars/'

  // initialise usersLists with users array
  const [usersList, setUsersList] = useState(users)
  const [searchKeyword, setSearchKeyword] = useState('')
  // initialise user properities
  const [id, setId] = useState(usersList.length + 1)
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState(`${URL}${username}.svg`)

  // delete a users from usersList state array
  const deleteUser = (id) => {
    const newUsersList = usersList.filter((user) => user.id !== id)
    setUsersList(newUsersList)
  }

  // add new users to a users from usersList state array
  const addNewUser = (e) => {
    e.preventDefault()
    setId(id + 1)
    setAvatar(`${URL}${username}.svg`)

    const newUser = {
      id: id,
      name: name,
      username: username,
      email: email,
      avatar: avatar,
    }
    setUsersList([newUser, ...usersList])
  }
  const formProps = {
    name,
    setName,
    username,
    setUsername,
    email,
    setEmail,
    avatar,
    setAvatar,
    addNewUser,
  }
  return (
    <>
      <h3 className='fw-light'>User List</h3>

      {/* User Form */}

      <UserForm {...formProps} />

      <input
        className='form-control mb-5'
        placeholder='search by username'
        type='search'
        value={searchKeyword}
        onChange={(e) => {
          setSearchKeyword(e.target.value)
          const newUsersList = usersList.filter((user) => {
            return user.name.toLowerCase().includes(searchKeyword.toLowerCase())
          })

          setUsersList(newUsersList)
        }}
      />

      <div className='list-group'>
        {usersList
          .sort((a, b) => {
            if (a.name > b.name) {
              return 1
            } else {
              return -1
            }
          })
          .map((user) => (
            <UserItem
              addNewUser={addNewUser}
              key={user.id}
              {...user}
              deleteUser={deleteUser}
            />
          ))}
        <div className='btn-group'>
          <button className='btn btn-danger' onClick={() => setUsersList([])}>
            clear all
          </button>
          <button
            className='btn btn-success'
            onClick={() => setUsersList(users)}
          >
            refersh
          </button>
        </div>
      </div>
    </>
  )
}

export default UserList
