import React from "react";
import { Lightbulb, Shield, Target, Users, Award, Clock, TrendingUp, Heart } from "lucide-react";
import "../css/About.css";

const About = () => {
  const values = [
    { icon: Lightbulb, title: "Innovation", description: "Staying ahead of digital trends to give you a competitive edge." },
    { icon: Shield, title: "Integrity", description: "Transparent communication and honest reporting at every step." },
    { icon: Target, title: "Results", description: "Focused on delivering measurable outcomes that matter." },
    { icon: Heart, title: "Collaboration", description: "Working as an extension of your team towards shared goals." },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "1000+", label: "Projects Completed" },
    { icon: Clock, value: "10+", label: "Years Experience" },
    { icon: TrendingUp, value: "50+", label: "Team Members" },
  ];

  return (
    <div className="about-scope">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About DigiGrowth</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.9, fontSize: '1.2rem' }}>
            Partnering with you to navigate the digital landscape and achieve sustainable growth.
          </p>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ width: '100%', height: '60px' }}>
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>
      <section className="container-padding py-80">
        <div className="about-story-grid">
          <div className="story-text">
            <span className="badge">Our Story</span>
            <h2>Driving Digital Evolution</h2>
            <p>
              Founded in 2014, DigiGrowth began with a simple observation: businesses were
              spending thousands on digital ads without understanding their ROI. We set out
              to change that by bringing <b>data-transparency</b> to the forefront of marketing.
            </p>
            <p>
              Today, we are a full-service powerhouse that combines creative storytelling
              with rigorous technical analysis. We don't just aim for clicks; we build
              ecosystems that turn strangers into loyal brand advocates.
            </p>
          </div>

          <div className="mission-box">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>To empower ambitious brands by bridging the gap between complex technology and meaningful human connection.</p>
            </div>
            <div className="mission-card">
              <h3>Our Vision</h3>
              <p>To become the global benchmark for ethical, performance-driven digital marketing by 2030.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-bar">
        <div className="container-padding stats-flex">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <s.icon size={24} className="text-blue" />
              <div>
                <div className="stat-number">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="container-padding py-80">
        <div className="section-header">
          <h2>Our Core Values</h2>
          <p>The principles that drive every project we take on.</p>
        </div>
        <div className="values-grid">
          {values.map((v, i) => (
            <div key={i} className="value-card">
              <div className="value-icon"><v.icon /></div>
              <h3>{v.title}</h3>
              <p>{v.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;