import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../src/Card';


describe('Card', () => {
  it('should exist', () => {
    const card = shallow(<Card />)
    expect(card).toBeDefined()
  });

  it('should have a classname of card', () => {
    const card = shallow(<Card />);

    expect(card.find('.card').length).toEqual(1)
  });

  it('should render passed in time and conditions', () => {
    const card = shallow(<Card time="10:21" 
                               conditions="Clear" />);
    const timeValue = card.find('.time').text();
    const conditionsText = card.find('.conditions').text();

    expect(timeValue).toEqual(card.instance().props.time);
    expect(conditionsText).toEqual(card.instance().props.conditions);
  });

  it('should have recieve props', () => {
    const card = shallow(<Card icon="url" 
                               temp="78" 
                               high="85" 
                               low="67" 
                               date="Saturday" />);
    
    expect(card.instance().props.icon).toEqual('url')
    expect(card.instance().props.temp).toEqual('78')
    expect(card.instance().props.high).toEqual('85')
    expect(card.instance().props.low).toEqual('67')
    expect(card.instance().props.date).toEqual('Saturday')
  });

  it('should render correctly when time props are passed in', () => {
    const card = shallow(<Card time="5:25" />);
    // console.log(card.debug())
    expect(card.find('p').length).toEqual(3);
    expect(card.find('img').length).toEqual(1);
    expect(card.find('div').length).toEqual(2);
    expect(card.find('.hourcard').length).toEqual(1);
  });

  it('should render correctly when date props are passed in', () => {
    const card = shallow(<Card date="Monday" />);
    // console.log(card.debug())
    expect(card.find('p').length).toEqual(4);
    expect(card.find('img').length).toEqual(1);
    expect(card.find('div').length).toEqual(2);
    
  });
});
