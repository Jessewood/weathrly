import React from 'react'
import './CurrentWeather.scss'

const CurrentWeather = (props) => {
  return(
    <div className='current-weather-wrapper'>
      <h2 className='current-weather-title'>{props.location}</h2>
      <div className='current-weather-card'>
        <p>{props.currentForecast.conditions}</p>
        <img src={props.currentForecast.icon} />
        <p>{props.currentForecast.temp}°F</p>
        <p className='cf-summary'>{props.currentForecast.summary}</p>
        <p>{props.currentForecast.date}</p>
      </div>
    </div>

    )
}

export default CurrentWeather