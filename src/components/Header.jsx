import React from 'react';

const Header = () => {
  return (
    <header className="bg-white backdrop-blur-md border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-0">
            <img src="/images/Ace.png" alt="Ace PTE Logo" className="h-12 w-auto" />
            <span className="text-blue-500 font-['Poppins'] font-bold text-xl tracking-wide">
              Ace PTE
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;