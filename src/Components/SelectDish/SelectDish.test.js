import React from 'react';
import SelectDish from './SelectDish';
import data from '../../menu-data.json';

describe('SelectDish', () => {
    const wrapper = shallow(<SelectDish menu={data} />);
  
    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it('renders menu from menu-data.json', () => {
      console.log(wrapper.find('.interface'))
      expect(wrapper.find('.Tiramisu').exists()).toBe(true);
    });
  
  
  })