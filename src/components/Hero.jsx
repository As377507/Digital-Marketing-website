import React from 'react';
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    /* This main <section> has the blue background class */
    <section className="gradient-hero text-white overflow-hidden pt-20 pb-32 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="animate-slide-up inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-10 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="uppercase tracking-widest text-[10px] font-bold">
            #1 Digital Marketing Agency
          </span>
        </div>

        {/* Heading */}
        <h1 className="animate-slide-up text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Grow Your Business <br className="hidden md:block" /> 
          Digitally
        </h1>

        {/* Subtext */}
        <p className="animate-slide-up text-blue-100/80 text-lg md:text-xl mb-12 max-w-2xl">
          Transform your online presence with data-driven marketing strategies that deliver results.
        </p>

        {/* Buttons */}
        <div className="animate-slide-up flex flex-col sm:flex-row gap-5 mb-24 justify-center">
          <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg shadow-glow hover:scale-105 transition-all flex items-center gap-2">
            Get Free Consultation <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-2xl font-bold text-lg backdrop-blur-sm">
            View Our Work
          </button>
        </div>

        {/* STATS GRID - Notice this is INSIDE the <section> tag */}
        <div className="animate-fade-in grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-5xl border-t border-white/10 pt-16">
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-black">500+</span>
            <span className="text-blue-100/50 text-xs font-bold uppercase tracking-widest">Happy Clients</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-black">1000+</span>
            <span className="text-blue-100/50 text-xs font-bold uppercase tracking-widest">Projects</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-black">300%</span>
            <span className="text-blue-100/50 text-xs font-bold uppercase tracking-widest">Avg ROI</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-black">50+</span>
            <span className="text-blue-100/50 text-xs font-bold uppercase tracking-widest">Experts</span>
          </div>
        </div>

      </div>
    </section> /* The blue background ends here */
  );
};

export default Hero;