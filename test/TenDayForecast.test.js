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

const tenDayForecast = shallow(<TenDayForecast tenDayForecast={[1,2,3,4,5,6,7,8,9,10]}/>)

describe('TenDayForecast', () => {
  it('should exist', () => {
    expect(tenDayForecast).toBeDefined()
  });

  it('should have cards', () => {
    expect(tenDayForecast.find('Card'))
  })

  it('should have 10 cards', () => {
    expect(tenDayForecast.find('Card').length).toEqual(10);
  })
})