import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../src/Search';


describe('Search', () => {
  const header = shallow(<Search />);
  const search = header.find('Search');

  it.skip('should input search', () => {
    expect(search.text()).toEqual('');
    expect(search.state('value')).toEqual('');

    search.simulate('change', { target: { value: 'den' } });

    expect(search.state('value')).toEqual('den');
  });
})