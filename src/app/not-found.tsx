import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './not-found.css';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <Navbar />
      <div className="container not-found-content">
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-message">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="demo-notice">
          <p>Note: This website is a <strong>Preview Demo</strong>.</p>
          <p>If you're looking for a premium e-commerce website like this for your brand, please reach out:</p>
          <a href="mailto:anands2959@gmail.com" className="contact-link">anands2959@gmail.com</a>
        </div>

        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
      <Footer />
    </main>
  );
}
