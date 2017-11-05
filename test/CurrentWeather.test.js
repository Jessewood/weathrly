import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../src/CurrentWeather';

  const mockData = {
    location: 'Denver, CO',
    time: '5:00 PM',
    temp: '70',
    conditions: 'clear',
    icon: 'clear',
  };

describe('Current Weather component', () => {

  it('should exist', () => {
    const currentWeather = shallow(<CurrentWeather location={'Denver, CO'} currentForecast={mockData} />);
    expect(currentWeather).toBeDefined();
  });

  it('should display a forecast', () => {
    const currentWeather = shallow(
      <CurrentWeather
        time={mockData.time} 
        temp={mockData.temp}
        condtions={mockData.conditions}
        currentForecast={mockData.icon}
     />)


    const time = currentWeather.find('.cf-summary').text();
    const temp = currentWeather.find('.temp').text();
    const icon = currentWeather.find('img');
    const location = currentWeather.find('.current-weather-title').text();
    const conditions = currentWeather.find('.current-conditions').text();
    // console.log(cwComponent.find('img').debug())

    expect(time).toEqual(mockData.time);
    expect(temp).toEqual(mockData.temp);
    expect(location).toEqual(mockData.location);
    expect(conditions).toEqual(mockData.conditions);
  });

});