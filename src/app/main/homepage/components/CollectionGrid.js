import React from 'react';

export default function CollectionGrid() {
  const collections = [
    {
      id: 1,
      title: "Women Collection",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
      size: "large",
      link: "/shop/women"
    },
    {
      id: 2,
      title: "Men Collection",
      image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=800&auto=format&fit=crop",
      size: "small",
      link: "/shop/men"
    },
    {
      id: 3,
      title: "Kids Collection",
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=800&auto=format&fit=crop",
      size: "small",
      link: "/shop/kids"
    },
    {
      id: 4,
      title: "Gift Cards",
      image: "https://images.unsplash.com/photo-1549463591-147c09d08771?q=80&w=800&auto=format&fit=crop",
      size: "small",
      link: "/gift-cards"
    }
  ];

  return (
    <section className="collection-grid">
      <div className="container grid-container">
        {collections.map((col) => (
          <div key={col.id} className={`collection-card ${col.size}`}>
            <div className="collection-image-wrapper">
              <img src={col.image} alt={col.title} className="collection-img" />
              <div className="collection-content">
                <h2 className="collection-title">{col.title}</h2>
                <a href={col.link} className="collection-cta">Shop Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .collection-grid {
          padding: var(--section-padding) 0;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 350px);
          gap: 20px;
        }

        .collection-card {
          position: relative;
          overflow: hidden;
          border-radius: 4px;
        }

        .collection-card.large {
          grid-column: span 2;
          grid-row: span 2;
        }

        .collection-card.small {
          grid-column: span 1;
        }

        .collection-image-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          background: var(--bg-gray);
          transition: transform 0.8s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .collection-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .collection-card:hover .collection-image-wrapper {
          transform: scale(1.08);
        }

        .collection-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 60%);
          opacity: 0.6;
          transition: opacity 0.3s;
        }

        .collection-card:hover::after {
          opacity: 0.8;
        }

        .collection-content {
          position: absolute;
          bottom: 30px;
          left: 30px;
          z-index: 2;
          transition: transform 0.3s;
        }

        .collection-card:hover .collection-content {
          transform: translateY(-5px);
        }

        .collection-title {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 12px;
          color: var(--white);
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .collection-card.large .collection-title {
          font-size: 42px;
        }

        .collection-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--white);
          border-bottom: 1.5px solid var(--white);
          padding-bottom: 4px;
          transition: all 0.3s;
        }

        .collection-cta:hover {
          color: var(--accent);
          border-color: var(--accent);
        }

        @media (max-width: 992px) {
          .grid-container {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 300px);
          }
          .collection-card.large {
            grid-column: span 2;
            grid-row: span 1;
          }
        }

        @media (max-width: 768px) {
          .grid-container {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }
          .collection-card.large, .collection-card.small {
            grid-column: span 1;
            height: 350px;
          }
          .collection-title { font-size: 24px; }
          .collection-card.large .collection-title { font-size: 32px; }
        }
      `}</style>
    </section>
  );
}
