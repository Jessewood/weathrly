import React from 'react';
import Search from './Search';
import './Header.scss';

const Header = (props) => {
  return (
    <div className='header'>
      <Search citySearch={props.citySearch}/>
      <h1>Weathrly</h1>
    </div>
  );
}; 

export default Header;