import React from 'react'
import './SevenHourForecast.scss'
import Card from './Card'

export default class SevenHourForecast extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [1,2,3,4,5,6,7]
    }
  }

  render() {
    return(
      <div className='seven-hour-wrapper'>
        <h2>7 Hour Forecast </h2>
        <div className='card-wrapper'>
        {
          this.state.list.map((card) => {
            return <Card />
          })
        }
        </div>
      </div>
    )  
  }
}

