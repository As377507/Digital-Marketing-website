import React from "react";
import { Zap, Mail, Phone, MapPin, ArrowRight, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = ({ setCurrentPage }) => {
  const quickLinks = ["Home", "About", "Services", "Portfolio"];
  const services = ["SEO Optimization", "Social Media", "Paid Advertising", "Web Design"];

  const handleLinkClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  };

  return (
    <footer className="site-footer">
      <div className="container-padding">
        <div className="footer-grid">
          
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon-footer">
                <Zap size={20} fill="white" color="white" />
              </div>
              <span className="logo-text-white">DigiGrowth</span>
            </div>
            <p className="footer-desc">
              Transform your digital presence with data-driven marketing strategies that deliver measurable results.
            </p>
            <div className="social-links">
              <button className="social-icon"><Linkedin size={18} /></button>
              <button className="social-icon"><Twitter size={18} /></button>
              <button className="social-icon"><Instagram size={18} /></button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link}>
                  <button onClick={() => handleLinkClick(link)} className="footer-btn">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-links-col">
            <h4>Services</h4>
            <ul>
              {services.map((service) => (
                <li key={service}>
                  <button onClick={() => handleLinkClick("Services")} className="footer-btn">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul className="contact-list">
              <li><Mail size={16} className="text-blue" /> info@digigrowth.com</li>
              <li><Phone size={16} className="text-blue" /> +1 (555) 123-4567</li>
              <li>
                <MapPin size={16} className="text-blue" /> 
                <span>123 Marketing Street, NY 10001</span>
              </li>
            </ul>
            <button onClick={() => handleLinkClick("Contact")} className="footer-cta-btn">
              Get Started <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 DigiGrowth. All rights reserved.</p>
          <div className="bottom-links">
            <button className="footer-btn">Privacy Policy</button>
            <button className="footer-btn">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;