import React from 'react';
import { formatPrice } from '../../helpers';
export default function Order(props) {
  let total;
  if (Object.keys(props.currentOrder).length !== 0) {
    total = Object.values(props.currentOrder).reduce((total, value) => {
      return total + value.price;
    }, 0);
  } else {
    total = 0;
  }

  let totalForTwo = Object.values(props.order).reduce(
    (total, value) =>
      total +
      Object.values(value).reduce((total, value) => {
        return total + value.price;
      }, 0),
    0
  );

  return (
    <React.Fragment>
      <div>
      {props.user < 3 ? <div className="current-order"><h3>Order for Guest {props.user}</h3><label>{formatPrice(total)}</label> </div> : null}
      
      
      </div>
      <div className="final-order">
      <h3>Total amount</h3>
      <label>{formatPrice(totalForTwo)}</label>
      </div>
    </React.Fragment>
  );
}

