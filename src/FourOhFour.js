import React from 'react';
import Search from './Search';
import './FourOhFour.scss';

const FourOhFour = () => {
  return (
    <div className='error-wrapper'>
      <h1>Weathrly</h1>
      <img src='./public/sad-cloud.png'/>
      <h1>404</h1>
      <h2>Oops, City Not Found</h2>
      <Search />
    </div>
  );
};

export default FourOhFour;