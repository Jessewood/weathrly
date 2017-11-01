import React from 'react'
import './Welcome.scss'
import Search from './Search'

const Welcome = (props) => {
  return (
    <div  className="welcome">
      <h1 className="welcome-title">Weathrly</h1>
      <Search citySearch={props.searchFunction} />
    </div>
  )
}

export default Welcome