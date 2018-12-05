import React from 'react';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('renders menu from menu-data.json', () => {
    expect(app.find('.menu').exists()).toBe(true);
  });

})