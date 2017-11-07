import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './SevenHourForecast.scss';


const SevenHourForecast = (props) => {
  return (
    <div className='seven-hour-wrapper'>
      <h2>{props.day.day}</h2>
      <div className='seven-card-wrapper'>
      {
        props.sevenHourForecast.map((hourForecast, hourIndex) => {
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

SevenHourForecast.propTypes = {
  day: PropTypes.object,
  sevenHourForecast: PropTypes.array
};

export default SevenHourForecast;