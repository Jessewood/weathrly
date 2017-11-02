import React, { Component } from 'react';
import autoCompleteCities from './autoCompleteCities';
import { Node, Trie } from '@Jessewood/jp-complete-me';
import { quickSort } from '@julieahawkins/sorting-suite';
import './Search.scss';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.trie = new Trie();
    this.trie.populate(quickSort(autoCompleteCities.data))
  }

  onChange(event) {
    this.setState({value: event.target.value})
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
          <input className="search-input" value={this.state.value} placeholder='Choose a city or zip code...' onChange={this.onChange.bind(this)} />
        </div>
        <button className="search-button"
                disabled={!this.state.value}
                onClick={() => {
                  this.props.citySearch(this.state.searchLocation)
                  this.setState({value: ''})
                }}>Search</button>
        { 
          // this.props.errorText &&  
          // <div>{this.props.errorText}</div>
        }
      </div>
    )
  }
  
}