import React from 'react'
import './CurrentWeather.scss'

const CurrentWeather = (props) => {
  return(
    <div className='current-weather-wrapper'>
      <h2 className='current-weather-title'>Current Weather</h2>
      <p>name of the current city</p>
      <p>current condition</p>
      <p>current day</p>
      <p>current temperature</p>
      <p>expected high and expected low for the day</p>
      <p>weather summary(“Windy, chance of a few late night showers. Lows overnight in the mid 50s.)</p>
    </div>

    )
}

export default CurrentWeather