import React, { Component } from 'react'
import Header from './Header'
import Welcome from './Welcome'
import CurrentWeather from './CurrentWeather'
import SevenHourForecast from './SevenHourForecast'
import TenDayForecast from './TenDayForecast'
import FourOhFour from './FourOhFour'
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
      tenDayForecast: [],
      error: false
    }
    
    this.citySearch = this.citySearch.bind(this)
  }

  testInput(inputVal) {
    if (isNaN(parseInt(inputVal))) {
        this.setState({
          location: inputVal,
          error: false
        })
      let [city, state] = inputVal.split(/,\s+/)
      
      return `${state}/${city}`
    } else {
      this.setState({
        location: inputVal,
        error: false
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
        this.sendToStorage(this.state.location) 
        })
      .catch( error => this.setState({error: true}))
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
        </div>
      }
      {
        !this.state.error && 
        <div>
          <div className='today-wrapper'>
            <CurrentWeather location={this.state.location} 
                            currentForecast={this.state.currentForecast} />
            <SevenHourForecast sevenHourForecast={this.state.sevenHourForecast.slice(0, 7)} />
          </div>
          <div className='ten-day-wrapper'>
            <TenDayForecast tenDayForecast={this.state.tenDayForecast}  />
          </div>
        </div>
      }
      {
        this.state.error &&
        <FourOhFour />

      }
      </div>
    )
  }
}

