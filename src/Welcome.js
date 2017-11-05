import React from 'react';
import './Welcome.scss';
import Search from './Search';

const Welcome = (props) => {
  return (
    <div  className="welcome">
      <div className="welcome-wrapper">
        <h1 className="welcome-title">Weathrly</h1>
        <Search citySearch={props.citySearch} />
      </div>
    </div>
  );
};

export default Welcome;