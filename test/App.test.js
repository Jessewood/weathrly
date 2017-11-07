import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/App';

global.localStorage = {

    getItem(key) {
      if (!global.localStorage[key]){
        return null;
      } 
      return JSON.stringify(global.localStorage[key]);
    },
    setItem (key, value) {
      global.localStorage[key] = value;
    }
};

describe('App', () => {

  let app = shallow(<App />);

  it('should exist', () => {
    expect(app).toBeDefined();
  })

  it('should have a header', () => {
    const header = app.find('Header').first()
    expect(header).toHaveLength(1);
  })

  it('should render Welcome if there is no location', () => {
    expect(app.find('Welcome').length).toEqual(1)
    localStorage.setItem("currentCity", 'Denver, CO')
    // console.log(app.state());
    app.setState({location: localStorage.getItem('currentCity')})
    // console.log(app.state());
    localStorage.getItem("currentCity")
    expect(app.find('Welcome').length).toEqual(0)
  })

})