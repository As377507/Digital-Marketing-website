import React from "react";
import { ArrowRight, TrendingUp, Eye, Users, Globe, Star, ShoppingCart } from "lucide-react";
import "../css/Portfolio.css";

const Portfolio = ({ setCurrentPage }) => {
  const projects = [
    {
      icon: ShoppingCart,
      title: "E-commerce Growth Campaign",
      client: "FashionHub",
      result: "+300% Revenue",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800",
      description: "Transformed an online fashion store with integrated SEO and PPC strategies.",
      tags: ["SEO", "Google Ads", "Email"],
      gradient: "linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(168, 85, 247, 0.8) 100%)",
    },
    {
      icon: Eye,
      title: "Brand Awareness Campaign",
      client: "TechStart Inc.",
      result: "2M+ Impressions",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800",
      description: "Built nationwide brand recognition for a B2B SaaS startup.",
      tags: ["Social Media", "Content", "PR"],
      gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(45, 212, 191, 0.8) 100%)",
    },
    {
      icon: Users,
      title: "Lead Generation System",
      client: "RealtyPro",
      result: "500+ Qualified Leads",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800",
      description: "Created a multi-channel lead generation funnel for real estate.",
      tags: ["Meta Ads", "Landing Pages"],
      gradient: "linear-gradient(135deg, rgba(249, 115, 22, 0.8) 0%, rgba(234, 179, 8, 0.8) 100%)",
    },
    {
      icon: Globe,
      title: "Website Redesign & SEO",
      client: "HealthFirst Clinic",
      result: "+85% Conversions",
      // Updated with a high-resolution healthcare specific image
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
      description: "Complete digital transformation including website and local SEO.",
      tags: ["Web Design", "UI/UX"],
      gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(5, 150, 105, 0.8) 100%)",

    },
    {
      icon: Star,
      title: "Local SEO Success",
      client: "Metro Restaurant",
      result: "#1 Local Ranking",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800",
      description: "Achieved top positions for competitive restaurant keywords in NYC.",
      tags: ["Local SEO", "GMB"],
      gradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.8) 0%, rgba(217, 70, 239, 0.8) 100%)",
    },
    {
      icon: TrendingUp,
      title: "Influencer Marketing",
      client: "BeautyGlow",
      result: "150K+ Followers",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800",
      description: "Partnered with micro-influencers to build an engaged community.",
      tags: ["Influencer", "Instagram"],
      gradient: "linear-gradient(135deg, rgba(79, 70, 229, 0.8) 0%, rgba(37, 99, 235, 0.8) 100%)",
    }
  ];

  const metrics = [
    { value: "$15M+", label: "Revenue Generated" },
    { value: "500+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "45+", label: "Industries Served" },
  ];

  return (
    <div className="portfolio-scope">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="hero-content">
          <h1>Our Portfolio</h1>
          <p>Real results from real campaigns. See how we've helped businesses grow.</p>
        </div>
      </section>

      {/* Metrics Bar */}
      <div className="metrics-bar">
        <div className="metrics-grid container-padding">
          {metrics.map((m, i) => (
            <div key={i} className="metric-item">
              <span className="metric-val">{m.value}</span>
              <span className="metric-lab">{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <section className="container-padding py-80">
        <div className="section-title-box">
          <h2>Featured <span className="text-blue">Projects</span></h2>
          <p>A selection of our most impactful success stories</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card animate-slide-up">
              {/* Image Section with Overlay */}
              <div className="project-media">
                <img src={project.image} alt={project.client} className="project-img" />
                <div className="project-overlay" style={{ background: project.gradient }}>
                  <div className="project-icon-circle">
                    <project.icon size={24} color="white" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="project-info">
                <div className="project-meta">
                  <span className="client-tag">{project.client}</span>
                  <span className="result-pill">{project.result}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag-item">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="portfolio-cta">
        <div className="container-padding">
          <h2>Want Similar Results?</h2>
          <button className="btn-white" onClick={() => setCurrentPage("Contact")}>
            Start Your Project <ArrowRight size={20} style={{ marginLeft: '10px' }} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;