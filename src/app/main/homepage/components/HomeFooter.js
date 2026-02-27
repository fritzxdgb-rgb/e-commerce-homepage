import React, { memo } from 'react';
import styles from '../styles/HomeFooter.module.css';

const HomeFooter = memo(() => {
  const shopLinks = [
    { label: 'Flagship Series', href: '/category/flagships' },
    { label: 'Gaming Series', href: '/category/gaming' },
    { label: 'Mid-Range Performance', href: '/category/mid-range' },
    { label: 'Essential Gear', href: '/category/accessories' },
  ];

  const supportLinks = [
    { label: 'Compare Models', href: '/compare' },
    { label: 'Trade-In Program', href: '/trade-in' },
    { label: 'Warranty & Repairs', href: '/support' },
    { label: 'Store Locator', href: '/stores' },
  ];
  const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com/' },
    { label: 'Twitter', href: 'https://x.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
  ];

  return (
    <footer className={styles.footerMain}>
      <div className={`${styles.grid} container`}>
        <div className={styles.brand}>
          <a href="/" className={styles.logo}>
            VOX<span className={styles.logoDot}>.</span>
          </a>
          <p className={styles.description}>
            Redefining the mobile experience with cutting-edge technology, premium design, and a commitment to innovation.
          </p>
          <div className={styles.socials}>
            {socialLinks.map((social) => (
              <a 
                key={social.label} 
                href={social.href} 
                className={styles.socialLink} 
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
              >
                {social.label === 'Facebook' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                )}
                {social.label === 'Twitter' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                )}
                {social.label === 'Instagram' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h4 className={styles.heading}>Shop</h4>
          <ul className={styles.links}>
            {shopLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.link}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4 className={styles.heading}>Support</h4>
          <ul className={styles.links}>
            {supportLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.link}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.newsletter}>
          <h4 className={styles.heading}>Newsletter</h4>
          <p className={styles.description}>Subscribe for latest updates and offers.</p>
          <form className={styles.inputGroup} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your Email Address" className={styles.input} aria-label="Email address" required />
            <button type="submit" className={styles.submitBtn} aria-label="Subscribe">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className={`${styles.bottom} container`}>
        <p>&copy; 2024 VOX Mobile. All Rights Reserved.</p>
        <div className={styles.paymentIcons}>
          {['Visa', 'Mastercard', 'Paypal'].map((p) => (
            <span key={p} className={styles.paymentText}>{p}</span>
          ))}
        </div>
      </div>
    </footer>
  );
});

HomeFooter.displayName = 'HomeFooter';
export default HomeFooter;
