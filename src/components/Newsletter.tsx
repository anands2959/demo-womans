import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter container">
      <div className="newsletter-box">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Join the Elite</h2>
          <p className="newsletter-subtitle">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
