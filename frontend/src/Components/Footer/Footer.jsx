import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/footer_logo.png';
import instagram_icon from '../Assets/instagram_icon.jpg';
import pinterest_icon from '../Assets/pinterest_icon.jpg';
import whatsapp_icon from '../Assets/whatsapp_icon.jpg';

const currentDate = new Date();
var year = currentDate.getFullYear();

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footer logo" />
        <p>Bia's Elegance Shop</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icon-container">
          <img src={instagram_icon} alt="instagram" />
        </div>
        <div className="footer-icon-container">
          <img src={pinterest_icon} alt="pinterest" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="whatsapp" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @{year} - All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
