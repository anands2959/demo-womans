import React from 'react';
import Link from 'next/link';
import './ProductCard.css';
import { useWishlist } from '@/context/WishlistContext';
import { Product } from '@/data/products';

const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`heart-icon-svg ${filled ? 'filled' : ''}`}>
    <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
);

const ProductCard = ({ product }: { product: Product }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isFavorite = isInWishlist(product.id);

  return (
    <div className="product-card reveal">
      <Link href={`/product/${product.id}`} className="product-img">
        <img src={product.image} alt={product.name} />
        <button 
          className={`btn-wishlist ${isFavorite ? 'active' : ''}`} 
          aria-label="Add to Wishlist" 
          onClick={(e) => { 
            e.preventDefault(); 
            e.stopPropagation(); 
            toggleWishlist(product);
          }}
        >
          <HeartIcon filled={isFavorite} />
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
