import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToFooter = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white backdrop-blur-md border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center -space-x-1">
            <img src="/images/Ace.png" alt="Ace PTE Logo" className="h-12 w-auto" />
            <span className="text-sky-600 font-['Poppins'] font-bold text-xl tracking-wide">
              Ace<span className='text-yellow-400'>PTE</span> 
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <button 
              onClick={scrollToTop}
              className="text-sky-600 hover:text-sky-700 font-medium transition-colors duration-200 cursor-pointer"
            >
              Courses
            </button>
            <button 
              onClick={scrollToFooter}
              className="text-sky-600 hover:text-sky-700 font-medium transition-colors duration-200 cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col space-y-1 p-2"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-sky-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-sky-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-sky-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-0 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <button 
              onClick={scrollToTop}
              className="block w-full text-left px-3 py-2 text-sky-600 hover:text-sky-800 font-medium transition-colors duration-200"
            >
              Courses
            </button>
            <button 
              onClick={scrollToFooter}
              className="block w-full text-left px-3 py-2 text-sky-600 hover:text-sky-800 font-medium transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;