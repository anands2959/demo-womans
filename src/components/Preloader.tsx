'use client';

import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Extra delay for transition to complete before unmounting
      setTimeout(() => setShouldRender(false), 1200);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  const brandName = "Women's";

  return (
    <div className={`preloader ${!loading ? 'preloader--hidden' : ''}`}>
      <div className="preloader-bg-glitch"></div>
      <div className="preloader-content">
        <div className="preloader-logo-container">
          {brandName.split('').map((char, index) => (
            <span 
              key={index} 
              className="preloader-char"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </div>
        
        <div className="preloader-line-container">
          <div className="preloader-line"></div>
        </div>
        
        <div className="preloader-footer">
          <span className="preloader-year">Est. 2026</span>
          <span className="preloader-collection">Spring Summer</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
