import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer fade-in">
      <div className="container footer-inner">
        <div className="footer-logo">Women&apos;s</div>
        <div className="footer-links">
          <div className="footer-col">
            <h3>Shop</h3>
            <a href="#">New Arrivals</a>
            <a href="#">Best Sellers</a>
            <a href="#">Collections</a>
          </div>
          <div className="footer-col">
            <h3>Support</h3>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-col">
            <h3>Social</h3>
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">Facebook</a>
          </div>
          <div className="footer-col">
            <h3>Legal</h3>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 Women&apos;s. Designed with passion.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
