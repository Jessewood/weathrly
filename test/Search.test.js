import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../src/Search';

describe('Search', () => {
  const search = shallow(<Search />);
  // const searchInput = search.find('.search-input');

  it('should shallow', () => {
    const search = shallow(<Search />);
    expect(search).toBeDefined();
  })

  it('should input search', () => {
    expect(search.find('.search-input').text()).toEqual('');
    expect(search.state('value')).toEqual('');

    search.find('.search-input').simulate('change', { target: { value: 'den' } });

    expect(search.state('value')).toEqual('den');
  });

  it('should clear the input field when button is clicked', () => {
    const search = shallow(<Search citySearch={() => {}}/>);

    expect(search.find('.search-input').text()).toEqual('');
    expect(search.state('value')).toEqual('');

    search.find('.search-input').simulate('change', { target: { value: 'den' } });

    expect(search.state('value')).toEqual('den');

    search.find('.search-button').simulate('click');

    expect(search.state('value')).toEqual('');
  });

  it('should fill suggestion array after input have more than 2 characters', () => {
    const search = shallow(<Search />);

    expect(search.find('li').length).toEqual(0);

    search.find('.search-input').simulate('change', { target: { value: 'den' }});

    expect(search.find('li').length).toEqual(2);
  });
})
