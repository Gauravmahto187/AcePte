import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-t border-blue-200 shadow-[0_-4px_16px_0_rgba(59,130,246,0.1)] mt-16 overflow-hidden">
      {/* Subtle overlay for separation */}
      <div className="absolute inset-0 pointer-events-none" style={{background: 'linear-gradient(180deg,rgba(255,255,255,0.5) 0%,rgba(240,240,255,0.2) 100%)'}}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-800 font-['Poppins'] bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-wide">
              Ace PTE
            </h3>
            <p className="text-gray-700 font-['Inter'] font-normal leading-relaxed">
              Ace PTE offers expert online coaching and proven resources to help you succeed in the PTE exam. Join us and take a confident step toward achieving your target score.
            </p>
            <button 
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-700 font-['Poppins'] px-6 py-3 rounded-xl transition-all duration-300 tracking-wide shadow-md hover:shadow-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Get Started Now
            </button>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-700 font-['Poppins'] text-gray-800 tracking-wide">
              About Us
            </h4>
            <p className="text-gray-700 font-['Inter'] font-normal leading-relaxed">
              Welcome to Ace PTE! Led by Soniya Adhikari, we provide expert guidance to help you achieve your PTE goals.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="https://www.tiktok.com/@ace.pte" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:border-blue-300 hover:bg-blue-200 group focus:outline-none focus:ring-2 focus:ring-blue-400">
                <svg className="w-5 h-5 text-blue-600 group-hover:text-blue-800 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a href="mailto:acepte03@gmail.com" className="bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:border-blue-300 hover:bg-blue-200 group focus:outline-none focus:ring-2 focus:ring-blue-400">
                <svg className="w-5 h-5 text-blue-600 group-hover:text-blue-800 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="https://wa.me/+9779708533439" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:border-blue-300 hover:bg-blue-200 group focus:outline-none focus:ring-2 focus:ring-blue-400">
                <svg className="w-5 h-5 text-blue-600 group-hover:text-blue-800 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-700 font-['Poppins'] text-gray-800 tracking-wide">
              Connect with us
            </h4>
            <div className="space-y-2 text-gray-700 font-['Inter'] font-normal">
              <div className="flex items-center space-x-2 group">
                <svg className="w-4 h-4 text-blue-600 group-hover:text-blue-800 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:acepte03@gmail.com" className="hover:underline hover:text-blue-600 transition-colors duration-200">
                  acepte03@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 group">
                <svg className="w-4 h-4 text-blue-600 group-hover:text-blue-800 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+9779708533439" className="hover:underline hover:text-blue-600 transition-colors duration-200">
                  +977 9708533439
                </a>
              </div>
                             <div className="flex items-center space-x-2 group">
                 <img src="/images/Website.png" alt="Website" className="w-4 h-4 text-blue-300 group-hover:text-blue-800 transition-colors duration-200 filter brightness-0 opacity-70 group-hover:opacity-100" />
                 <a href="https://acepte.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-600 transition-colors duration-200">
                   acepte.vercel.app
                 </a>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-blue-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 font-['Inter'] font-medium text-sm">
            <p>© 2025. All Rights Reserved to Ace PTE</p>
            <p>
              Developed by{' '}
              <a 
                href="https://gaurav-gules.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:underline hover:text-blue-700 transition-colors duration-200"
              >
                Gaurav Kumar Mahato
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;