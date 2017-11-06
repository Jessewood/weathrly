import React from 'react';
import Search from './Search';
import PropTypes from 'prop-types';
import './FourOhFour.scss';

const FourOhFour = (props) => {
  return (
    <div className='error-wrapper'>
      <h1>Weathrly</h1>
      <Search citySearch={props.citySearch}/>
      <img className="sad-cloud" src='./public/sad-cloud.png'/>
      <h2>404</h2>
      <h3>Oops, City Not Found</h3>
    </div>
  );
};

FourOhFour.propTypes = {
  citySearch: PropTypes.func
};

export default FourOhFour;