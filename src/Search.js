import React, { Component } from 'react';
// import autoCompleteCities from './autoCompleteCities';
// import { Node, Trie } from "@Jessewood/jp-complete-me";
import './Search.scss';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {}
  }

  onChange(event) {
    this.setState({searchLocation: event.target.value})
  }

  render() {
    return (
      <div className="search-wrapper">
        <div className="input-wrapper">
          <img src="../public/if_location_pin.svg" className="search-icon" />
          <input className="search-input" placeholder='Choose a city...' onChange={this.onChange.bind(this)} />
        </div>
        <button className="search-button" onClick={() => {this.props.citySearch(this.state.searchLocation)}}>Search</button>
      </div>
    )
  }
  
}