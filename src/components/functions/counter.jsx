import React, { useState } from 'react'

export const Counter = () => {
  const [number, setNumber] = useState(0)
  document.title = number
  document.body.className = number > 0 ? 'bg-dark text-white' : ''

  return (
    <div className='text-center'>
      <h2
        className='display-2'
        style={{ color: number > 0 ? 'green' : number < 0 ? 'red' : 'black' }}
      >
        Counter: {number}
      </h2>

      <div className='btn-group mt-5'>
        <button
          className='btn btn-lg btn-outline-success'
          onClick={() => setNumber(number + 1)}
        >
          Inc
        </button>
        <button
          className='btn btn-lg btn-outline-danger'
          onClick={() => setNumber(number - 1)}
        >
          Dec
        </button>
      </div>
    </div>
  )
}
