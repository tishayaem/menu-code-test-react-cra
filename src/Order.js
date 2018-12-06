import React from 'react';
import { formatPrice } from './helpers';
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
    <div className="order">
      <div className="current-order">{formatPrice(total)} </div>
      <div className="final-order">{formatPrice(totalForTwo)} </div>
    </div>
  );
}
