import React, { memo } from 'react';
import { useScroll } from '../hooks/useScroll';
import styles from '../styles/HomeNavbar.module.css';

const HomeNavbar = memo(() => {
  const scrolled = useScroll(20);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pages', href: '/pages' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav 
        className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className={`${styles.navbarInner} container`}>
          {/* Logo */}
          <a href="/" className={styles.logo} aria-label="VOX Mobile Home">
            VOX<span className={styles.logoDot}>.</span>
          </a>

          {/* Navigation Links */}
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Action Icons */}
          <div className={styles.navIcons}>
            <button type="button" className={styles.iconBtn} aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <button type="button" className={styles.iconBtn} aria-label="Account">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            <button type="button" className={styles.iconBtn} aria-label="Shopping Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className={styles.cartBadge}>3</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
});

HomeNavbar.displayName = 'HomeNavbar';
export default HomeNavbar;
