import React from 'react'
import './Card.scss'

const Card = (props) => {
  return(
    <div className="card">
      <p>{props.date}</p>
      <p>{props.condtions}</p>
      <img src={props.icon}/>
      <p>{props.temp ? props.temp : `${props.high}/${props.low}`}</p>
    </div>
  )  
}

export default Card