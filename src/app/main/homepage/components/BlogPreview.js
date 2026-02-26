import React from 'react';

export default function BlogPreview() {
  const blogs = [
    {
      id: 1,
      title: "Top Summer Fashion Trends 2024",
      description: "Explore the most popular styles this summer and how to wear them.",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "How to Style Your Denim Jacket",
      description: "A versatile piece for any wardrobe. Learn how to style it for any occasion.",
      image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5bab3?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Sustainable Fashion: Why it Matters",
      description: "Discover the importance of eco-friendly fashion and how you can make a difference.",
      image: "https://images.unsplash.com/photo-1544441893-675973e31d85?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="blog-preview">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">OUR JOURNAL</span>
          <h2 className="section-title">Latest From Blog</h2>
        </div>
        <div className="blog-grid">
          {blogs.map(blog => (
            <article key={blog.id} className="blog-card">
              <div className="blog-image-wrapper">
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                </div>
                <div className="blog-date">
                  <span className="day">26</span>
                  <span className="month">FEB</span>
                </div>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">
                  <a href={`/blog/${blog.id}`}>{blog.title}</a>
                </h3>
                <p className="blog-excerpt">{blog.description}</p>
                <a href={`/blog/${blog.id}`} className="read-more">
                  Read Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style jsx>{`
        .blog-preview {
          padding: var(--section-padding) 0;
          background: var(--white);
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-subtitle {
          display: block;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3.5px;
          color: var(--accent);
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 42px;
          color: var(--near-black);
          font-weight: 700;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .blog-card {
          background: var(--white);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid var(--border);
        }

        .blog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border-color: transparent;
        }

        .blog-image-wrapper {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
        }

        .blog-image {
          width: 100%;
          height: 100%;
          background-color: var(--bg-gray);
          transition: transform 0.6s ease;
        }

        .blog-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .blog-card:hover .blog-image {
          transform: scale(1.1);
        }

        .blog-date {
          position: absolute;
          top: 20px;
          left: 20px;
          background: var(--white);
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 50px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          border-radius: 2px;
        }

        .blog-date .day {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--near-black);
          line-height: 1;
        }

        .blog-date .month {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 700;
          color: var(--accent);
          margin-top: 2px;
        }

        .blog-content {
          padding: 30px;
        }

        .blog-title {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          margin-bottom: 15px;
          line-height: 1.3;
          font-weight: 700;
          transition: color 0.3s;
        }

        .blog-title a:hover {
          color: var(--accent);
        }

        .blog-excerpt {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: var(--mid-gray);
          margin-bottom: 25px;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .read-more {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--near-black);
          transition: all 0.3s;
        }

        .read-more:hover {
          color: var(--accent);
          gap: 12px;
        }

        .read-more svg {
          transition: transform 0.3s;
        }

        @media (max-width: 992px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .section-title {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
}
