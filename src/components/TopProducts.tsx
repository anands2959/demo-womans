import React from 'react';
import Link from 'next/link';
import { products } from '../data/products';
import './TopProducts.css';

const TopProducts = () => {
  // Selecting 4 specific "Top" products
  const topProducts = [products[4], products[1], products[7], products[3]];

  return (
    <section className="top-products container fade-in">
      <div className="section-header">
        <h2 className="section-title">Editor&apos;s Picks</h2>
        <Link href="/shop" className="view-all-link">View Store</Link>
      </div>
      
      <div className="top-products-grid">
        {topProducts.map((product) => (
          <div key={product.id} className="top-product-card reveal">
            <Link href={`/product/${product.id}`} className="top-product-img">
              <img src={product.image} alt={product.name} />
              <div className="top-product-badge">Top Choice</div>
            </Link>
            <div className="top-product-info">
              <h3 className="top-product-name">{product.name}</h3>
              <p className="top-product-price">${product.price}.00</p>
              <Link href={`/product/${product.id}`} className="top-product-link">Explore Details</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopProducts;
