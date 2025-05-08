import React from 'react';
import { ChevronDown } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20 pb-16">
      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <div className="mb-8">
          </div>
          
          <h1 className="text-7xl md:text-8xl font-light mb-3 leading-none">Hello</h1>
          <div className="flex items-center mb-8">
            <div className="w-8 h-px bg-gray-400 mr-3"></div>
            <p className="text-gray-600">It's Miguel, a Machine Learning Developer</p>
            
          </div>
          
          <div className="absolute left-6 bottom-12 md:static">
            <button 
              onClick={() => scrollToSection('about-me')} 
              className="flex items-center text-sm text-gray-500 hover:text-gray-800 transition-colors group"
            >
              Scroll down
              <ChevronDown size={16} className="ml-2 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative">
          <img 
            src="/photo2.png" 
            alt="Portrait" 
            className="w-full h-auto z-10 relative"
            style={{ maxWidth: "1500px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;