import React from "react";
import { ArrowRight, CheckCircle, Search, Share2, DollarSign, Code, FileText, Mail } from "lucide-react";
import "../css/Services.css";


const Services = ({ setCurrentPage }) => {

  const handleNavigation = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { icon: Search, title: "SEO Optimization", emoji: "🔍", description: "Boost your organic visibility with data-driven SEO strategies.", features: ["Keyword Research", "On-Page SEO", "Link Building"] },
    { icon: Share2, title: "Social Media", emoji: "📱", description: "Build brand awareness and engage your audience across all platforms.", features: ["Content Strategy", "Community Management", "Analytics"] },
    { icon: DollarSign, title: "Paid Advertising", emoji: "💰", description: "Maximize ROI with targeted Google Ads and Meta campaigns.", features: ["Google Ads", "Retargeting", "Conversion Tracking"] },
    { icon: Code, title: "Web Development", emoji: "💻", description: "Create stunning, conversion-optimized websites built for performance.", features: ["UI/UX Design", "Responsive Layouts", "E-commerce"] },
    { icon: FileText, title: "Content Marketing", emoji: "✍️", description: "Tell your brand story with content that educates and converts.", features: ["Blog Writing", "Copywriting", "Video Strategy"] },
    { icon: Mail, title: "Email Marketing", emoji: "📧", description: "Nurture leads and drive sales with personalized automation.", features: ["Automation", "Segmentation", "A/B Testing"] },
  ];

  const processSteps = [
    { step: "01", title: "Discovery", desc: "Understanding your business goals." },
    { step: "02", title: "Strategy", desc: "Crafting a customized roadmap." },
    { step: "03", title: "Execution", desc: "Implementing campaigns with precision." },
    { step: "04", title: "Optimize", desc: "Continuous improvement based on data." },
  ];

  return (
    <div className="services-scope">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Our Services</h1>
          <p className="hero-subtitle">Comprehensive digital marketing solutions tailored to your business goals.</p>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 120" fill="white"><path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" /></svg>
        </div>
      </section>

      {/* Services Grid */}
      <div className="container-padding py-80">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card animate-slide-up">
              <div className="service-emoji-box">{service.emoji}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="feature-list">
                {service.features.map((f, i) => (
                  <li key={i}><CheckCircle size={14} className="text-blue" /> {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <section className="process-section">
        <div className="container-padding">
          <h2 className="section-title">Our <span className="text-blue">Process</span></h2>
          <div className="process-grid">
            {processSteps.map((item, index) => (
              <div key={index} className="process-card">
                <span className="step-num">{item.step}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bottom-cta">
        <h2>Ready to Grow?</h2>
        <button
          className="btn-white"
          onClick={() => handleNavigation("Contact")}
        >
          Get Free Consultation
          <ArrowRight size={18} style={{ marginLeft: '8px' }} />
        </button>
      </section>
    </div>
  );
};

export default Services;