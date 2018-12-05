import React from 'react';
import data from './menu-data.json';
import SelectDish from './SelectDish';
import Order from './Order';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: {},
      currentOrder: {},
      order: {}
    };
  }

  componentDidMount() {
    this.setState({ menu: data });
  }
  handleRadio = event => {
    let course = event.target.name;
    let meal = this.state.menu[course].find(
      meal => meal.name === event.target.value
    );
    let currentOrder = this.state.currentOrder;
    currentOrder[course] = meal;

    this.setState({ currentOrder });
  };

  handleSubmit = event => {
    event.preventDefault();

    let order = this.state.currentOrder;
    this.setState({ order, currentOrder: {} });
  };

  render() {
    return (
      <div className="App">
        <SelectDish
          menu={this.state.menu}
          handleRadio={this.handleRadio}
          handleSubmit={this.handleSubmit}
        />
        <Order currentOrder={this.state.currentOrder} />
      </div>
    );
  }
}
