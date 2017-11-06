import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDayForecast from '../src/TenDayForecast';
  
  const mockData = {
    location: 'Denver, CO',
    time: '5:00 PM',
    temp: '70',
    conditions: 'clear',
    icon: 'clear',
    summary: 'Winds NW at 10mph'
  };

const tenDayForecast = shallow(<TenDayForecast tenDayForecast={[]}/>)

describe('TenDayForecast', () => {
  it('should exist', () => {
    expect(tenDayForecast).toBeDefined()
  });

  it('should have cards', () => {
    expect(tenDayForecast.find('Card'))
  })

  // it.skip('should pass props to the cards', () => {
  //   const card = shallow(<Card />)
  // })
})