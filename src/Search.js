import React, { Component } from 'react';
import autoCompleteCities from './autoCompleteCities';
import { Trie } from '@Jessewood/jp-complete-me';
// import { quickSort } from '@julieahawkins/sorting-suite';
import PropTypes from 'prop-types';
import './Search.scss';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.trie = new Trie();
    this.trie.populate(autoCompleteCities.data);
    this.suggestionsArray = [];
    this.onChange = this.onChange.bind(this);
    this.renderSuggestions = this.renderSuggestions.bind(this);
  }

  onChange(event) {
    this.setState({value: event.target.value});
    if (event.target.value.length > 2) {
      this.setState({searchLocation: event.target.value});
      this.suggestionsArray = this.trie.suggest(event.target.value);
    } else if (event.target.value.length < 3) {
      this.suggestionsArray = [];
    }
  }

  renderSuggestions() {
    return (
      <ul className="suggestion-list" 
          style=
          {{"height": Math.min(240, this.suggestionsArray.length * 40) + "px"}}>
        {this.suggestionsArray.map((suggestion, suggestIndex) => {
          return (<li key={suggestIndex} 
                      onClick={() => {
                        this.setState({value: suggestion, 
                                       searchLocation: suggestion});
                        this.suggestionsArray = [];
                        this.trie.select(suggestion);
                      }}>{suggestion}</li>
          );
        }
      )}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <div className="search-wrapper">
          <div className="input-wrapper">
            <img src="../public/if_location_pin.svg" 
                 className="search-icon" />
            <input className="search-input" 
                   value={this.state.value} 
                   placeholder='Choose a city or zip code...' 
                   onChange={this.onChange.bind(this)} />
          </div>
          <button className="search-button"
                  disabled={!this.state.value}
                  onClick={() => {
                    this.props.citySearch(this.state.searchLocation);
                    this.setState({value: ''});
                  }}>Search</button>
        </div>
          {this.renderSuggestions()}
      </div>
    );
  }
}

Search.propTypes = {
  citySearch: PropTypes.func
};
