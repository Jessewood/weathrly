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
      currentData: null,
      sevenHourData: null,
      tenDayData: null
    }
    this.citySearch = this.citySearch.bind(this)
  }

  citySearch() {
    this.setState({
      welcome: false
    })
  }

  componentDidMount() {
  fetch(`http://api.wunderground.com/api/${key}/conditions/q/CO/Denver.json`)
  .then( data => data.json())
  .then( data => {
    const currentData = {
      location: data.current_observation.display_location.full
    };
    const sevenHourData = {
      location: data.current_observation.display_location.full
    };
    const tenDayData = {
      location: data.current_observation.display_location.full
    };
    this.setState({currentData: currentData,
                    sevenHourData: sevenHourData,
                    tenDayData: tenDayData
      });
    console.log(this.state)
    })
  }

  render() {
    return (
      <div>
      {
        this.state.welcome &&
        <Welcome citySearch={this.citySearch} />
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

