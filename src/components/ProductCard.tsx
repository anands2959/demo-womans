import React from 'react';
import Link from 'next/link';
import './ProductCard.css';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const HeartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.82-8.82 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="product-card reveal">
      <Link href={`/product/${product.id}`} className="product-img">
        <img src={product.image} alt={product.name} />
        <button 
          className="btn-wishlist" 
          aria-label="Add to Wishlist" 
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
        >
          <HeartIcon />
        </button>
        <div className="product-overlay">
          <button 
            className="btn-add-to-cart" 
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
          >
            Add to Cart
          </button>
        </div>
        {product.id % 3 === 0 && <span className="product-tag">New Item</span>}
      </Link>
      
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <Link href={`/product/${product.id}`}>
          <h3 className="product-name">{product.name}</h3>
        </Link>
        <div className="product-price">${product.price}.00</div>
      </div>
    </div>
  );
};

export default ProductCard;
