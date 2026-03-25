import React from 'react';
import Link from 'next/link';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero full-screen fade-in">
      <div className="hero-bg-overlay"></div>
      <div className="hero-layout">
        <div className="hero-content-center">
          <h1 className="hero-title-main">
            Elevate<br />Your Style
          </h1>
          <p className="hero-subtitle-main">Experience the new season's finest selections, designed for the modern woman who values elegance and comfort.</p>
          <div className="hero-actions-main">
            <Link href="/shop" className="btn btn-primary">Shop Collection</Link>
            <Link href="/shop" className="btn btn-secondary">New Arrivals</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
