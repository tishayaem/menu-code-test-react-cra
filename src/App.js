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
      error: false,
      areRadioChecked: null
    };
  }

  componentDidMount() {
    this.setState({ menu: data });
  }
  changeRadio = () => {
    this.setState({ areRadioChecked: null });
  }

  handleRadio = event => {
    let course = event.target.name;
    let meal = this.state.menu[course].find(
      meal => meal.name === event.target.value
    );
    let currentOrder = this.state.currentOrder;
    currentOrder[course] = meal;

    this.setState({ currentOrder, error: false });
  };

  restaurantRules() {
    let { currentOrder, error} = this.state;

    const areTwoOrMoreOrdered = Object.keys(currentOrder).length < 2;
    const isMainOrdered = !currentOrder.mains;

    if (areTwoOrMoreOrdered) {
      error = 'Please order at least two dishes';
    } else if (isMainOrdered) {
      error = 'Please order main dish';
    } else if (currentOrder.starters && currentOrder.mains) {
      const doesPierreApprove =
        currentOrder.starters.name === 'Prawn cocktail' &&
        currentOrder.mains.name === 'Salmon fillet';

      if (doesPierreApprove) {
        error = "We are sorry but you can't have Salmon with prawn!";
      }
    }

    return error;
  }

  handleSubmit = event => {
    event.preventDefault();
    let {currentOrder, order, user} = this.state;
    let error = this.restaurantRules();
    if (error) {
      currentOrder = {};
    } else {
      order[user] = currentOrder;
      user += 1;
    }

    this.setState({ order, currentOrder: {}, error, user, areRadioChecked: false });

    setTimeout(
      () => {this.changeRadio()},0,1);
    
  };

  render() {
    let {menu, areRadioChecked, user, order, currentOrder, error} = this.state
    return (
      <div className="App">
        <SelectDish
          menu={menu}
          handleRadio={this.handleRadio}
          handleSubmit={this.handleSubmit}
          areRadioChecked={areRadioChecked}
          user={user}
        />
        <Order
          currentOrder={currentOrder}
          order={order}
        />
        {error && (
          <div>
            <ErrorMessage error={error} />
          </div>
        )}
      </div>
    );
  }
}
