import React from 'react';
import Link from 'next/link';
import './PromoBanner.css';

const PromoBanner = () => {
  return (
    <section className="promo-banner container fade-in">
      <div className="promo-inner">
        <div className="promo-image-container">
          <img src="/assets/hero.png" alt="Spring Collection" />
        </div>
        <div className="promo-content">
          <h2 className="promo-title">Spring Collection <br /> — 30% OFF</h2>
          <Link href="/shop" className="btn btn-primary promo-btn">Shop Now</Link>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
