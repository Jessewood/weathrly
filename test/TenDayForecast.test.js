import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDayForecast from '../src/TenDayForecast';


describe('TenDayForecast', () => {
  it('should exist', () => {
    const tenDayForecast = shallow(<TenDayForecast />)
    expect(tenDayForecast).toBeDefined()
  });

  // it('should have cards', () => {

    
  //   expect()
  // })
  // })
})