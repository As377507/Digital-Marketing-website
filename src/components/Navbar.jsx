import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Pricing",
  "Testimonials",
  "Contact",
];

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        
        {/* Logo Section */}
        <button onClick={() => handleNavClick("Home")} className="logo-btn">
          <div className="logo-icon">
            <Zap className="zap-icon" />
          </div>
          <span className="logo-text">
            Digi<span className="text-blue">Growth</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <ul className="nav-links desktop-only">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleNavClick(link)}
                className={`nav-item ${currentPage === link ? "active" : ""}`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="desktop-only">
          <button 
            onClick={() => handleNavClick("Contact")} 
            className="btn-primary nav-cta"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Sidebar/Menu */}
      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className={`mobile-nav-item ${currentPage === link ? "active" : ""}`}
            >
              {link}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick("Contact")} 
            className="btn-primary"
            style={{marginTop: '20px', width: '100%'}}
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;