import React, { useState, useEffect, memo } from 'react';
import styles from '../styles/HomeHeroBanner.module.css';

const HomeHeroBanner = memo(() => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'Twitter', href: 'https://x.com/' },
  ];

  return (
    <section className={styles.hero}>
      <div className={`${styles.heroInner} container`}>
        <aside className={styles.heroAside} aria-label="Social links">
          <div className={styles.heroSocials}>
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.href}
                className={styles.heroSocialLink}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
              >
                {social.label[0]}
              </a>
            ))}
          </div>
          <div className={styles.heroDots} role="tablist" aria-label="Hero slides">
            {[0, 1, 2].map((item) => (
              <button
                key={item}
                type="button"
                className={`${styles.heroDot} ${item === 0 ? styles.heroDotActive : ''}`}
                aria-label={`Slide ${item + 1}`}
                aria-selected={item === 0}
                role="tab"
              />
            ))}
          </div>
        </aside>
        <div className={`${styles.heroContent} ${loaded ? styles.heroContentVisible : ''}`}>
          <div className={styles.heroLabel}>New Trend</div>
          <h1 className={styles.heroTitle}>
            Minimal <span className={styles.heroTitleItalic}>Tech</span> Essentials
          </h1>
          <p className={styles.heroDescription}>
            Curated devices designed for everyday clarity—clean lines, powerful performance, and refined finishes for modern living.
          </p>
          <div className={styles.heroActions}>
            <a href="/shop/vox-ultra-15" className="btn-primary">
              Shop Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/collections" className="btn-ghost">View Collection</a>
          </div>
        </div>

        <div className={`${styles.heroImageWrap} ${loaded ? styles.heroImageWrapVisible : ''}`}>
          <div className={styles.heroImageFrame}>
            <img 
              src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=1200&auto=format&fit=crop" 
              alt="VOX Ultra 15 Smartphone in silver finish" 
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

HomeHeroBanner.displayName = 'HomeHeroBanner';
export default HomeHeroBanner;
