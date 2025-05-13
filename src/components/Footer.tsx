// Remove the Star import since we won't need it anymore
import React from 'react';
import { scrollToSection } from '../utils/scrollUtils';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <img src="/logo.png" alt="Logo" className="h-24 w-auto brightness-0 invert" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {['Home', 'About Me', 'Projects', 'Experience', 'Education'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase().replace(' ', '-'));
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        
        <div className="text-center md:text-right text-2xl md:text-3xl font-light">
          contact@miguelvenancio.pt
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Miguel Venâncio. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a 
              href="https://x.com/miguelmvenancio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a 
              href="https://linkedin.com/in/miguelmvenancio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/vehnie" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;