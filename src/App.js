import React, { Component } from 'react'
import Welcome from './Welcome'
import './App.scss'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      welcome: true
    }
  }
  render() {
    return (
      <div>
        <div className="welcome">
          <Welcome />
        </div>
      </div>
      )
  }
}

