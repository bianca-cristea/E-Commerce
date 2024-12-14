import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import dropdown_icon from '../../assets/dropdown_icon.jpg';
import profile_picture from '../../assets/profile_photo.jpg';

const Navbar = () => {
  return (
    <div className="navbar">
      <img id="logo" src={logo} alt="" className="nav-logo" />
      <div>
        <img id="profile-picture" src={profile_picture} alt="" />
        <img id="dropdown" src={dropdown_icon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
