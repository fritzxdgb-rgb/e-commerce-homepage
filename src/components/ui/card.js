import React from "react";
import './card.css';

export default function ProductCard({ image, category, name, rating, reviews, price, oldPrice }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        {image ? (
          <img src={image} alt={name} className="product-image" />
        ) : (
          <div className="placeholder-img"></div>
        )}
        <div className="wishlist-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
      </div>
      <div className="product-info">
        <span className="product-category">{category}</span>
        <h3 className="product-name">{name}</h3>
        <div className="product-rating">
          <span className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < rating ? "star filled" : "star"}>★</span>
            ))}
          </span>
          <span className="review-count">({reviews} reviews)</span>
        </div>
        <div className="product-price">
          <span className="current-price">${price}</span>
          {oldPrice && <span className="old-price">${oldPrice}</span>}
        </div>
      </div>
    </div>
  );
}
