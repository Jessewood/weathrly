import React from 'react'
import './SevenHourForecast.scss'
import Card from './Card'

export default class SevenHourForecast extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    console.log(this.props.sevenHourForecast)
    return(
      <div className='seven-hour-wrapper'>
        <h2>7 Hour Forecast </h2>
        <div className='card-wrapper'>
        {
          this.props.sevenHourForecast.map((hourForecast) => {
            return(
              <Card 
                date={hourForecast.date}
                conditions={hourForecast.conditions}
                icon={hourForecast.icon}
                temp={hourForecast.temp} />
            )
          })
        }
        </div>
      </div>
    )  
  }
}

