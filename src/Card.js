import React from 'react';
import './Card.scss';

const Card = (props) => {
  return (
    <div className="card">
      {
        props.time && 
        <div className="hourcard">
          <p className='time'>{props.time}</p>
          <p className='conditions'>{props.conditions}</p>
          <img src={props.icon}/>
          <p>{props.temp} </p>     
        </div>
      }
      {
        props.date &&
      <div>
        <p className='time'>{props.date}</p>
        <p className='conditions'>{props.conditions}</p>
        <img src={props.icon}/>
        <p>{'High: ' + props.high + '°F'}</p>
        <p>{'Low: ' + props.low + '°F'}</p>
      </div>
      }
    </div>
  );  
};

export default Card;
