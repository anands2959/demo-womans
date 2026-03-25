import React from 'react';
import Link from 'next/link';
import './TrendList.css';

const trends = [
  { id: 7, name: 'Chic Beige Blouse', image: '/assets/trend_blouse.png' },
  { id: 6, name: 'Classic Trench Coat', image: '/assets/prod_trench.png' },
  { id: 4, name: 'Soft Knitted Cardigan', image: '/assets/prod_cardigan.png' },
];

const TrendList = () => {
  return (
    <section className="trends container fade-in">
      <h2 className="section-title">Customer Trends</h2>
      <div className="trends-grid">
        <div className="trends-main-image">
          <div className="img-wrapper trends-large-img">
            <img src="/assets/trend_main.png" alt="Featured trend" />
          </div>
        </div>
        <div className="trends-items">
          {trends.map((item, index) => (
            <Link href={`/product/${item.id}`} key={index} className="trend-item">
              <div className="img-wrapper trend-thumb">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="trend-info">
                <h3 className="trend-name">{item.name}</h3>
                <span className="trend-tag">Shop Now</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendList;
