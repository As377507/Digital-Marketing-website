import React from "react";
import { Star, Quote, ArrowRight } from "lucide-react";

const Testimonials = ({ setCurrentPage }) => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      quote: "DigiGrowth transformed our digital presence completely. Our organic traffic increased by 400% in just 6 months.",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      company: "FashionHub",
      quote: "The ROI from our campaigns has been exceptional. They truly understand e-commerce marketing.",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "BeautyGlow",
      quote: "Their social media strategies helped us build a community of over 150K engaged followers.",
      rating: 5,
      avatar: "👩‍🦱",
    },
    // Add other testimonials here...
  ];

  const featuredQuote = {
    name: "Amanda Foster",
    role: "Chief Growth Officer",
    company: "ScaleUp Ventures",
    quote: "DigiGrowth isn't just an agency; they're a strategic partner. Their data-driven approach helped us achieve 10x growth.",
    rating: 5,
    avatar: "👩‍💻",
  };

  return (
    <div className="testimonials-scope">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Client Success Stories</h1>
          <p>Hear what our clients have to say about working with us</p>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ width: '100%', height: '80px' }}>
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="featured-section">
        <div className="featured-card">
          <Quote className="quote-icon-bg" />
          <div className="featured-flex">
            <div className="avatar-large">{featuredQuote.avatar}</div>
            <div className="content">
              <div className="stars">
                {[...Array(featuredQuote.rating)].map((_, i) => (
                  <Star key={i} className="star-icon" />
                ))}
              </div>
              <blockquote className="featured-text">"{featuredQuote.quote}"</blockquote>
              <div className="author-info">
                <strong>{featuredQuote.name}</strong>
                <span>{featuredQuote.role}, {featuredQuote.company}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="grid-section">
        <div className="grid-header">
          <h2>What Our Clients <span>Say</span></h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="mini-card">
              <div className="stars">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="star-icon-small" />
                ))}
              </div>
              <blockquote className="mini-quote">"{t.quote}"</blockquote>
              <div className="mini-footer">
                <div className="avatar-small">{t.avatar}</div>
                <div className="author-info-small">
                  <strong>{t.name}</strong>
                  <span>{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        {[
          { value: "98%", label: "Client Satisfaction" },
          { value: "4.9", label: "Average Rating" },
          { value: "500+", label: "Happy Clients" },
          { value: "95%", label: "Retention Rate" },
        ].map((stat, i) => (
          <div key={i} className="stat-item">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="bottom-cta">
        <h2>Ready to Be Our Next Success Story?</h2>
        <button className="btn-white" onClick={() => setCurrentPage("Contact")}>
          Get Started Today <ArrowRight size={18} style={{marginLeft: '8px'}} />
        </button>
      </section>
    </div>
  );
};

export default Testimonials;