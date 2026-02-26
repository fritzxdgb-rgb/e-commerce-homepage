import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col about">
          <div className="footer-logo">
            <span className="logo-text">LUXE</span>
            <span className="logo-dot">.</span>
          </div>
          <p className="footer-desc">
            Your destination for modern, minimal fashion. Quality pieces for your everyday wardrobe.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Shop</h4>
          <ul className="footer-links">
            <li><a href="#">Women Collection</a></li>
            <li><a href="#">Men Collection</a></li>
            <li><a href="#">Kids Collection</a></li>
            <li><a href="#">New Arrivals</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Support</h4>
          <ul className="footer-links">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Order Tracking</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-col newsletter">
          <h4 className="footer-heading">Newsletter</h4>
          <p className="newsletter-text">Subscribe to get the latest updates and offers.</p>
          <form className="newsletter-form">
            <div className="input-group">
              <input type="email" placeholder="Your Email Address" className="newsletter-input" required />
              <button type="submit" className="newsletter-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p className="copyright">&copy; 2024 LUXE. All Rights Reserved.</p>
          <div className="payment-icons">
            <img src="https://img.icons8.com/color/38/000000/visa.png" alt="Visa" className="payment-img" />
            <img src="https://img.icons8.com/color/38/000000/mastercard.png" alt="Mastercard" className="payment-img" />
            <img src="https://img.icons8.com/color/38/000000/paypal.png" alt="Paypal" className="payment-img" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          padding-top: var(--section-padding);
          background: #0a0a0a;
          color: var(--white);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 2fr;
          gap: 60px;
          margin-bottom: 80px;
        }

        .footer-logo {
          display: flex;
          align-items: baseline;
          gap: 1px;
          margin-bottom: 30px;
        }
        
        .logo-text {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-weight: 900;
          letter-spacing: 6px;
          color: var(--white);
        }
        
        .logo-dot {
          font-family: 'Playfair Display', serif;
          font-size: 38px;
          font-weight: 900;
          color: var(--accent);
          line-height: 1;
        }

        .footer-desc {
          color: #999;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          line-height: 1.8;
          margin-bottom: 30px;
          max-width: 300px;
        }

        .footer-social {
          display: flex;
          gap: 15px;
        }

        .footer-social a {
          color: var(--white);
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .footer-social a:hover {
          background: var(--accent);
          border-color: var(--accent);
          transform: translateY(-5px);
        }

        .footer-heading {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--white);
        }

        .footer-links li {
          margin-bottom: 15px;
        }

        .footer-links a {
          color: #999;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          transition: all 0.3s;
        }

        .footer-links a:hover {
          color: var(--accent);
          padding-left: 5px;
        }

        .newsletter-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: #999;
          margin-bottom: 25px;
        }

        .input-group {
          display: flex;
          position: relative;
          border-bottom: 1.5px solid rgba(255,255,255,0.1);
          transition: border-color 0.3s;
        }

        .input-group:focus-within {
          border-color: var(--accent);
        }

        .newsletter-input {
          flex: 1;
          padding: 15px 0;
          border: none;
          background: transparent;
          color: var(--white);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
        }

        .newsletter-input:focus {
          outline: none;
        }

        .newsletter-btn {
          background: transparent;
          color: var(--white);
          padding: 10px;
          transition: all 0.3s;
        }

        .newsletter-btn:hover {
          color: var(--accent);
          transform: translateX(5px);
        }

        .footer-bottom {
          padding: 40px 0;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .bottom-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #666;
        }

        .payment-icons {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .payment-img {
          height: 22px;
          width: auto;
          filter: grayscale(1) brightness(1.5);
          opacity: 0.6;
          transition: all 0.3s;
        }

        .payment-img:hover {
          filter: none;
          opacity: 1;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
          .newsletter {
            grid-column: span 2;
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .newsletter {
            grid-column: span 1;
          }
          .bottom-flex {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
