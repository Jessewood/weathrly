import React from 'react';
import Search from './Search';
import PropTypes from 'prop-types';
import './Welcome.scss';

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

Welcome.propTypes = {
  citySearch: PropTypes.func
};

export default Welcome;