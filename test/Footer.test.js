import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from '../src/Footer';


describe('Footer', () => {
  it('should exist', () => {
    const footer = shallow(<Footer />)
    expect(footer).toBeDefined()
  });

  it('should have a classname of card', () => {
    const footer = shallow(<Footer />);

    expect(footer.find('.footer-wrapper').length).toEqual(1)
  });

  it('should render correctly', () => {
    const footer = shallow(<Footer />);
    // console.log(footer.debug())
    expect(footer.find('a').length).toEqual(4);
    expect(footer.find('img').length).toEqual(1);
    expect(footer.find('div').length).toEqual(2);
    expect(footer.find('.github-wrapper').length).toEqual(1);
    expect(footer.find('.footer-icon').length).toEqual(1);
  });
});
