'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useWishlist } from '@/context/WishlistContext';
import '@/components/ProductGrid.css';

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [wishlist]); // Re-run when wishlist changes

  return (
    <main>
      <Navbar />
      
      <section className="wishlist-section container" style={{ paddingTop: '100px', paddingBottom: '80px', minHeight: '70vh' }}>
        <header className="section-header" style={{ marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>My Wishlist</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: '1.6' }}>
            {wishlist.length === 0 
              ? "Your wishlist is currently empty. Explore our collection and save your favorite pieces here." 
              : `You have ${wishlist.length} item${wishlist.length > 1 ? 's' : ''} saved to your wishlist.`
            }
          </p>
        </header>

        {wishlist.length === 0 ? (
          <div className="empty-wishlist" style={{ textAlign: 'center', padding: '6rem 0', background: 'var(--bg-accent)', borderRadius: 'var(--radius-md)' }}>
            <div className="empty-icon" style={{ fontSize: '4rem', marginBottom: '2rem', opacity: 0.2, color: 'var(--primary)' }}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>No favorites yet.</h2>
            <Link href="/" className="btn btn-primary">Discover Trends</Link>
          </div>
        ) : (
          <div className="product-grid">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
