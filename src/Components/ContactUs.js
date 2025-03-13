import React from 'react';
import './css/contact.css';

const ContactUs = () => {
  return (
    <div className="contact-section">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>contact@aventus.com</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p>+91 1234567890</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>Your College Name, City, State</p>
          </div>
        </div>
        <div className="social-links">
          <a href="#" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-discord"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs; 