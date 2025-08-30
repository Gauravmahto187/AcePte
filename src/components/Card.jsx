import React from 'react';

const Card = ({ title, price, duration, focus, idealFor, features, nextSession, sessionType, onBookMessage, pricing }) => {
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-blue-300/50 transition-all duration-500 border border-blue-100">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-indigo-100/20 to-purple-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Header with gradient background */}
      <div className="relative bg-sky-600 p-6 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/15 rounded-full translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-500"></div>
        
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-2 font-['Poppins'] tracking-wide">
            {title}
          </h2>
        </div>
      </div>

      {/* Price positioned at the border between blue and white */}
      <div className="relative -mt-6 -mb-2 flex justify-start pl-6">
        {/* Desktop Price - Hidden on mobile */}
        <div className="relative group hidden md:block">
          {/* Main price container */}
          <div className="relative bg-orange-600 px-4 py-2 rounded-lg shadow-lg hover:rotate-0 hover:scale-105 transition-all duration-300">
            {/* Price text */}
            <span className="text-white font-bold text-lg font-['Poppins'] tracking-wide">
              {price}
            </span>
          </div>
        </div>

        {/* Mobile Price - Simple and compact */}
        <div className="md:hidden">
          <div className="bg-orange-600 px-4 py-2 rounded-lg shadow-md">
            <span className="text-white font-bold text-lg font-['Poppins']">
              {price}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6 relative z-10">
        {/* Duration - only show for cards without pricing */}
        {!pricing && (
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12,6 12,12 16,14"></polyline>
              </svg>
            </div>
            <div>
              <span className="text-black text-lg font-bold font-['Inter']">Duration:</span>
              <p className="text-black font-semibold font-['Poppins'] text-base">{duration}</p>
            </div>
          </div>
        )}

        {/* Pricing Breakdown (for custom prices) */}
        {pricing && (
          <div className="space-y-2 pl-1 mb-2">
            <span className="text-black text-lg font-bold font-['Inter']">Duration & Pricing:</span>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                <span className="text-gray-700 font-medium font-['Inter']">1 Week</span>
                <span className="text-emerald-600 font-bold font-['Poppins']">NRS 4000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                <span className="text-gray-700 font-medium font-['Inter']">10 Days</span>
                <span className="text-emerald-600 font-bold font-['Poppins']">NRS 5000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                <span className="text-gray-700 font-medium font-['Inter']">2 Weeks</span>
                <span className="text-emerald-600 font-bold font-['Poppins']">NRS 7000</span>
              </div>
            </div>
          </div>
        )}

        {/* Focus */}
        <div className="space-y-0">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
            <span className="text-black text-lg font-bold font-['Inter']">Focus:</span>
          </div>
          <p className="text-black font-normal text-base leading-relaxed pl-7 font-['Inter']">
            {focus}
          </p>
        </div>

        {/* Ideal For */}
        <div className="space-y-0">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span className="text-black text-lg font-bold font-['Inter']">Ideal For:</span>
          </div>
          <p className="text-black text-base leading-relaxed pl-7 font-['Inter']">
            {idealFor}
          </p>
        </div>

        {/* Features */}
        <div className="space-y-0">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22,4 12,14.01 9,11.01"></polyline>
            </svg>
            <span className="text-black text-lg font-bold font-['Inter']">Features:</span>
          </div>
          <ul className="space-y-2 pl-7">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-base text-black font-['Inter']">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Next Session */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 space-y-0">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span className="text-black text-lg font-bold font-['Inter']">Next Sessions:</span>
          </div>
          <div className="text-black font-semibold text-base pl-7 font-['Poppins']">
            {nextSession.split('\n').map((line, index) => (
              <p key={index} className={index > 0 ? 'mt-1' : ''}>
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button 
          onClick={() => onBookMessage(sessionType)}
          className="w-full bg-sky-600 hover:bg-sky-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-blue-300/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group font-['Poppins']"
        >
          Message On Whatsapp
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