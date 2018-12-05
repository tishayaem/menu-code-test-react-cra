import React from 'react';
import data from './menu-data.json';
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

  }

  renderMenu() {
    return (
      <div className="menu">
        <form >
          {Object.keys(this.state.menu).map(course => {
            return (
              <fieldset key={course}>
                <legend>{course.toUpperCase()}</legend>
                {this.state.menu[course].map(dish => {
                  return (
                    <div>
                      <label htmlFor="menu" key={dish.id}>
                        <input
                          className={dish.name}
                          key={dish.id}
                          name={course}
                          value={dish.name}
                          type="radio"
                          onChange={this.handleRadio}
                        />
                        {dish.name}
                      </label>
                    </div>
                  );
                })}
              </fieldset>
            );
          })}
          <button>Submit</button>
        </form>
      </div>
    );
  }


  render() {
    return <div className="App">
    {this.renderMenu()}
    </div>
  }
}

