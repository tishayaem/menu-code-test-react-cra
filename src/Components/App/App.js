import React from 'react';
import data from '../../menu-data.json';
import SelectDish from '../SelectDish/SelectDish';
import Order from '../Order/Order';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './App.css';
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

  // Switch to uncontrolled buttons state
  changeRadio = () => {
    this.setState({ areRadioChecked: null });
  };

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
    let { currentOrder, error, user, order } = this.state;

    let areTwoOrMoreOrdered = Object.keys(currentOrder).length < 2;
    let isMainOrdered = !currentOrder.mains;
   if(user === 2 && order[1].desserts && currentOrder.desserts) {
      let isCheesecakeavailable =  (order[1].desserts.name === 'Cheesecake' && currentOrder.desserts.name === 'Cheesecake')
        if (isCheesecakeavailable) {
          error = 'We are sorry, but cheesecakes are out of stock'
        }
    }

    else if (areTwoOrMoreOrdered) {
      error = 'Please order at least two dishes';
    } else if (isMainOrdered) {
      error = 'Please order main dish';
    } else if (currentOrder.starters && currentOrder.mains) {
      const doesPierreApprove =
        currentOrder.starters.name === 'Prawn cocktail' &&
        currentOrder.mains.name === 'Salmon fillet';

      if (doesPierreApprove) {
        error = "We are sorry, but you can't have Salmon fillet with prawn cocktail!";
      }
    }

    return error;
  }

  handleSubmit = event => {
    event.preventDefault();
    let { currentOrder, order, user } = this.state;
    let error = this.restaurantRules();
    if (error) {
      currentOrder = {};
    } else {
      order[user] = currentOrder;
      user += 1;
    }

    this.setState({
      order,
      currentOrder: {},
      error,
      user,
      areRadioChecked: false
    });
    // Temporary workaround to uncheck radio buttons on form submit. 
    // Must be replaced with better solution to take full control of radio buttons' state.
    if (user < 3) {setTimeout(() => { this.changeRadio()},0,1)}};

  render() {
    let {
      menu,
      areRadioChecked,
      user,
      order,
      currentOrder,
      error
    } = this.state;
    return (
      <div className="App">
      <div className="interface">
        <SelectDish
          menu={menu}
          handleRadio={this.handleRadio}
          handleSubmit={this.handleSubmit}
          areRadioChecked={areRadioChecked}
          user={user}
        />
        <Order currentOrder={currentOrder} order={order} user={user}/>
        <br/>
        </div>
        {error && (
         
          <div className= "error-message">
            <ErrorMessage error={error} />
          </div>
        )}
      </div>
    );
  }
}
