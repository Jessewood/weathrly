import React from 'react'
import './Card.scss'

export default class Card extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return(
      <div className="card">
      Card Component
      </div>
      )
    }
}