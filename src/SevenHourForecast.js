import React from 'react'
import './SevenHourForecast.scss'
import Card from './Card'

const SevenHourForecast = (props) => {
  return(
    <div className='seven-hour-wrapper'>
      <h2>7 Hour Forecast </h2>
      <Card />
    </div>
    )
}

export default SevenHourForecast