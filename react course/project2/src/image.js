import React from 'react';
import { product } from './product';

function Image(image_url,name) {
  return (
    <img src={image_url} alt={name} />
  );
}

export default Image;