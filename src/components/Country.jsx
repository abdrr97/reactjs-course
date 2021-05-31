import React from 'react'

const Country = (props) => {
  // spread method
  //    const { name, flag, capital, languages } = props
  // Object Method
  //    const { name, flag, capital, languages } = props.country
  const {
    country: { name, flag, capital, languages },
  } = props

  return (
    <>
      <div className='card'>
        <h3 className='card-header fw-light'>
          {name} | <u>{capital}</u>
        </h3>
        <div className='card-body'>
          <img width='100' src={flag} alt={name} />
          <hr />
          <h5 className='fw-light'>Languages</h5>
          <ul className='list-group my-3 '>
            {languages.map((lang, idx) => (
              <li key={idx} className='list-group-item'>
                <span className='mx-2'>{lang}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Country
