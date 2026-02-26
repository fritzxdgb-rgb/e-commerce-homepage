import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <p>Free shipping on orders over $75 &nbsp;·&nbsp; Use code <strong>NEWTREND</strong> for 15% off</p>
      </div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner container">

          {/* Left — Nav Links */}
          <ul className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
            {['HOME', 'SHOP', 'BLOG', 'PAGES', 'ABOUT', 'CONTACT'].map((link) => (
              <li key={link}>
                <a href={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Center — Logo */}
          <div className="navbar-logo">
            <a href="/">
              <span className="logo-text">FUXE</span>
              <span className="logo-dot"></span>
            </a>
          </div>

          {/* Right — Icons */}
          <div className="navbar-icons">
            <button aria-label="Search" className="icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <button aria-label="User" className="icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            <button aria-label="Wishlist" className="icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
            <button aria-label="Cart" className="icon-btn cart-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="cart-badge">3</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              aria-label="Menu"
              className="icon-btn mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className={`hamburger ${mobileOpen ? 'open' : ''}`}>
                <span /><span /><span />
              </span>
            </button>
          </div>

        </div>

        {/* Mobile Drawer */}
        <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
          {['HOME', 'SHOP', 'BLOG', 'PAGES', 'ABOUT', 'CONTACT'].map((link) => (
            <a key={link} href={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}>
              {link}
            </a>
          ))}
        </div>
      </nav>

      <style jsx>{`
        /* ── Announcement Bar ── */
        .announcement-bar {
          background: var(--near-black);
          color: var(--white);
          text-align: center;
          padding: 10px 20px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.5px;
          line-height: 1.4;
        }
        .announcement-bar strong {
          color: var(--accent);
        }

        /* ── Navbar ── */
        .navbar {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: box-shadow 0.3s ease, background 0.3s ease;
        }
        .navbar.scrolled {
          box-shadow: 0 4px 30px rgba(0,0,0,0.08);
          background: rgba(255,255,255,0.98);
        }

        .navbar-inner {
          height: 80px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 20px;
          padding-top: 0;
          padding-bottom: 0;
        }

        /* ── Logo (center) ── */
        .navbar-logo {
          display: flex;
          justify-content: center;
        }
        .navbar-logo a {
          display: flex;
          align-items: baseline;
          gap: 1px;
          text-decoration: none;
        }
        .logo-text {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 900;
          letter-spacing: 6px;
          color: var(--near-black);
          transition: color 0.3s;
        }
        .logo-dot {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-weight: 900;
          color: var(--accent);
          line-height: 1;
        }
        .navbar-logo a:hover .logo-text {
          color: var(--accent);
        }

        /* ── Nav Links (left) ── */
        .navbar-links {
          display: flex;
          gap: 32px;
          list-style: none;
          align-items: center;
        }
        .navbar-links a {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          color: var(--near-black);
          text-transform: uppercase;
          text-decoration: none;
          position: relative;
          padding-bottom: 4px;
          transition: color 0.3s;
        }
        .navbar-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 1.5px;
          background: var(--accent);
          transition: width 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .navbar-links a:hover {
          color: var(--accent);
        }
        .navbar-links a:hover::after {
          width: 100%;
        }

        /* ── Icons (right) ── */
        .navbar-icons {
          display: flex;
          gap: 18px;
          align-items: center;
          justify-content: flex-end;
        }
        .icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--near-black);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          border-radius: 50%;
          transition: color 0.3s, background 0.3s, transform 0.25s;
          position: relative;
        }
        .icon-btn:hover {
          color: var(--accent);
          background: rgba(200, 169, 110, 0.1);
          transform: translateY(-2px);
        }

        /* Cart Badge */
        .cart-btn { position: relative; }
        .cart-badge {
          position: absolute;
          top: 0px;
          right: 0px;
          background: var(--accent);
          color: var(--white);
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 700;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          border: 2px solid white;
        }

        /* ── Hamburger ── */
        .mobile-menu-btn { display: none; }
        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 20px;
        }
        .hamburger span {
          display: block;
          height: 1.5px;
          background: var(--near-black);
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(4.5px, 4.5px); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(4.5px, -4.5px); }

        /* ── Mobile Drawer ── */
        .mobile-drawer {
          display: none;
          flex-direction: column;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.4s ease, padding 0.3s ease;
          border-top: 1px solid var(--border);
          background: white;
        }
        .mobile-drawer.open {
          display: flex;
          max-height: 400px;
          padding: 20px 40px;
          gap: 18px;
        }
        .mobile-drawer a {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 2px;
          color: var(--near-black);
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.3s, padding-left 0.3s;
        }
        .mobile-drawer a:hover {
          color: var(--accent);
          padding-left: 8px;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .navbar-links {
            gap: 20px;
          }
        }
        @media (max-width: 768px) {
          .navbar-inner {
            grid-template-columns: auto 1fr auto;
            height: 70px;
          }
          .navbar-links {
            display: none;
          }
          .mobile-menu-btn {
            display: flex;
          }
          .logo-text { font-size: 22px; letter-spacing: 4px; }
        }
      `}</style>
    </>
  );
}
