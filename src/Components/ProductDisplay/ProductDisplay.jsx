import React from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.jpg';
import star_dull_icon from '../Assets/star_dull_icon.jpg';

const ProductDisplay = (props) => {
  const { product } = props;

  return (
    <div className="productdisplay">
      <div className="productdiplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>({Math.floor(Math.random() * 250) + 90})</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
