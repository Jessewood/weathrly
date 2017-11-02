import React from 'react'
import './CurrentWeather.scss'

const CurrentWeather = (props) => {
  return(
    <div className='current-weather-wrapper'>
      <h2 className='current-weather-title'>{props.location}</h2>
      <div className='card'>
        <p>{props.currentForecast.conditions}</p>
        <p>{props.currentForecast.date}</p>
        <p>{props.currentForecast.low}{props.currentForecast.high}</p>
        <p>{props.currentForecast.summary}</p>
      </div>
    </div>

    )
}

export default CurrentWeather