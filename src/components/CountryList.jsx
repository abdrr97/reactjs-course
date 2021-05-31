import React from 'react'
import Country from './Country'
import { countries, title } from '../data'

const CountryList = () => {
  document.title = title
  return (
    <div>
      {countries.map((d, idx) => {
        return <Country key={idx} country={d} /> // {...d} spread
      })}
    </div>
  )
}

export default CountryList
