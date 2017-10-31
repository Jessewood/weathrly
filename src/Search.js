import React, { Component } from 'react';
import './Search.scss'

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: 'Choose a city'
    }
  }
  render() {
    return (
      <div className="search-wrapper">
        <div className="input-wrapper">
          <img src="../public/if_location_pin.svg" className="search-icon" />
          <input className="search-input" placeholder={this.state.placeholder} />
        </div>
        <button className="search-button" onClick={() => {console.log('clicked')}}>Search</button>
      </div>
      )
  }
}