import React, { useState, memo } from 'react';
import styles from '../styles/HomeProductSection.module.css';

const HomeProductCard = memo(({ image, category, name, price, oldPrice, rating, reviews }) => (
  <div className={styles.productCard}>
    <div className={styles.imageContainer}>
      <img src={image} alt={name} className={styles.productImage} loading="lazy" />
      <button type="button" className={styles.wishlistBtn} aria-label="Add to Wishlist">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>
    </div>
    <div className={styles.info}>
      <span className={styles.category}>{category}</span>
      <h3 className={styles.productName}>{name}</h3>
      <div className={styles.rating} aria-label={`Rated ${rating} out of 5`}>
        <span className={styles.stars} aria-hidden="true">{'★'.repeat(rating)}</span>
        <span className={styles.reviews}>{reviews} reviews</span>
      </div>
      <div className={styles.price}>
        <span>${price}</span>
        {oldPrice && <span className={styles.oldPrice}>${oldPrice}</span>}
      </div>
    </div>
  </div>
));

HomeProductCard.displayName = 'HomeProductCard';

const HomeProductSection = memo(() => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'New Arrivals', 'Best Seller', 'Top Rated'];
  const tabId = (tab) => `tab-${tab.toLowerCase().replace(/\s+/g, '-')}`;
  
  const products = [
    { id: 1, name: 'VOX Ultra 15', category: 'Flagship', price: 1199, oldPrice: 1299, rating: 5, reviews: 128, tags: ['New Arrivals', 'Top Rated'], image: 'https://www.apple.com/v/iphone/home/ci/images/overview/select/iphone_17pro__0s6piftg70ym_large_2x.jpg' },
    { id: 2, name: 'VOX Pro Max', category: 'Pro', price: 999, oldPrice: null, rating: 4, reviews: 96, tags: ['Best Seller'], image: 'https://www.apple.com/ph/iphone/home/images/overview/select/iphone_17__ck7zzemcw37m_large_2x.jpg' },
    { id: 3, name: 'VOX Air S', category: 'Slim', price: 799, oldPrice: 849, rating: 4, reviews: 78, tags: ['New Arrivals'], image: 'https://images.samsung.com/is/image/samsung/p6pim/ph/f2507/gallery/ph-galaxy-z-fold7-f966-sm-f966bdbhphl-thumb-547549354?$Q90_330_330_F_PNG$' },
    { id: 4, name: 'VOX Play 5G', category: 'Gaming', price: 599, oldPrice: null, rating: 4, reviews: 64, tags: ['Best Seller'], image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop' },
    { id: 5, name: 'VOX Nano 4', category: 'Compact', price: 499, oldPrice: null, rating: 5, reviews: 102, tags: ['Top Rated'], image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airtag-1pack-select-202601?wid=890&hei=890&fmt=jpeg&qlt=90&.v=eVZIdm00RE01SWs3QURJMUxNRitlZVZqT1dKM09ua0FPbE1ISEVUN05sMkI1ZVdxRDZ3cXVTb1JEWG12a0VGNmdsbGZlRHV0Q3JlbHJxWXRlWjZpMnVxRWlIRHFWV25Bdkh2R3M3OEF2bkk' },
    { id: 6, name: 'VOX Vision 2', category: 'Photography', price: 899, oldPrice: null, rating: 5, reviews: 74, tags: ['New Arrivals', 'Top Rated'], image: 'https://www.apple.com/v/apple-vision-pro/j/images/overview/hero/hero__cvgr5aj1ttsi_large_2x.jpg' },
    { id: 7, name: 'VOX Buds Pro', category: 'Audio', price: 199, oldPrice: null, rating: 4, reviews: 39, tags: ['Best Seller'], image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop' },
    { id: 8, name: 'VOX Watch 3', category: 'Wearable', price: 299, oldPrice: null, rating: 5, reviews: 88, tags: ['Top Rated'], image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop' },
  ];

  const filteredProducts = activeTab === 'All' 
    ? products 
    : products.filter(p => p.tags.includes(activeTab));

  return (
    <section className={`${styles.section} container`}>
      <div className={styles.header}>
        <span className={styles.subtitle}>OUR TRENDY PRODUCTS</span>
        <h2 className={styles.title}>Trending Devices</h2>
        <div className={styles.tabs} role="tablist" aria-label="Product categories">
          {tabs.map(tab => (
            <button 
              key={tab} 
              id={tabId(tab)}
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
              type="button"
              onClick={() => setActiveTab(tab)}
              role="tab"
              aria-selected={activeTab === tab}
              aria-controls="product-grid"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      <div 
        className={styles.grid} 
        id="product-grid" 
        role="tabpanel" 
        aria-labelledby={tabId(activeTab)}
        aria-live="polite"
      >
        {filteredProducts.map(product => (
          <HomeProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className={styles.sectionFooter}>
        <a href="/shop" className="btn-primary">View All Products</a>
      </div>
    </section>
  );
});

HomeProductSection.displayName = 'HomeProductSection';
export default HomeProductSection;
