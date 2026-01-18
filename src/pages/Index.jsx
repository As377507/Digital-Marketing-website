import React, { useState, useEffect } from "react";
// Adjust these paths based on your actual folder structure
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
// ... other imports
import "../css/Index.css"

const Index = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  // Optional: Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    // We pass setCurrentPage to every page so buttons 
    // inside those pages (like "Get Started") can change the view.
    const props = { setCurrentPage };
    
    switch (currentPage) {
      case "Home": return <Home {...props} />;
      case "About": return <About {...props} />;
      case "Services": return <Services {...props} />;
      case "Contact": return <Contact {...props} />;
      default: return <Home {...props} />;
    }
  };

  return (
    <div className="app-layout">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Index;