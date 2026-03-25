'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import './shop.css';

function Shop() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');

  useEffect(() => {
    if (categoryParam) {
      const formatted = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
      setActiveCategory(formatted);
    }
  }, [categoryParam]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => 
      activeCategory === 'All' || p.category === activeCategory
    ).sort((a, b) => {
      if (sortBy === 'Price: Low to High') return a.price - b.price;
      if (sortBy === 'Price: High to Low') return b.price - a.price;
      return 0;
    });
  }, [activeCategory, sortBy]);

  // Intersection Observer for reveal animation
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
  }, [filteredProducts]);

  return (
    <section className="shop-main container">
      <aside className="shop-sidebar">
        <div className="filter-group">
          <h3 className="filter-label">Categories</h3>
          <ul className="filter-list">
            {['All', 'Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Knitwear'].map(cat => (
              <li 
                key={cat} 
                className={activeCategory === cat ? 'active' : ''}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <div className="filter-group">
          <h3 className="filter-label">Sort By</h3>
          <select 
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </aside>

      <div className="shop-content">
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <p>No products found in this category.</p>
            <button className="btn btn-secondary" onClick={() => setActiveCategory('All')}>Clear Filters</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default function ShopPage() {
  return (
    <main className="shop-page">
      <Navbar />
      <Suspense fallback={<div className="container" style={{padding: '10rem 0', textAlign: 'center'}}>Loading products...</div>}>
        <Shop />
      </Suspense>
      <Footer />
    </main>
  );
}
