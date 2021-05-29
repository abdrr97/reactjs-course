import React, { useState } from 'react'

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false)

  document.body.className = isDark ? 'dark-mode' : ''
  document.title = isDark ? '⚛ React Dark Mode' : '⚛ React Light Mode'
  const toggleDarkMode = () => {
    setIsDark(!isDark)
  }
  return (
    <>
      <button onClick={toggleDarkMode} className='dark-button'></button>
      <h3>Blog Dark Mode</h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui porro
        deserunt a optio quaerat. Fugiat esse iusto unde ducimus modi obcaecati
        nesciunt delectus velit laudantium iste minus vel voluptate, tenetur
        facere natus illum architecto, sapiente amet accusantium maxime
        asperiores. Excepturi.
      </p>
    </>
  )
}

export default DarkMode
