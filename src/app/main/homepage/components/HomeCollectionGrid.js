import React, { memo } from 'react';
import styles from '../styles/HomeCollectionGrid.module.css';

const HomeCollectionGrid = memo(() => {
  const collections = [
    {
      id: 1,
      title: "Flagship Collection",
      image: "https://images.unsplash.com/photo-1592890288564-76628a30a657?q=80&w=800&auto=format&fit=crop",
      size: "large",
      link: "/category/flagships"
    },
    {
      id: 2,
      title: "Performance Series",
      image: "https://images.samsung.com/is/image/samsung/p6pim/ph/f2507/gallery/ph-galaxy-zflip7-f766-sm-f766blgephl-thumb-547554655?$Q90_495_330_F_PNG$",
      size: "wide",
      link: "/category/gaming"
    },
    {
      id: 3,
      title: "Essentials",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
      size: "small",
      link: "/category/accessories"
    },
    {
      id: 4,
      title: "Gift Cards",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
      size: "small",
      link: "/gift-cards"
    }
  ];

  return (
    <section className="container">
      <div className={styles.grid}>
        {collections.map((col) => (
          <a 
            key={col.id} 
            href={col.link}
            className={`${styles.card} ${styles[`card${col.size.charAt(0).toUpperCase()}${col.size.slice(1)}`]}`}
            aria-label={`Explore ${col.title}`}
          >
            <img src={col.image} alt={`${col.title} collection`} className={styles.image} loading="lazy" />
            <div className={styles.overlay}>
              <h2 className={styles.title}>{col.title}</h2>
              <span className={styles.cta}>
                Explore Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
});

HomeCollectionGrid.displayName = 'HomeCollectionGrid';
export default HomeCollectionGrid;
