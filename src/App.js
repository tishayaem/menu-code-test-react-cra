import React from 'react';
import data from './menu-data.json';
import SelectDish from './SelectDish';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: {},
      currentOrder: {}
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

  render() {
    return (
      <div className="App">
        <SelectDish menu={this.state.menu} handleRadio={this.handleRadio} />
      </div>
    );
  }
}
