import React from 'react';
import './Card.scss';

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.date ? props.date : `${props.time}`}</p>
      <p>{props.conditions}</p>
      <img src={props.icon}/>
      <p>{props.temp ? props.temp + '°F' : ''} </p>
      <p>{props.high ? 'High: ' + props.high + '°F' : ''}</p>
      <p>{props.low ? 'Low: ' + props.low + '°F' : ''}</p>
    </div>
  );  
};

export default Card;
