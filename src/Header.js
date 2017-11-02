import React from 'react'
import Search from './Search'
import './Header.scss'

const Header = (props) => {
  return(
    <div className='header'>
      <h1>Weathrly</h1>
      <Search citySearch={props.citySearch}/>
    </div>
  )
} 

export default Header