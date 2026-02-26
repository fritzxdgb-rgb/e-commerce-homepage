import React, { useEffect, useState } from 'react';

export default function HeroBanner() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={`hero-banner ${loaded ? 'loaded' : ''}`}>

      {/* Background decorative elements */}
      <div className="hero-bg-circle" />
      <div className="hero-bg-line" />

      <div className="hero-inner container">

        {/* Left — Social Rail */}
        <aside className="social-rail">
          <div className="social-rail-line" />
          <div className="social-links">
            {['FB', 'TW', 'IG', 'PIN'].map((s) => (
              <a key={s} href="#" aria-label={s}>{s}</a>
            ))}
          </div>
          <div className="social-rail-line" />
        </aside>

        {/* Center — Content */}
        <div className="hero-content">
          <div className="hero-label">
            <span className="label-dash" />
            NEW TREND
          </div>

          <h1 className="hero-title">
            <span className="title-line">Elevate</span>
            <span className="title-line italic">Your</span>
            <span className="title-line">Style.</span>
          </h1>

          <p className="hero-description">
            Discover the latest trends in modern fashion and upgrade your everyday
            wardrobe with our exclusive curated collection.
          </p>

          <div className="hero-actions">
            <a href="/shop" className="btn-primary">
              Shop Collection
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/about" className="btn-ghost">Explore More</a>
          </div>

          {/* Slider Dots */}
          <div className="slider-dots">
            <button className="dot active" aria-label="Slide 1" />
            <button className="dot" aria-label="Slide 2" />
            <button className="dot" aria-label="Slide 3" />
          </div>
        </div>

        {/* Right — Image */}
        <div className="hero-image-wrap">
          <div className="hero-image-frame">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900&auto=format&fit=crop"
              alt="Elevate Your Style"
            />
            {/* Floating tag */}
            <div className="floating-tag">
              <span className="tag-label">New Collection</span>
              <span className="tag-year">2025</span>
            </div>
          </div>

          {/* Stats strip */}
          <div className="stats-strip">
            <div className="stat">
              <span className="stat-value">2K+</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-value">98%</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-value">50+</span>
              <span className="stat-label">Brands</span>
            </div>
          </div>

          {/* Pagination */}
          <div className="pagination">
            <span className="pg active">01</span>
            <div className="pg-track"><div className="pg-fill" /></div>
            <span className="pg">03</span>
          </div>
        </div>

      </div>

      <style jsx>{`
        /* ── Section ── */
        .hero-banner {
          background: var(--bg-gray);
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 0;
        }

        /* Background decorations */
        .hero-bg-circle {
          position: absolute;
          top: -120px;
          right: -120px;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200,169,110,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-bg-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(200,169,110,0.3), transparent);
        }

        /* ── Layout ── */
        .hero-inner {
          width: 100%;
          display: grid;
          grid-template-columns: 60px 1fr 1fr;
          gap: 60px;
          align-items: center;
          padding-top: 100px;
          padding-bottom: 80px;
        }

        /* ── Social Rail ── */
        .social-rail {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          height: 280px;
        }
        .social-rail-line {
          flex: 1;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.15), transparent);
        }
        .social-links {
          display: flex;
          flex-direction: column;
          gap: 18px;
          align-items: center;
        }
        .social-links a {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2.5px;
          color: var(--muted);
          text-decoration: none;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          transition: color 0.3s, transform 0.3s;
        }
        .social-links a:hover {
          color: var(--accent);
          transform: rotate(180deg) translateY(3px);
        }

        /* ── Content ── */
        .hero-content {
          padding-right: 20px;
        }

        .hero-label {
          display: flex;
          align-items: center;
          gap: 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3.5px;
          color: var(--accent);
          text-transform: uppercase;
          margin-bottom: 32px;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;
        }
        .loaded .hero-label {
          opacity: 1;
          transform: translateY(0);
        }
        .label-dash {
          display: inline-block;
          width: 36px;
          height: 1.5px;
          background: var(--accent);
        }

        .hero-title {
          display: flex;
          flex-direction: column;
          font-family: 'Playfair Display', serif;
          font-size: clamp(52px, 6vw, 88px);
          line-height: 0.95;
          font-weight: 900;
          color: var(--near-black);
          margin-bottom: 36px;
          gap: 4px;
        }
        .title-line {
          display: block;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .title-line.italic {
          font-style: italic;
          font-weight: 400;
          color: var(--accent);
          padding-left: 40px;
        }
        .loaded .title-line:nth-child(1) { opacity: 1; transform: none; transition-delay: 0.2s; }
        .loaded .title-line:nth-child(2) { opacity: 1; transform: none; transition-delay: 0.35s; }
        .loaded .title-line:nth-child(3) { opacity: 1; transform: none; transition-delay: 0.5s; }

        .hero-description {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          line-height: 1.85;
          color: var(--mid-gray);
          max-width: 440px;
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s;
        }
        .loaded .hero-description {
          opacity: 1;
          transform: none;
        }

        .hero-actions {
          display: flex;
          gap: 24px;
          align-items: center;
          margin-bottom: 56px;
          opacity: 0;
          transition: opacity 0.7s ease 0.75s;
        }
        .loaded .hero-actions { opacity: 1; }

        .btn-primary svg {
          transition: transform 0.3s;
        }
        .btn-primary:hover svg {
          transform: translateX(4px);
        }

        /* Slider dots */
        .slider-dots {
          display: flex;
          gap: 10px;
          align-items: center;
          opacity: 0;
          transition: opacity 0.7s ease 0.9s;
        }
        .loaded .slider-dots { opacity: 1; }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ddd;
          border: none;
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
          padding: 0;
        }
        .dot.active {
          background: var(--accent);
          transform: scale(1.4);
        }
        .dot:hover { background: var(--accent); }

        /* ── Image ── */
        .hero-image-wrap {
          position: relative;
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s;
        }
        .loaded .hero-image-wrap {
          opacity: 1;
          transform: none;
        }

        .hero-image-frame {
          position: relative;
          aspect-ratio: 3/4;
          overflow: hidden;
          border-radius: 4px;
          box-shadow: 0 40px 80px rgba(0,0,0,0.12);
        }
        .hero-image-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.3));
          z-index: 1;
          pointer-events: none;
        }
        .hero-image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.03);
          transition: transform 8s ease;
        }
        .loaded .hero-image-frame img {
          transform: scale(1);
        }

        /* Floating tag */
        .floating-tag {
          position: absolute;
          bottom: 30px;
          left: -28px;
          background: var(--white);
          padding: 16px 22px;
          border-radius: 3px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
          display: flex;
          flex-direction: column;
          gap: 2px;
          z-index: 2;
        }
        .tag-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.5px;
          color: var(--muted);
          text-transform: uppercase;
        }
        .tag-year {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 900;
          color: var(--near-black);
          line-height: 1;
        }

        /* Stats strip */
        .stats-strip {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-top: 24px;
          padding: 20px 24px;
          background: white;
          border-radius: 3px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.06);
        }
        .stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
          text-align: center;
        }
        .stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--near-black);
        }
        .stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 1px;
          color: var(--muted);
          text-transform: uppercase;
        }
        .stat-divider {
          width: 1px;
          height: 32px;
          background: #eee;
        }

        /* Pagination */
        .pagination {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 20px;
          justify-content: flex-end;
        }
        .pg {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #ccc;
        }
        .pg.active { color: var(--near-black); }
        .pg-track {
          width: 60px;
          height: 1.5px;
          background: #e5e5e5;
          border-radius: 2px;
          overflow: hidden;
        }
        .pg-fill {
          width: 33%;
          height: 100%;
          background: var(--accent);
          border-radius: 2px;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .hero-inner {
            grid-template-columns: 50px 1fr 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 768px) {
          .hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .social-rail { display: none; }
          .hero-content { padding-right: 0; }
          .hero-label { justify-content: center; }
          .title-line.italic { padding-left: 0; }
          .hero-description { margin: 0 auto 40px; }
          .hero-actions { justify-content: center; }
          .slider-dots { justify-content: center; }
          .floating-tag { left: 16px; }
          .hero-image-frame { aspect-ratio: 4/3; }
        }
      `}</style>
    </section>
  );
}
