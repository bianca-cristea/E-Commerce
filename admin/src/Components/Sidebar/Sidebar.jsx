import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import add_icon from '../../assets/add_icon.jpg';
import product_list from '../../assets/product_list.jpg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={'/addproduct'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={add_icon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={'/listproduct'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={product_list} alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
