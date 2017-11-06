import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/App';


describe('App', () => {

var localStorageMock = (function() {
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

  Object.defineProperty(window, 'localStorage', { value: localStorageMock });

  const app = shallow(<App />);

  it('should shallow', () => {
    expect(app).toBeDefined();
  })

  it('should have a header', () => {
    const header = app.find('Header').first()
    expect(header).toHaveLength(1);
  })

  it('should render Welcome if there is no location', () => {
    const welcome = app.find('Welcome')
    expect(welcome.length).toEqual(1)
    //simulate state change
    //expect welcome.length to Equal 0
  })

  it('should render error if the location does not exist', () => {

  })


})