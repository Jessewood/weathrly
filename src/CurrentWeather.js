import React from 'react';
import './CurrentWeather.scss';

const CurrentWeather = (props) => {
  console.log(props);
  return (
    <div className='current-weather-wrapper'>
        <h2 className='current-weather-title'>{props.location}</h2>
      <div className='current-weather-header'>
        <img src={props.currentForecast.icon} />
        <p className='temp'>{props.currentForecast.temp}°F</p>
      </div>
      <div className='current-weather-card'>
        <p className='current-conditions'>{props.currentForecast.conditions}</p>
        <p className='cf-summary'>{props.currentForecast.summary}</p>
        <p>{props.currentForecast.date}</p>
      </div>
    </div>

  );
};

export default CurrentWeather;