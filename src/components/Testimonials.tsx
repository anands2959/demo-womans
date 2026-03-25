import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    text: "The quality of the silk camisole is beyond my expectations. It feels incredibly luxurious and the fit is perfect. Definitely my new favorite brand!",
    author: "Sophia Laurent",
    role: "Fashion Blogger"
  },
  {
    text: "Exceptional service and timeless designs. The blazer I ordered is a staple in my work wardrobe now. Highly recommend for chic professional wear.",
    author: "Elena Rossi",
    role: "Creative Director"
  },
  {
    text: "I love the neutral palette and the focus on high-quality materials. Every piece feels thoughtful and elegant. Looking forward to the new collection!",
    author: "Isabella Moretti",
    role: "Regular Customer"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials container">
      <div className="section-header centered">
        <h2 className="section-title">What Our Clients Say</h2>
      </div>
      
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card reveal">
            <div className="quote-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20H15V25H10V20ZM25 20H30V25H25V20Z" fill="var(--primary)" fillOpacity="0.1"/>
                <path d="M12 18C13.1 18 14 17.1 14 16C14 14.9 13.1 14 12 14C10.9 14 10 14.9 10 16C10 17.1 10.9 18 12 18ZM28 18C29.1 18 30 17.1 30 16C30 14.9 29.1 14 28 14C26.9 14 26 14.9 26 16C26 17.1 26.9 18 28 18Z" fill="var(--primary)"/>
              </svg>
            </div>
            <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
            <div className="testimonial-author">
              <div className="author-name">{t.author}</div>
              <div className="author-role">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
