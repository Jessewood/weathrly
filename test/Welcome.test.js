import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../src/Welcome';


describe('Welcome', () => {
  it('should exist', () => {
    const welcome = shallow(<Welcome />)
    expect(welcome).toBeDefined()
  });

  it('should have a classname of welcome', () => {
    const welcome = shallow(<Welcome />);

    expect(welcome.find('.welcome').length).toEqual(1)
  });

  it('should render a wrapper with a class of welcome wrapper', () => {
    const welcome = shallow(<Welcome />);
    
    expect(welcome.find('.welcome-wrapper').length).toEqual(1);
  });

  it('should display the title', () => {
    const welcome = shallow(<Welcome />);

    expect(welcome.find('h1').length).toEqual(1);
    expect(welcome.find('.welcome-title').length).toEqual(1);
  });


  it.skip('should recieve props', () => {
    const welcome = shallow(<Welcome citySearch={() => {}} />);
    // console.log(welcome.debug())
    expect(welcome.instance().props.citySearch).toEqual(function citySearch() {})
  });

  it('should render a Search component', () => {
    const welcome = shallow(<Welcome citySearch={() => {}} />);

    expect(welcome.find('Search').length).toEqual(1);
  });
  
  it.skip('should render pass props to Search component', () => {
    const welcome = shallow(<Welcome citySearch={() => {}} />);
    // console.log(welcome.find('Search').debug())
    expect(welcome.find('Search').props).toEqual(function props() {});
  });
})