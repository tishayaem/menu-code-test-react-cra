import React from 'react';
import App from './App';
import data from '../../menu-data.json';

describe('App', () => {
  const app = mount(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('renders menu from menu-data.json', () => {
    expect(app.find('.interface').exists()).toBe(true);
  });
});
