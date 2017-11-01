import React, { Component } from 'react'
import Header from './Header'
import Welcome from './Welcome'
import CurrentWeather from './CurrentWeather'
import SevenHourForecast from './SevenHourForecast'
import TenDayForecast from './TenDayForecast'
import key from '../.api.js'
import './App.scss'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      welcome: true,
      data: null
    }
    this.citySearch = this.citySearch.bind(this)
  }

  citySearch() {
    this.setState({
      welcome: false
    })
    console.log('clicked')
    console.log(this.state)
  }

  componentDidMount() {
  fetch(`http://api.wunderground.com/api/${key}/conditions/q/CO/Denver.json`)
  .then( data => data.json())
  .then( data => {
    const myData = {
      location: data.current_observation.display_location.full
    };
    this.setState({data: myData});
    console.log(this.state)
    console.log(this.citySearch)
    })
  }

  render() {
    return (
      <div>
      {
        this.state.welcome &&
        <Welcome searchFunction={this.citySearch} />
      }
      {
        !this.state.welcome &&
        <div>
          <Header />
          <div className='today-wrapper'>
            <CurrentWeather />
            <SevenHourForecast />
          </div>
          <div className='ten-day-wrapper'>
            <TenDayForecast />
          </div>
        </div>
      }
      </div>
    )
  }
}

