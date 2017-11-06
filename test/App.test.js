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
    const header = app.find('.header').first()
    expect(header).toHaveLength(1);
  })


})