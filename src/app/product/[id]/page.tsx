'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import Link from 'next/link';
import './product.css';

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "var(--accent-main)" : "none"} stroke="var(--accent-main)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const reviews = [
  {
    id: 1,
    author: "Amelie J.",
    rating: 5,
    date: "March 12, 2026",
    comment: "Absolutely stunning piece! The fabric quality is exceptional and it fits perfectly. I've received so many compliments."
  },
  {
    id: 2,
    author: "Marcella R.",
    rating: 4,
    date: "February 28, 2026",
    comment: "Very elegant and the color is exactly as shown. It took a bit longer to arrive than expected, but it was worth the wait."
  }
];

export default function ProductDetailsPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Rosy');

  if (!product) {
    return (
      <main className="product-not-found">
        <Navbar />
        <div className="container">
          <h2>Product Not Found</h2>
          <Link href="/shop" className="btn btn-primary">Back to Shop</Link>
        </div>
        <Footer />
      </main>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="product-details-page">
      <Navbar />
      
      <div className="container product-details-container">
        <div className="product-gallery">
          <div className="main-image-wrapper">
            <img src={product.image} alt={product.name} className="main-image" />
          </div>
          <div className="thumbnail-grid">
            <div className="thumb active"><img src={product.image} alt="Thumbnail 1" /></div>
            <div className="thumb"><img src={product.image} alt="Thumbnail 2" /></div>
            <div className="thumb"><img src={product.image} alt="Thumbnail 3" /></div>
          </div>
        </div>

        <div className="product-info-panel">
          <nav className="breadcrumb">
            <Link href="/shop">Shop</Link> / <span>{product.category}</span>
          </nav>
          
          <h1 className="details-title">{product.name}</h1>
          <div className="details-rating">
            <div className="stars">
              <StarIcon filled={true} />
              <StarIcon filled={true} />
              <StarIcon filled={true} />
              <StarIcon filled={true} />
              <StarIcon filled={true} />
            </div>
            <span className="rating-count">(48 Reviews)</span>
          </div>
          <p className="details-price">${product.price}.00</p>
          
          <div className="details-description">
            <p>{product.description}</p>
          </div>

          <div className="selection-group">
            <h4 className="selection-label">Select Size</h4>
            <div className="size-options">
              {['S', 'M', 'L', 'XL'].map(size => (
                <button 
                  key={size} 
                  className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="selection-group">
            <h4 className="selection-label">Select Color</h4>
            <div className="color-options">
              {['Rosy', 'Beige', 'Charcoal'].map(color => (
                <button 
                  key={color} 
                  className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                  onClick={() => setSelectedColor(color)}
                >
                  <span className={`color-swatch ${color.toLowerCase()}`}></span>
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="details-actions">
            <button className="btn btn-primary btn-lg add-cart-btn">Add to Bag</button>
            <button className="btn-wishlist-large">
              <HeartIcon /> Wishlist
            </button>
          </div>

          <div className="product-extra-info">
            <div className="info-item">
              <strong>Free Shipping</strong> on orders over $150
            </div>
            <div className="info-item">
              <strong>Easy Returns</strong> within 30 days
            </div>
          </div>
        </div>
      </div>

      <section className="product-reviews-section container">
        <div className="reviews-header">
          <h2 className="section-title">Customer Reviews</h2>
          <button className="btn btn-secondary">Write a Review</button>
        </div>
        
        <div className="reviews-list">
          {reviews.map(review => (
            <div key={review.id} className="review-item">
              <div className="review-meta">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < review.rating} />
                  ))}
                </div>
                <span className="review-date">{review.date}</span>
              </div>
              <h4 className="review-author">{review.author}</h4>
              <p className="review-comment">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="related-products container">
          <h2 className="section-title">You May Also Like</h2>
          <div className="related-grid">
            {relatedProducts.map(rp => (
              <Link href={`/product/${rp.id}`} key={rp.id} className="related-card">
                <div className="img-wrapper rp-img">
                  <img src={rp.image} alt={rp.name} />
                </div>
                <div className="rp-info">
                  <h3 className="rp-name">{rp.name}</h3>
                  <p className="rp-price">${rp.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

const HeartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.82-8.82 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);
