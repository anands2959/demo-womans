'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Hero.css';

const slides = [
  {
    id: 1,
    image: '/assets/hero.png',
    title: 'Elevate\nYour Style',
    subtitle: 'Experience the new season\'s finest selections, designed for the modern woman who values elegance and comfort.',
    cta: 'Shop Collection'
  },
  {
    id: 2,
    image: '/assets/hero_bg.png',
    title: 'Modern\nElegance',
    subtitle: 'Discover our curated selection of timeless pieces that define sophistication and effortless grace.',
    cta: 'Discover More'
  },
  {
    id: 3,
    image: '/assets/hero_3.png',
    title: 'Urban\nSophisticate',
    subtitle: 'Premium fabrics meet contemporary silhouettes. Redefine your wardrobe with our latest capsule collection.',
    cta: 'View Trends'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(-1);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevSlide(currentSlide);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  // Clean up prevSlide class after transition
  useEffect(() => {
    if (prevSlide !== -1) {
      const cleanup = setTimeout(() => {
        setPrevSlide(-1);
      }, 1600);
      return () => clearTimeout(cleanup);
    }
  }, [prevSlide]);

  const handleManualChange = (index: number) => {
    if (index === currentSlide) return;
    setPrevSlide(currentSlide);
    setCurrentSlide(index);
  };

  return (
    <section className="hero full-screen">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        const isPrev = index === prevSlide;
        
        return (
          <div 
            key={slide.id} 
            className={`hero-slide ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''}`}
          >
            <div 
              className="hero-slide-bg" 
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            <div className="hero-bg-overlay"></div>
            <div className="hero-layout">
              <div className="hero-content-left">
                <h1 className="hero-title-main">
                  {slide.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}<br />
                    </React.Fragment>
                  ))}
                </h1>
                <p className="hero-subtitle-main">{slide.subtitle}</p>
                <div className="hero-actions-main">
                  <Link href="/shop" className="btn btn-primary">{slide.cta}</Link>
                  <Link href="/shop" className="btn btn-secondary">New Arrivals</Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button 
            key={index} 
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleManualChange(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
