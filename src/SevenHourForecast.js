import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './SevenHourForecast.scss';


export default class SevenHourForecast extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className='seven-hour-wrapper'>
        <h2>{this.props.day.day}</h2>
        <div className='seven-card-wrapper'>
        {
          this.props.sevenHourForecast.map((hourForecast, hourIndex) => {
            return (
              <Card 
                key={hourIndex}
                time={hourForecast.time}
                conditions={hourForecast.conditions}
                icon={hourForecast.icon}
                temp={hourForecast.temp} />
            );
          })
        }
        </div>
      </div>
    );  
  }
}

SevenHourForecast.propTypes = {
  day: PropTypes.object,
  sevenHourForecast: PropTypes.array
};

