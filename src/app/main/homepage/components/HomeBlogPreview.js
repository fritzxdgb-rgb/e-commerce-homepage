import React, { memo } from 'react';
import styles from '../styles/HomeBlogPreview.module.css';

const HomeBlogPreview = memo(() => {
  const highlights = [
    {
      id: 1,
      title: "Free Shipping",
      description: "Fast, insured delivery on every order over $50.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <path d="M16 8h4l3 4v4h-7V8z" />
          <circle cx="5.5" cy="18.5" r="2" />
          <circle cx="18.5" cy="18.5" r="2" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Secure Payments",
      description: "End-to-end encryption with trusted providers.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <rect x="3" y="7" width="18" height="14" rx="2" />
          <path d="M7 7V5a5 5 0 0 1 10 0v2" />
        </svg>
      )
    },
    {
      id: 3,
      title: "24/7 Support",
      description: "Real experts to help you choose the right device.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M4 12a8 8 0 1 1 16 0" />
          <rect x="2" y="11" width="4" height="7" rx="2" />
          <rect x="18" y="11" width="4" height="7" rx="2" />
          <path d="M12 19h2" />
        </svg>
      )
    }
  ];

  return (
    <section className={`${styles.section} container`}>
      <div className={styles.grid}>
        {highlights.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.iconWrap} aria-hidden="true">{item.icon}</div>
            <div className={styles.content}>
              <h3 className={styles.blogTitle}>{item.title}</h3>
              <p className={styles.excerpt}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

HomeBlogPreview.displayName = 'HomeBlogPreview';
export default HomeBlogPreview;
