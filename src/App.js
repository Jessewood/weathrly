import React, { Component } from 'react'
import Header from './Header'
import Welcome from './Welcome'
import CurrentWeather from './CurrentWeather'
import SevenHourForecast from './SevenHourForecast'
import TenDayForecast from './TenDayForecast'
import key from '../.api.js'
import filteredData from './cleanData'
import './App.scss'

export default class App extends Component {
  constructor() {
    super()
    
    const currentCity = JSON.parse(localStorage.getItem("currentCity"))
    
    this.state = {
      location: currentCity || '',
      currentForecast: {},
      sevenHourForecast: [],
      tenDayForecast: []
    }
    
    this.citySearch = this.citySearch.bind(this)
  }

  testInput(inputVal) {
    if (isNaN(parseInt(inputVal))) {
        this.setState({
          location: inputVal
        })
      let [city, state] = inputVal.split(/,\s+/)
      console.log(inputVal)
      return `${state}/${city}`
    } else {
      this.setState({
        location: inputVal
      })
      return inputVal
    }
  }

  citySearch(location) {
    location = this.testInput(location)
    fetch(`http://api.wunderground.com/api/${key}/forecast10day/hourly/conditions/q/${location}.json`)
      .then( data => data.json())
      .then( data => {
        const cleanData = filteredData(data)

        this.setState(cleanData)
        /*console.log(this.state.location)*/
        this.sendToStorage(this.state.location) 
        })
  }

  sendToStorage(cityData) {
     /* console.log(cityData)*/
      localStorage.setItem("currentCity", JSON.stringify(cityData))
  }

  componentDidMount() {   
    if (this.state.location) {
      this.citySearch(this.state.location);
    }
  }

  render() {
    return (
      <div>
      {
        !this.state.location &&
        <Welcome citySearch={this.citySearch} />
      }
      {
        this.state.location &&
        <div>
          <Header citySearch={this.citySearch}/>
          <div className='today-wrapper'>
            <CurrentWeather location={this.state.location} currentForecast={this.state.currentForecast} />
            <SevenHourForecast sevenHourForecast={this.state.sevenHourForecast.slice(0, 10)} />
          </div>
          <div className='ten-day-wrapper'>
            <TenDayForecast tenDayForecast={this.state.tenDayForecast.slice(0, 7)}  />
          </div>
        </div>
      }
      </div>
    )
  }
}

