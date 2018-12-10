import React from 'react';
import App from './App';
import data from '../../menu-data.json';

describe('App', () => {
  const app = shallow(<App />);

  // it('renders properly', () => {
  //   expect(app).toMatchSnapshot();
  // });

  it('renders menu from menu-data.json', () => {
    expect(app.find('.interface').exists()).toBe(true);
  });

  it('renders correct amount of dishes', () => {
    let dishes =10
    console.log(app.find(".interface"))
    expect(app.find(".interface").length).toEqual(dishes)
  })

//   it('contains a connected Order component', () => {
//     expect(app.find('Order').exists()).toBe(true)
// })

})