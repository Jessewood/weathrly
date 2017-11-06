import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../src/Search';


describe('Search', () => {
  const search = shallow(<Search />);
  const searchInput = search.find('.search-input');

  it('should shallow', () => {
    const search = shallow(<Search />);
    expect(search).toBeDefined();
  })

  it('should input search', () => {
    expect(searchInput.text()).toEqual('');
    expect(search.state('value')).toEqual('');

    searchInput.simulate('change', { target: { value: 'den' } });

    expect(search.state('value')).toEqual('den');
  });
})