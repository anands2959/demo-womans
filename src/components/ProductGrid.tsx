import React from 'react';
import Link from 'next/link';
import './ProductGrid.css';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const newArrivals = products.slice(0, 8);

const ProductGrid = () => {
  return (
    <section className="product-section container">
      <div className="section-header">
        <h2 className="section-title">New Arrivals</h2>
        <div className="filter-tabs">
          <span className="active">All</span>
          <span>Tops</span>
          <span>Dresses</span>
          <span>Outerwear</span>
        </div>
      </div>
      
      <div className="product-grid">
        {newArrivals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="view-all-container">
        <Link href="/shop" className="btn btn-secondary">
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default ProductGrid;
