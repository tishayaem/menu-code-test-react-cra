import React from 'react';
import data from './menu-data.json';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: {},
    };
  }

  componentDidMount() {
    this.setState({ menu: data });
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
                          key={dish.id}
                          name={course}
                          value={dish.name}
                          type="radio"
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

