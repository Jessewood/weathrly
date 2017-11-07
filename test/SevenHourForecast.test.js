import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHourForecast from '../src/SevenHourForecast';


const sevenHourForecast = shallow(<SevenHourForecast day={'today'} 
                                                     sevenHourForecast={[1,2,3,4,5,6,7]}/>)

describe('SevenHourForecast', () => {
  it('should exist', () => {
    expect(sevenHourForecast).toBeDefined()
  });

  it('should have cards', () => {
    expect(sevenHourForecast.find('Card'))
  })

  it('should have 7 cards', () => {
    expect(sevenHourForecast.find('Card').length).toEqual(7)
  })
})