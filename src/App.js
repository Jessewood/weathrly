import React, { Component } from 'react'
import Header from './Header'
import Welcome from './Welcome'
import Search from './Search'
import CurrentWeather from './CurrentWeather'
import SevenHourForecast from './SevenHourForecast'
import TenDayForecast from './TenDayForecast'
import './App.scss'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      welcome: false
    }
  }

  render() {
    return (
      <div>
      {
        this.state.welcome &&
        <Welcome />
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

