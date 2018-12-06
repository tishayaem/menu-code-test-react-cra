import React from 'react';
import data from './menu-data.json';
import SelectDish from './SelectDish';
import Order from './Order';
import ErrorMessage from './ErrorMessage';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: {},
      user: 1,
      currentOrder: {},
      order: {},
      error: false
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

  restaurantRules() {
    let { currentOrder, error } = this.state;

    const areTwoOrMoreOrdered = Object.keys(currentOrder).length < 2;
    const isMainOrdered = !currentOrder.mains;

    if (areTwoOrMoreOrdered) {
      error = 'Please order at least two dishes';
    } else if (isMainOrdered) {
      error = 'Please order main dish';
    } else if (currentOrder.starters && currentOrder.mains) {
      const doesPierreAccept =
        currentOrder.starters.name === 'Prawn cocktail' &&
        currentOrder.mains.name === 'Salmon fillet';

      if (doesPierreAccept) {
        error = "We are sorry but you can't have Salmon with prawn!";
      }
    }
    return error;
  }

  handleSubmit = event => {
    event.preventDefault();

    let currentOrder = this.state.currentOrder;
    let error = this.restaurantRules();
    let user = this.state.user;
    let order = this.state.order;
    if (error) {
      currentOrder = {};
      order = {};
    } else {
      order[user] = currentOrder;
      user += 1;
    }

    this.setState({ order, currentOrder: {}, error, user });
  };

  render() {
    return (
      <div className="App">
        <SelectDish
          menu={this.state.menu}
          handleRadio={this.handleRadio}
          handleSubmit={this.handleSubmit}
        />
        <Order
          currentOrder={this.state.currentOrder}
          order={this.state.order}
        />
        {this.state.error && (
          <div>
            <ErrorMessage error={this.state.error} />
          </div>
        )}
      </div>
    );
  }
}
