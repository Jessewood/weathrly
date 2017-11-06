import React from 'react';
import Card from './Card';
import './TenDayForecast.scss';

export default class TenDayForecast extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const tenDayForecast = this.props.tenDayForecast;
    return (
      <div className='ten-day-info-wrapper'>
        <h2>10 Day Forecast </h2>
        <div className='ten-card-wrapper'>
        {
          tenDayForecast.map((dayForecast, dayIndex) => {
            return (
              <Card
                key={dayIndex}
                date={dayForecast.date}
                conditions={dayForecast.conditions}
                icon={dayForecast.icon}
                high={dayForecast.high}
                low={dayForecast.low} />
            );
          })
        }
        </div>
      </div>
    );
  }
}

