import React from 'react';
import Search from './Search';
import './FourOhFour.scss';

const FourOhFour = (props) => {
  console.log(props.citySearch);
  return (
    <div className='error-wrapper'>
      <h1>Weathrly</h1>
      <Search citySearch={props.citySearch}/>
      <img className="sad-cloud" src='./public/sad-cloud.png'/>
      <h1>404</h1>
      <h2>Oops, City Not Found</h2>
    </div>
  );
};

export default FourOhFour;