import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../src/Header';


const header = shallow(<Header />);

describe('Header', () => {
  it('should exist', () => {
    expect(header).toBeDefined()
  });

  it('should have a search component', () => {
    const search = header.find('Search')
    expect(search.length).toEqual(1)
  });

  it('should have a header title', () => {
    const title = header.find('h1')
    expect(title.length).toEqual(1)
  });


})