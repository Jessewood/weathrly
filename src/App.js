import React, { Component } from 'react'
import Header from './Header'
import Welcome from './Welcome'
import CurrentWeather from './CurrentWeather'
import SevenHourForecast from './SevenHourForecast'
import TenDayForecast from './TenDayForecast'
import key from '../.api.js'
import filterData from './cleanData'
import './App.scss'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      welcome: true,
      location: null,
      currentForecast: {},
      sevenDayForecast: [],
      tenDayForecast: []

    }
    this.citySearch = this.citySearch.bind(this)
  }

  citySearch(location) {
    console.log(location)
    this.setState({
      welcome: false,
      location: location
    })
    let [city, state] = location.split(/,\s+/)
    fetch(`http://api.wunderground.com/api/${key}/forecast10day/hourly/conditions/q/${state}/${city}.json`)
      .then( data => data.json())
      .then( data => {
        const cleanData = filterData(data)

        this.setState(cleanData)
        console.log(this.state.location)
        })
      localStorage.setItem("currentCity", JSON.stringify(this.state.location)
  }

  componentDidMount() {
  //JSON.parse(localStorage.getItem("currentCity"))
  // fetch(`http://api.wunderground.com/api/${key}/forecast10day/hourly/conditions/q/CO/Denver.json`)
  // .then( data => data.json())
  // .then( data => {
  //   const cleanData = filterData(data)

  //   this.setState(cleanData)
  //   console.log(this.state)
  //   })
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
          <Header citySearch={this.citySearch}/>
          <div className='today-wrapper'>
            <CurrentWeather location={this.state.location} currentForecast={this.state.currentForecast} />
            <SevenHourForecast sevenHourForecast={this.state.sevenHourForecast.slice(0, 7)} />
          </div>
          <div className='ten-day-wrapper'>
            <TenDayForecast tenDayForecast={this.state.tenDayForecast}  />
          </div>
        </div>
      }
      </div>
    )
  }
}

