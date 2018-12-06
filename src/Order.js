import React from 'react';
import { formatPrice } from './helpers';
export default function Order(props) {
  let total;
  if (Object.keys(props.currentOrder).length !== 0) {
    total = Object.values(this.props.currentOrder).reduce((total, value) => {
      return total + value.price;
    }, 0);
  } else {
    total = 0;
  }

  return (
    <div className="order">
      <div className="current-order">{formatPrice(total)} </div>
      <div className="final-order">{formatPrice(props.order)} </div>
    </div>
  );
}
