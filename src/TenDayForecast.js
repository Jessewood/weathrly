import React from 'react'
import Card from './Card'

import './TenDayForecast.scss'

const TenDayForecast = (props) => {
  return(
    <div className='ten-day-card-wrapper'>
      <h2>10 Day Forecast </h2>
      <Card />
    </div>
    )
}

export default TenDayForecast