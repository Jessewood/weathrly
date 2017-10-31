import React from 'react'
import './Welcome.scss'
import Search from './Search'

const Welcome = () => {
  return (
    <div  className="welcome">
      <h1 className="welcome-title">Weathrly</h1>
      <Search />
    </div>
  )
}

export default Welcome