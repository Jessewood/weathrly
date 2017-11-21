import React, { Component } from 'react';
import Header from './Header';
import Welcome from './Welcome';
import CurrentWeather from './CurrentWeather';
import SevenHourForecast from './SevenHourForecast';
import TenDayForecast from './TenDayForecast';
import FourOhFour from './FourOhFour';
import Footer from './Footer';
import key from '../.api.js';
import filteredData from './cleanData';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    
    const currentCity = JSON.parse(localStorage.getItem("currentCity"));
    
    this.state = {
      location: currentCity || '',
      currentForecast: {},
      sevenHourForecast: [],
      tenDayForecast: [],
      error: ''
    };
    
    this.citySearch = this.citySearch.bind(this);
  }

  testInput(inputVal) {
    if (isNaN(parseInt(inputVal))) {
      this.setState({
        location: inputVal,
        error: ''
      });
      let [city, state] = inputVal.split(/,\s+/);
      
      return `${state}/${city}`;
    } else {
      this.setState({
        location: inputVal,
        error: ''
      });
      return inputVal;
    }
  }

  citySearch(location) {
    location = this.testInput(location);
    //eslint-disable-next-line max-len
    fetch(`https://api.wunderground.com/api/${key}/forecast10day/hourly/conditions/q/${location}.json`)
      .then( data => data.json())
      .then( data => {
        const cleanData = filteredData(data);

        this.setState(cleanData);
        this.sendToStorage(this.state.location);
      })
      .catch( error => this.setState({error}));
  }

  sendToStorage(cityData) {
    localStorage.setItem("currentCity", JSON.stringify(cityData));
  }

  componentDidMount() {   
    if (this.state.location) {
      this.citySearch(this.state.location);
    }
  }

  render() {
    if (!this.state.location) {
      return (
        <Welcome citySearch={this.citySearch} />
      );
    } else if (!this.state.error &&
                this.state.location && 
                this.state.tenDayForecast.length) {
      return (
        <div className="background">
          <Header citySearch={this.citySearch}/>
          <div className='main-wrapper'>
            <div className='today-wrapper'>
              <CurrentWeather location={this.state.location} 
                              currentForecast={this.state.currentForecast} />
              <SevenHourForecast day={this.state.sevenHourForecast[0]} 
                                 sevenHourForecast=
                                 {this.state.sevenHourForecast.slice(0, 7)} />
            </div>
            <div className='ten-day-wrapper'>
              <TenDayForecast tenDayForecast={this.state.tenDayForecast}  />
            </div>
          </div>
          <Footer />
        </div>
      );
    } else if (this.state.error && this.state.location) {
      return (
        <div className="error">
          <FourOhFour citySearch={this.citySearch}/>
          <Footer />
        </div>
      );
    }
    return null;
  }
}

