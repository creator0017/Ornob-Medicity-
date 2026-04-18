import React from 'react';
import { useLang } from '../LangContext';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { d } = useLang();
  
  return (
    <>
      <footer className="bg-[#f4f4ef] dark:bg-[#121411] w-full py-12 sm:py-20 px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6 text-[#0f5c4d]">
              <img src={logo} alt="Ornob Medicity Logo" className="h-[100px] w-auto object-contain mr-4" />
              <span className="text-xl font-black uppercase font-headline">{d.brand}</span>
            </div>
            <p className="font-body text-xs text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              {d.footer_desc}
            </p>
            <div className="flex items-center gap-4">
               <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#0f5c4d] flex items-center justify-center text-[#d1f04c] hover:scale-110 transition-transform cursor-pointer shadow-sm">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
               </a>
               <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#0f5c4d] flex items-center justify-center text-[#d1f04c] hover:scale-110 transition-transform cursor-pointer shadow-sm">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline uppercase text-[11px] font-black tracking-widest text-[#0f5c4d] dark:text-[#d1f04c] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-500 dark:text-gray-400 font-label text-[11px] uppercase tracking-wider hover:text-primary transition-colors">{d.home}</Link></li>
              <li><Link to="/doctors" className="text-gray-500 dark:text-gray-400 font-label text-[11px] uppercase tracking-wider hover:text-primary transition-colors">{d.doctors}</Link></li>
              <li><Link to="/facilities" className="text-gray-500 dark:text-gray-400 font-label text-[11px] uppercase tracking-wider hover:text-primary transition-colors">{d.facilities}</Link></li>
              <li><Link to="/blog" className="text-gray-500 dark:text-gray-400 font-label text-[11px] uppercase tracking-wider hover:text-primary transition-colors">{d.blog}</Link></li>
              <li><Link to="/contact" className="text-gray-500 dark:text-gray-400 font-label text-[11px] uppercase tracking-wider hover:text-primary transition-colors">{d.contact}</Link></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-headline uppercase text-[11px] font-black tracking-widest text-[#0f5c4d] dark:text-[#d1f04c] mb-6">Departments</h4>
            <ul className="space-y-3">
              <li><Link to="/departments/orthopedic" className="text-gray-500 dark:text-gray-400 font-label text-[11px] uppercase tracking-wider hover:text-primary transition-colors">{d.ortho}</Link></li>
              <li><Link to="/departments/gynecology" className="text-gray-500 dark:text-gray-400 font-label text-[11px] uppercase tracking-wider hover:text-primary transition-colors">{d.gyno}</Link></li>
              <li><Link to="/departments/emergency-trauma" className="text-gray-500 dark:text-gray-400 font-label text-[11px] uppercase tracking-wider hover:text-primary transition-colors">{d.trauma}</Link></li>
              <li><Link to="/departments/general-surgery" className="text-gray-500 dark:text-gray-400 font-label text-[11px] uppercase tracking-wider hover:text-primary transition-colors">{d.gensurg}</Link></li>
            </ul>
          </div>

          {/* Contact & Ayushman */}
          <div className="space-y-8">
            <div>
              <h4 className="font-headline uppercase text-[11px] font-black tracking-widest text-[#0f5c4d] dark:text-[#d1f04c] mb-6">Contact Info</h4>
              <p className="text-gray-500 dark:text-gray-400 font-body text-xs mb-2">Gonda Road, Payagpur, UP</p>
              <p className="text-primary font-headline font-bold text-sm">05252-297400</p>
            </div>
            
            <div className="bg-[#d1f04c] p-5 rounded-2xl border border-primary/10 flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-[#004337] text-[#d1f04c] flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-xl">verified</span>
               </div>
               <div>
                  <p className="text-[#004337] font-headline font-black text-[10px] uppercase tracking-widest leading-none">Ayushman Accepted</p>
                  <p className="text-[#004337]/60 font-body text-[9px] mt-1">Cashless for all card holders</p>
               </div>
            </div>
          </div>

        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#0f5c4d]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[10px] uppercase tracking-widest text-gray-400">© 2024 {d.brand}, Payagpur. All rights reserved.</p>
          <div className="flex gap-6">
             <Link to="/privacy" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-primary transition-colors">Privacy</Link>
             <Link to="/terms" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </footer>

    </>
  );
}
