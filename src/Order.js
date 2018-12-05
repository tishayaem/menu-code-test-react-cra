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

  return <div className="current-order">{formatPrice(total)} </div>;
}


