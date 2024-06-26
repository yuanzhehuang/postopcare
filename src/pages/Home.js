// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => (
  <div>
    <div className="hero">
      <div className="hero-content">
        <h1>We enable easy access of physician provided instructions for patients.</h1>
        <p>Private instructions are available, accessed by patients through a QR link with optional password protection.</p>
      </div>
    </div>
    <div className="container features">
      <h2>Our Services</h2>
      <p>Highlight key services or features of your platform.</p>
    </div>
    <div className="container testimonials">
      <h2>Testimonials</h2>
      <p>Quotes from satisfied users or patients.</p>
    </div>
    <div className="container contact-info">
      <h2>Contact Information</h2>
      <p>Email: info@postopcare.com</p>
      <p>Phone: +1 234 567 890</p>
    </div>
  </div>
);

export default Home;
