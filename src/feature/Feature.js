import React from 'react';
import { arrayOf, shape } from 'prop-types';

const propTypes = {
  items: arrayOf(shape({
    // item schema
  })).isRequired,
};

const Feature = ({ items }) => (
  <div className="feature">
    {items.map(item => (
      <div>{item.name}</div>
    ))}
  </div>
);

Feature.propTypes = propTypes;

export default Feature;
