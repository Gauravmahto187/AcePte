import React from 'react';

const Header = () => {
  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/images/Ace.png" alt="Ace PTE Logo" className="h-12 w-auto" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-['Poppins'] font-bold text-xl tracking-wide">
              Ace PTE
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 