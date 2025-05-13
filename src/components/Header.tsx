import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white bg-opacity-95 shadow-sm py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center gap-12">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="h-16 md:h-20 w-auto" />
        </div>
        
        <nav className={`
          fixed md:relative top-0 md:top-0 left-0 h-screen md:h-auto w-full md:w-auto
          transform transition-all duration-300 ease-in-out bg-white md:bg-transparent
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
          flex items-center md:items-start pt-20 md:pt-0
          md:block
        `}>
          <ul className="flex flex-col md:flex-row w-full items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
            {['About Me', 'Projects', 'Experience', 'Education'].map((item) => (
              <li key={item} className="w-full md:w-auto text-center md:text-left">
                <button
                  onClick={() => {
                    scrollToSection(item.toLowerCase().replace(' ', '-'));
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-black transition-colors text-lg md:text-base py-2 md:py-0 w-full"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          className="md:hidden text-gray-800 fixed right-6 top-7 z-50" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;