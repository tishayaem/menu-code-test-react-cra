import React from 'react'
function SelectDish(props) {
    return (
      <div className="menu">
        <form >
          {Object.keys(props.menu).map(course => {
            return (
              <fieldset key={course}>
                <legend>{course.toUpperCase()}</legend>
                {props.menu[course].map(dish => {
                  return (
                    <div>
                      <label htmlFor="menu" key={dish.id}>
                        <input
                          className={dish.name}
                          key={dish.id}
                          name={course}
                          value={dish.name}
                          type="radio"
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
          <button>Submit</button>
        </form>
      </div>
    );
  }

  export default SelectDish;