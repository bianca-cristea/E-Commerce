import React from 'react';
import './Breadcrum.css';

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      <p>
        HOME > SHOP > {product.category} > {product.name}
      </p>
    </div>
  );
};

export default Breadcrum;
