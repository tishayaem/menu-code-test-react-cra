import React from 'react';
import '../App/App.css';
export default function SelectDish(props) {
  return (
    <div className="menu">
      <form onSubmit={props.handleSubmit}>
        {Object.keys(props.menu).map(course => {
          return (
            <fieldset key={course}>
              <legend>{course.toUpperCase()}</legend>
              {props.menu[course].map(dish => {
                return (
                  <div key={dish.id}>
                    <label htmlFor={dish.id} key={dish.id}>
                      <input
                        className={dish.name}
                        key={dish.id}
                        name={course}
                        value={dish.name}
                        type="radio"
                        checked={props.areRadioChecked}
                        onChange={props.handleRadio}
                      />
                      {dish.name}
                    </label>
                  </div>
                );
              })}
            </fieldset>
          );
        })}
        {props.user < 3 ? <button>Order</button> : null}
      </form>
    </div>
  );
}
