import React, { useState } from 'react'
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  document.body.className = isDarkMode ? 'dark-mode' : ''

  return (
    <main className='container my-5'>
      <h1>Dark Mode</h1>

      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        id='dark-mode-toggle'
      ></button>
      <h3>Blog Dark Mode</h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui porro
        deserunt a optio quaerat. Fugiat esse iusto unde ducimus modi obcaecati
        nesciunt delectus velit laudantium iste minus vel voluptate, tenetur
        facere natus illum architecto, sapiente amet accusantium maxime
        asperiores. Excepturi.
      </p>
    </main>
  )
}

export default App
