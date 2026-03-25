import React from 'react';
import Link from 'next/link';
import './CategoryGrid.css';

const categories = [
  { id: 1, name: 'Casual Wear', image: '/assets/cat_casual.png', slug: 'tops' },
  { id: 2, name: 'Elegant Dress', image: '/assets/cat_elegant.png', slug: 'dresses' },
  { id: 3, name: 'Workwear', image: '/assets/cat_workwear.png', slug: 'bottoms' },
  { id: 4, name: 'Seasonal Trends', image: '/assets/cat_seasonal.png', slug: 'outerwear' },
];

const CategoryGrid = () => {
  return (
    <section className="categories container fade-in">
      <h2 className="section-title">Shop by Category</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <Link href={`/shop?category=${cat.slug}`} key={cat.id} className="category-card">
            <div className="img-wrapper category-img">
              <img src={cat.image} alt={cat.name} />
            </div>
            <div className="category-label">
              <span>{cat.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
