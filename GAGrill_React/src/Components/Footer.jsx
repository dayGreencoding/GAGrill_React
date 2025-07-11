import React from 'react';
import './Footer.css';
import { FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section address">
        <h2>GAI Grill</h2>
        <p>5th Avenue NewYork</p>
        <p>hello@gaigrill.nyc</p>
        <p>Media Inquiries: press@gaigrill.nyc</p>
      </div>

      <div className="footer-section hours">
        <h3>HOURS</h3>
        <p><strong>Dinner</strong></p>
        <p>Monday – Saturday</p>
        <p>5pm – 10pm</p>
      </div>

      <div className="footer-section reservations">
        <p>Our reservations go live 15 days in advance at 9AM (EST)</p>
        <p>For large group reservations, please visit our private events page.</p>
        <a
          href="https://resy.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="resy-button"
        >
          <span>Book Now</span>
          <div className="resy-logo">RESY</div>
        </a>
      </div>
       <div className="footer-section social-media">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        </div>
    </footer>
  );
}

export default Footer;

