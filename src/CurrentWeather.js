import React from 'react';
import PropTypes from 'prop-types';
import './CurrentWeather.scss';

const CurrentWeather = (props) => {
  return (
    <div className='current-weather-wrapper'>
      <h2 className='current-weather-title'>{props.location}</h2>
      <p>{props.currentForecast.date}</p>
      <div className='current-weather-header'>
        <img src={props.currentForecast.icon} />
        <div className='current-temp-wrapper'>
        <p className='temp'>{props.currentForecast.temp}°F</p>
        <p>High: {props.currentForecast.high}°F / 
           Low: {props.currentForecast.low}°F</p>
        </div>
      </div>
      <div className='current-weather-card'>
        <p className='current-conditions'>{props.currentForecast.conditions}</p>
        <p className='cf-summary'>{props.currentForecast.summary}</p>
      </div>
    </div>

  );
};

CurrentWeather.propTypes = {
  location: PropTypes.string,
  currentForecast: PropTypes.object
};

export default CurrentWeather;