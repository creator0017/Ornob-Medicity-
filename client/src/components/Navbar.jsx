import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../LangContext';
import logo from '../assets/logo.png';

function NavLinks({ mobile = false, onClose, d }) {
  return (
    <>
      <Link to="/" onClick={onClose} className={`${mobile ? 'block py-4 text-lg border-b border-gray-100 dark:border-gray-800' : 'text-sm'} text-[#0f5c4d] dark:text-[#d1f04c] font-bold hover:text-[#d1f04c] transition-colors duration-300 font-label uppercase tracking-wider`}>{d.home}</Link>
      <Link to="/about" onClick={onClose} className={`${mobile ? 'block py-4 text-lg border-b border-gray-100 dark:border-gray-800' : 'text-sm'} text-[#1a1c19] dark:text-[#fafaf5] opacity-70 hover:text-[#d1f04c] transition-colors duration-300 font-label uppercase tracking-wider`}>About</Link>
      <Link to="/departments" onClick={onClose} className={`${mobile ? 'block py-4 text-lg border-b border-gray-100 dark:border-gray-800' : 'text-sm'} text-[#1a1c19] dark:text-[#fafaf5] opacity-70 hover:text-[#d1f04c] transition-colors duration-300 font-label uppercase tracking-wider`}>{d.departments}</Link>
      <Link to="/doctors" onClick={onClose} className={`${mobile ? 'block py-4 text-lg border-b border-gray-100 dark:border-gray-800' : 'text-sm'} text-[#1a1c19] dark:text-[#fafaf5] opacity-70 hover:text-[#d1f04c] transition-colors duration-300 font-label uppercase tracking-wider`}>{d.doctors}</Link>
      <Link to="/facilities" onClick={onClose} className={`${mobile ? 'block py-4 text-lg border-b border-gray-100 dark:border-gray-800' : 'text-sm'} text-[#1a1c19] dark:text-[#fafaf5] opacity-70 hover:text-[#d1f04c] transition-colors duration-300 font-label uppercase tracking-wider`}>{d.facilities}</Link>
      <Link to="/ayushman-scheme" onClick={onClose} className={`${mobile ? 'block py-4 text-lg border-b border-gray-100 dark:border-gray-800' : 'text-sm'} text-[#1a1c19] dark:text-[#fafaf5] opacity-70 hover:text-[#d1f04c] transition-colors duration-300 font-label uppercase tracking-wider`}>{d.ayushman_scheme}</Link>
      <Link to="/blog" onClick={onClose} className={`${mobile ? 'block py-4 text-lg border-b border-gray-100 dark:border-gray-800' : 'text-sm'} text-[#1a1c19] dark:text-[#fafaf5] opacity-70 hover:text-[#d1f04c] transition-colors duration-300 font-label uppercase tracking-wider`}>{d.blog}</Link>
      <Link to="/contact" onClick={onClose} className={`${mobile ? 'block py-4 text-lg border-b border-gray-100 dark:border-gray-800' : 'text-sm'} text-[#1a1c19] dark:text-[#fafaf5] opacity-70 hover:text-[#d1f04c] transition-colors duration-300 font-label uppercase tracking-wider`}>{d.contact}</Link>
    </>
  );
}

export default function Navbar({ onBookAppointment }) {
  const { lang, setLang, d } = useLang();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#fafaf5]/80 dark:bg-[#1a1c19]/80 backdrop-blur-md fixed top-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4 shadow-[0px_20px_40px_rgba(26,28,25,0.06)] h-20 sm:h-24 transition-all duration-300">
        <Link to="/" className="flex items-center text-[#0f5c4d] dark:text-[#fafaf5] shrink-0">
          <img src={logo} alt="Ornob Medicity Logo" className="h-16 sm:h-20 w-auto object-contain drop-shadow-md mr-2 sm:mr-3" />
          <span className="text-base sm:text-xl font-bold uppercase tracking-tight sm:tracking-widest font-headline leading-tight pr-4">{d.brand}</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-6 items-center">
          <NavLinks d={d} onClose={() => setIsMobileMenuOpen(false)} />
        </div>

        <div className="flex flex-row items-center space-x-2 sm:space-x-5">
          {/* Language Toggle */}
          <div className="relative">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center space-x-2 text-xs sm:text-sm font-label font-bold text-[#1a1c19] dark:text-[#fafaf5] hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              <img src={lang === 'en' ? 'https://flagcdn.com/us.svg' : 'https://flagcdn.com/in.svg'} alt="Active language flag" className="w-5 h-5 rounded-full object-cover shadow-sm border border-black/10" />
              <span className="hidden xs:inline">{lang === 'en' ? 'English' : 'हिन्दी'}</span>
            </button>
            
            {isLangMenuOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsLangMenuOpen(false)}></div>
                <div className="absolute top-full right-0 mt-4 bg-white dark:bg-[#2f312e] rounded shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] py-1.5 w-44 z-50 border border-gray-100 dark:border-gray-700">
                  <div className="absolute -top-2 right-6 transform w-4 h-4 bg-white dark:bg-[#2f312e] rotate-45 border-l border-t border-gray-100 dark:border-gray-700"></div>
                  
                  <button 
                    onClick={() => { setLang('en'); setIsLangMenuOpen(false); }}
                    className="relative w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 dark:hover:bg-[#1a1c19] transition-colors text-left z-10"
                  >
                    <img src="https://flagcdn.com/us.svg" alt="English" className="w-6 h-6 rounded-full object-cover shadow-sm border border-black/10" />
                    <span className="font-label text-sm font-medium text-gray-800 dark:text-gray-100">English</span>
                  </button>
                  <div className="border-b border-gray-100 dark:border-gray-700/50 my-1 relative z-10"></div>
                  <button 
                    onClick={() => { setLang('hi'); setIsLangMenuOpen(false); }}
                    className="relative w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 dark:hover:bg-[#1a1c19] transition-colors text-left z-10"
                  >
                    <img src="https://flagcdn.com/in.svg" alt="Hindi" className="w-6 h-6 rounded-full object-cover shadow-sm border border-black/10" />
                    <span className="font-label text-sm font-medium text-gray-800 dark:text-gray-100">हिन्दी (Hindi)</span>
                  </button>
                </div>
              </>
            )}
          </div>

          <button onClick={onBookAppointment} className="hidden sm:block bg-primary hover:bg-primary-container text-on-primary border border-primary px-5 py-2 rounded-md font-label text-xs uppercase font-bold transition-all shadow-sm active:scale-95">
            {d.book_appointment}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[#0f5c4d] dark:text-white"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 z-[60] lg:hidden transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className="absolute top-0 right-0 w-[80%] max-w-[320px] h-full bg-white dark:bg-[#1a1c19] p-8 flex flex-col shadow-2xl">
          <div className="mb-12 flex justify-between items-center">
            <h2 className="font-headline font-bold text-xl text-primary uppercase">{d.brand}</h2>
            <button onClick={() => setIsMobileMenuOpen(false)} className="material-symbols-outlined text-gray-400">close</button>
          </div>
          <div className="flex-grow">
            <NavLinks mobile d={d} onClose={() => setIsMobileMenuOpen(false)} />
          </div>
          <div className="mt-auto">
            <button onClick={onBookAppointment} className="w-full bg-primary text-on-primary py-4 rounded-xl font-label text-sm uppercase font-bold shadow-lg">
              {d.book_appointment}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
