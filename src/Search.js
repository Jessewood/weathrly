import React, { Component } from 'react';
import './Search.scss'

const Search = (props) => {
  return (
    <div className="search-wrapper">
      <div className="input-wrapper">
        <img src="../public/if_location_pin.svg" className="search-icon" />
        <input className="search-input" placeholder='Choose a city...' />
      </div>
      <button className="search-button" onClick={() => {props.citySearch()}}>Search</button>
    </div>
  )
}

export default Search