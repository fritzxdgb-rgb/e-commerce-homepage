import React, { memo } from 'react';
import styles from '../styles/HomeDealOfTheWeek.module.css';

const HomeDealOfTheWeek = memo(() => {
  return (
    <section className={styles.section}>
      <div className={`${styles.inner} container`}>
        <div className={styles.content}>
          <span className={styles.label}>DEAL OF THE WEEK</span>
          <h2 className={styles.title}>VOX Studio Collection</h2>
          <p className={styles.description}>
            A refined lineup built for daily clarity. Save up to $250 on clean-profile devices with extended battery life and seamless connectivity.
          </p>
          <a href="/shop/studio-series" className="btn-primary">Shop Deal</a>
        </div>
        
        <div className={styles.imageWrap}>
          <img 
            src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=1000&auto=format&fit=crop" 
            alt="VOX Studio smartphone in matte finish" 
            className={styles.image}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
});

HomeDealOfTheWeek.displayName = 'HomeDealOfTheWeek';
export default HomeDealOfTheWeek;
