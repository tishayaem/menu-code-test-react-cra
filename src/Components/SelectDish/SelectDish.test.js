import React from 'react';
import SelectDish from './SelectDish';

describe('App', () => {
    const wrapper = shallow(<SelectDish />);
  
    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it('renders menu from menu-data.json', () => {
      expect(wrapper.find('.menu').exists()).toBe(true);
    });
  
  
  })