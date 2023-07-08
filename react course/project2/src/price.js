import React from 'react';
import { product } from './product';

function Price() {
const price = props.price;
  return (
    <p>{price}</p>
  );
}

export default Price;