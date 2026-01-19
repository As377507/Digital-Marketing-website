import React from "react";
import "../css/Home.css";
import "../css/Global.css"

const Home = ({ setCurrentPage }) => {
  return (
    <div className="page-wrapper">
      <section className="hero-section">
        <div className="container-padding">
          <span style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '0.85rem',
            letterSpacing: '1px',
            display: 'inline-block',
            marginBottom: '20px'
          }}>
            ✨ TRUSTED BY 500+ BRANDS
          </span>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 3.8rem)',
            fontWeight: 800,
            margin: '0 auto 24px',
            maxWidth: '900px',
            letterSpacing: '-1px',
            lineHeight: '1.1' /* Added to fix spacing between lines */
          }}>
            Scale Your Brand <br /> With Precision
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            We combine creative storytelling with data-science to drive measurable growth.
          </p>

          <button className="btn-primary" onClick={() => setCurrentPage("Contact")}>
            Get Started Today
          </button>

          {/* FIXED: changed justify-content to justifyContent */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 'clamp(20px, 5vw, 60px)',
            marginTop: '60px'
          }}>
            <div className="stat-item">
              <h2 style={{ fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>98%</h2>
              <p style={{ opacity: 0.8, fontSize: '0.9rem', margin: 0 }}>Retention</p>
            </div>
            <div className="stat-item">
              <h2 style={{ fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>$15M+</h2>
              <p style={{ opacity: 0.8, fontSize: '0.9rem', margin: 0 }}>Revenue Generated</p>
            </div>
            <div className="stat-item">
              <h2 style={{ fontSize: '2.2rem', fontWeight: 700, margin: 0 }}>24/7</h2>
              <p style={{ opacity: 0.8, fontSize: '0.9rem', margin: 0 }}>Expert Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;