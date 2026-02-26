import React from 'react';

export default function DealOfTheWeek() {
  return (
    <section className="deal-of-the-week">
      <div className="container deal-container">
        <div className="deal-content">
          <span className="deal-label">DEAL OF THE WEEK</span>
          <h2 className="deal-title">Exclusive Collection</h2>
          <p className="deal-description">
            Get up to 50% off on our most popular items. This offer is valid for a limited time only, so hurry up and grab your favorites!
          </p>
          <div className="countdown">
            <div className="countdown-item">
              <span className="number">02</span>
              <span className="label">Days</span>
            </div>
            <div className="countdown-item">
              <span className="number">15</span>
              <span className="label">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="number">45</span>
              <span className="label">Mins</span>
            </div>
            <div className="countdown-item">
              <span className="number">30</span>
              <span className="label">Secs</span>
            </div>
          </div>
          <a href="/shop" className="btn-primary">Shop Now</a>
        </div>
        <div className="deal-image">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop" alt="Exclusive Collection Watch" />
        </div>
      </div>
      <style jsx>{`
        .deal-of-the-week {
          background-color: var(--bg-gray);
          padding: var(--section-padding) 0;
          position: relative;
          overflow: hidden;
        }

        .deal-of-the-week::before {
          content: 'DEAL';
          position: absolute;
          top: 10%;
          right: -5%;
          font-family: 'Playfair Display', serif;
          font-size: 200px;
          font-weight: 900;
          color: rgba(0,0,0,0.02);
          z-index: 0;
          pointer-events: none;
        }

        .deal-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .deal-content {
          padding: 60px;
          background: var(--white);
          box-shadow: 0 30px 60px rgba(0,0,0,0.05);
          border-radius: 4px;
        }

        .deal-label {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          color: var(--accent);
          margin-bottom: 25px;
          padding: 6px 16px;
          background: rgba(200, 169, 110, 0.1);
          border-radius: 50px;
        }

        .deal-title {
          font-family: 'Playfair Display', serif;
          font-size: 54px;
          line-height: 1.1;
          margin-bottom: 25px;
          color: var(--near-black);
          font-weight: 700;
        }

        .deal-description {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          color: var(--mid-gray);
          margin-bottom: 45px;
          max-width: 500px;
          line-height: 1.8;
        }

        .countdown {
          display: flex;
          gap: 20px;
          margin-bottom: 50px;
        }

        .countdown-item {
          text-align: center;
          background: var(--bg-gray);
          padding: 15px;
          min-width: 90px;
          border-radius: 4px;
          transition: all 0.3s;
        }

        .countdown-item:hover {
          transform: translateY(-5px);
          background: var(--near-black);
        }

        .countdown-item:hover .number,
        .countdown-item:hover .label {
          color: var(--white);
        }

        .number {
          display: block;
          font-size: 32px;
          font-weight: 700;
          color: var(--near-black);
          font-family: 'Playfair Display', serif;
          margin-bottom: 5px;
          transition: color 0.3s;
        }

        .label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 700;
          transition: color 0.3s;
        }

        .deal-image {
          position: relative;
          aspect-ratio: 1/1;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0,0,0,0.1);
        }

        .deal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .deal-image::after {
          content: 'Save 50%';
          position: absolute;
          top: 30px;
          left: 30px;
          background: var(--accent);
          color: white;
          padding: 10px 20px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          border-radius: 50px;
          font-size: 13px;
          box-shadow: 0 10px 20px rgba(200, 169, 110, 0.3);
        }

        @media (max-width: 992px) {
          .deal-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .deal-content {
            padding: 40px;
          }
          .deal-title {
            font-size: 42px;
          }
          .countdown {
            justify-content: center;
          }
        }

        @media (max-width: 576px) {
          .countdown {
            gap: 10px;
          }
          .countdown-item {
            min-width: 70px;
            padding: 10px;
          }
          .number {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
}
