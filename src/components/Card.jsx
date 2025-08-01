import React from 'react';

const Card = ({ title, price, duration, focus, idealFor, features, nextSession, sessionType, onBookMessage, pricing }) => {
  return (
    <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 border border-white/10">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Header with gradient background */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 p-6 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-500"></div>
        
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-2 font-['Poppins'] tracking-wide">
            {title}
          </h2>
          <div className="inline-block">
            {/* Desktop Price - Hidden on mobile */}
            <div className="relative group hidden md:block">
              {/* Animated background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-xl blur-sm group-hover:blur-md transition-all duration-300 opacity-75"></div>
              
              {/* Main price container */}
              <div className="relative bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 px-6 py-3 rounded-xl shadow-2xl transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 border-2 border-emerald-400/30">
                {/* Price text */}
                <span className="text-white font-bold text-xl font-['Poppins'] tracking-wide">
                  {price}
                </span>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Mobile Price - Simple and compact */}
            <div className="md:hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 rounded-lg shadow-lg">
                <span className="text-white font-bold text-lg font-['Poppins']">
                  {price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6 relative z-10">
        {/* Duration - only show for cards without pricing */}
        {!pricing && (
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12,6 12,12 16,14"></polyline>
              </svg>
            </div>
            <div>
              <span className="text-gray-300 text-sm font-medium font-['Inter']">Duration:</span>
              <p className="text-white font-semibold font-['Poppins'] text-sm">{duration}</p>
            </div>
          </div>
        )}

        {/* Pricing Breakdown (for custom prices) */}
        {pricing && (
          <div className="space-y-2 pl-1 mb-2">
            <span className="text-gray-300 text-sm font-medium font-['Inter']">Duration & Pricing:</span>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                <span className="text-white font-medium font-['Inter']">1 Week</span>
                <span className="text-green-400 font-bold font-['Poppins']">NRS 4000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                <span className="text-white font-medium font-['Inter']">10 Days</span>
                <span className="text-green-400 font-bold font-['Poppins']">NRS 5000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-pink-500/10 to-indigo-500/10 rounded-lg border border-pink-500/20">
                <span className="text-white font-medium font-['Inter']">2 Weeks</span>
                <span className="text-green-400 font-bold font-['Poppins']">NRS 7000</span>
              </div>
            </div>
          </div>
        )}

        {/* Focus */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
            <span className="text-gray-300 text-sm font-medium font-['Inter']">Focus:</span>
          </div>
          <p className="text-gray-200 text-sm leading-relaxed pl-7 font-['Inter']">
            {focus}
          </p>
        </div>

        {/* Ideal For */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span className="text-gray-300 text-sm font-medium font-['Inter']">Ideal For:</span>
          </div>
          <p className="text-gray-200 text-sm leading-relaxed pl-7 font-['Inter']">
            {idealFor}
          </p>
        </div>

        {/* Features */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22,4 12,14.01 9,11.01"></polyline>
            </svg>
            <span className="text-gray-300 text-sm font-medium font-['Inter']">Features:</span>
          </div>
          <ul className="space-y-2 pl-7">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-200 font-['Inter']">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Next Session */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4 space-y-2">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span className="text-gray-300 text-sm font-medium font-['Inter']">Next Session:</span>
          </div>
          <p className="text-white font-semibold text-sm pl-7 font-['Poppins']">
            {nextSession}
          </p>
        </div>

        {/* CTA Button */}
        <button 
          onClick={() => onBookMessage(sessionType)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group font-['Poppins']"
        >
          Message To Book
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12,5 19,12 12,19"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card; 