import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useMemo, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  const queryClient = useMemo(() => new QueryClient(), []);
  const [currentPage, setCurrentPage] = useState("Home");

  // Automatically scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    // TIP: .trim() prevents issues if there are accidental spaces in your strings
    switch (currentPage) {
      case "Home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "About":
        return <About />;
      case "Services":
        return <Services setCurrentPage={setCurrentPage} />;
      case "Portfolio":
        return <Portfolio setCurrentPage={setCurrentPage} />;
      case "Pricing":
        return <Pricing setCurrentPage={setCurrentPage} />;
      case "Testimonials":
        return <Testimonials setCurrentPage={setCurrentPage} />;
      case "Contact":
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-layout">
        {/* Navbar remains fixed at the top */}
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* main-content should have the padding-top we added in CSS */}
        <main className="main-content">
          {renderPage()}
        </main>

        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </QueryClientProvider>
  );
}