import React from 'react'
import Card from './Card'

import './TenDayForecast.scss'

export default class TenDayForecast extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [1,2,3,4,5,6,7,8,9,10]
    }
  }

  render() {
    const cards = []
    return(
      <div className='ten-day-card-wrapper'>
        <h2>10 Day Forecast </h2>
        {
          this.state.list.map((card) => {
            return <Card />
          }) 
        }
      </div>
    )
  }
}

