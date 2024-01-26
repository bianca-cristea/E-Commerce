import React from 'react';
import './Breadcrum.css';

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      <p>
        HOME &gt SHOP &gt {product.category} &gt {product.name}
      </p>
    </div>
  );
};

export default Breadcrum;
