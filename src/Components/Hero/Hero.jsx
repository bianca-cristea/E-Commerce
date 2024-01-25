import React from 'react';
import './Hero.css';
import hand from '../Assets/hand.jpg';
import latestCollection from '../Assets/latestCollection.jpg';
import arrow from '../Assets/arrow.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <p>new collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <p>Latest collection</p>
        </div>
        <img id="arrow" src={arrow} alt="arrow" />
      </div>
      <div className="hero-right">
        <img src={latestCollection} alt="latestCollection" />
      </div>
    </div>
  );
};

export default Hero;
