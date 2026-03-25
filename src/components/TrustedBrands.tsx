import React from 'react';
import './TrustedBrands.css';

const brands = [
  { name: 'VOGUE', class: 'vogue' },
  { name: 'ELLE', class: 'elle' },
  { name: 'BAZAAR', class: 'bazaar' },
  { name: 'COSMOPOLITAN', class: 'cosmo' },
  { name: 'MARIE CLAIRE', class: 'marie' }
];

const TrustedBrands = () => {
  return (
    <section className="trusted-brands container">
      <div className="brands-title">As Seen In</div>
      <div className="brands-grid">
        {brands.map((brand, index) => (
          <div key={index} className={`brand-logo ${brand.class}`}>
            {brand.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBrands;
