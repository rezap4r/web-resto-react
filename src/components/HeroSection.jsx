import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>EAT VORACIOUSLY</h1>
      <p>Ready to satisfy your hunger?</p>
      <div className="hero-btn">
        <button className="btn">RESERVE A TABLE</button>
      </div>
      <p></p>
    </div>
  );
}

export default HeroSection;
