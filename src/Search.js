import React, { Component } from 'react'

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: 'Choose a city'
    }
  }
  render() {
    return (
      <div>
        <input placeholder={this.state.placeholder} />
        <button onClick={() => {console.log('clicked')}}>Search</button>
      </div>
      )
  }
}