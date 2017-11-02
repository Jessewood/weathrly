import React, { Component } from 'react';
import autoCompleteCities from './autoCompleteCities';
import { Node, Trie } from '@Jessewood/jp-complete-me';
import { quickSort } from '@julieahawkins/sorting-suite';
import './Search.scss';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {};
    this.trie = new Trie();
    this.trie.populate(quickSort(autoCompleteCities.data))
  }

  onChange(event) {
    if (event.target.value.length > 2) {
      console.log(this.trie.suggest(event.target.value))
      this.setState({searchLocation: event.target.value})
    }
  }

  render() {
    return (
      <div className="search-wrapper">
        <div className="input-wrapper">
          <img src="../public/if_location_pin.svg" className="search-icon" />
          <input className="search-input" placeholder='Choose a city...' onChange={this.onChange.bind(this)} />
        </div>
        <button className="search-button" onClick={() => {this.props.citySearch(this.state.searchLocation)}}>Search</button>
        { 
          // this.props.errorText &&  
          // <div>{this.props.errorText}</div>
        }
      </div>
    )
  }
  
}