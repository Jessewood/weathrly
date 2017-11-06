import React from 'react';
import Search from './Search';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = (props) => {
  return (
    <div className='header'>
      <Search citySearch={props.citySearch}/>
      <h1>Weathrly</h1>
    </div>
  );
}; 

Header.propTypes = {
  citySearch: PropTypes.func
};

export default Header;