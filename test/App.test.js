import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/App';
import mockData from '../__mocks__/fileMock'


describe('App', () => {

global.localStorage = (function() {
  var store = {
    currentCity: '',
  };

  return {
    getItem: function(key) {
      return JSON.stringify(store[key]);
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key) {
      delete store[key];
    }
  };
})();

  const app = shallow(<App />);

  it('should exist', () => {
    expect(app).toBeDefined();
  })

  it('should have a header', () => {
    const header = app.find('Header').first()
    expect(header).toHaveLength(1);
  })

  it('should render Welcome if there is no location', () => {
    const welcome = app.find('Welcome')
    expect(welcome.length).toEqual(0)
    localStorage.setItem("currentCity", 'Denver, CO')
    console.log(localStorage)
    localStorage.getItem("currentCity")
    // const currentWeather = app.find('.current-weather')
    console.log(app.debug())
    expect(welcome.length).toEqual(0)
  })

  it('should render error if the location does not exist', () => {

  })


})