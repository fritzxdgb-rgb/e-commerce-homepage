import React, { useState } from 'react';
import ProductCard from '../../../../components/ui/card';

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState('All');
  
  const tabs = ['All', 'New Arrivals', 'Best Seller', 'Top Rated'];
  
  const products = [
    { id: 1, name: 'Cotton Hoodie', category: 'Dresses', price: 15, oldPrice: 20, rating: 5, reviews: 32, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop' },
    { id: 2, name: 'T-Shirts', category: 'Dresses', price: 17, oldPrice: null, rating: 4, reviews: 24, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop' },
    { id: 3, name: 'Jacket', category: 'Dresses', price: 16, oldPrice: 18, rating: 5, reviews: 12, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&auto=format&fit=crop' },
    { id: 4, name: 'Jersey T-Shirts', category: 'Dresses', price: 10, oldPrice: null, rating: 4, reviews: 8, image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=600&auto=format&fit=crop' },
    { id: 5, name: 'Cotton Shirts', category: 'Dresses', price: 13, oldPrice: null, rating: 5, reviews: 15, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop' },
    { id: 6, name: 'Red Dress', category: 'Dresses', price: 11, oldPrice: null, rating: 4, reviews: 42, image: 'https://images.unsplash.com/photo-1518881949163-95963783649d?q=80&w=600&auto=format&fit=crop' },
    { id: 7, name: 'Formals', category: 'Dresses', price: 22, oldPrice: null, rating: 5, reviews: 19, image: 'https://images.unsplash.com/photo-1594932224440-74693226f5a6?q=80&w=600&auto=format&fit=crop' },
    { id: 8, name: 'Sherwani', category: 'Dresses', price: 25, oldPrice: null, rating: 4, reviews: 7, image: 'https://images.unsplash.com/photo-1597983073492-bc2405842786?q=80&w=600&auto=format&fit=crop' },
  ];

  return (
    <section className="product-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">TRENDING NOW</span>
          <h2 className="section-title">Our Trendy Products</h2>
          <div className="tab-filters">
            {tabs.map(tab => (
              <button 
                key={tab} 
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="load-more-container">
          <button className="load-more-btn">
            Load More Products
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </button>
        </div>
      </div>
      <style jsx>{`
        .product-section {
          padding: var(--section-padding) 0;
          background: var(--white);
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-subtitle {
          display: block;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3.5px;
          color: var(--accent);
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 40px;
          color: var(--near-black);
        }

        .tab-filters {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .tab-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 2px;
          padding: 10px 28px;
          border-radius: 50px;
          background: var(--bg-gray);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .tab-btn.active {
          color: var(--white);
          background: var(--near-black);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .tab-btn:hover:not(.active) {
          background: #eeeeee;
          color: var(--near-black);
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-bottom: 70px;
        }

        .load-more-container {
          text-align: center;
        }

        .load-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 35px;
          background: transparent;
          border: 1.5px solid var(--near-black);
          color: var(--near-black);
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 11px;
          transition: all 0.3s;
          cursor: pointer;
          border-radius: 2px;
        }

        .load-more-btn:hover {
          background: var(--near-black);
          color: var(--white);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .load-more-btn svg {
          transition: transform 0.3s;
        }

        .load-more-btn:hover svg {
          transform: translateY(3px);
        }

        @media (max-width: 1200px) {
          .product-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .section-title {
            font-size: 32px;
          }
        }

        @media (max-width: 480px) {
          .product-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
