import React from 'react'
import Search from './Search'
import './Header.scss'

const Header = () => {
  return(
   <div className='header'>
    <h1>Weathrly</h1>
    <Search />
  </div>
    )
} 

export default Header