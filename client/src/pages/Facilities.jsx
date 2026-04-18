import React from 'react';
import { useLang } from '../LangContext';

export default function Facilities() {
  const { d } = useLang();
  const page = d.facilities_page;

  if (!page) return null;

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#121411] text-on-surface">
      
      {/* ── HERO ── */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-8 text-center bg-white dark:bg-[#1a1c19] shadow-sm">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl sm:text-6xl font-black uppercase text-[#0f5c4d] dark:text-[#d1f04c] mb-6 tracking-tight">
            {page.title}
          </h1>
          <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto">
            Equipped with state-of-the-art medical technology to provide superior care and diagnosis 24/7.
          </p>
          <div className="w-16 h-1 bg-[#d1f04c] mx-auto mt-8 rounded-full"></div>
        </div>
      </section>

      {/* ── FACILITIES GRID ── */}
      <section className="py-20 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {page.list.map((item, i) => (
            <div 
              key={i} 
              className="group bg-white dark:bg-[#1a1c19] p-8 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-gray-100 dark:border-white/5 transition-all duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0f5c4d]/5 text-[#0f5c4d] flex items-center justify-center mb-6 group-hover:bg-[#d1f04c] group-hover:text-[#0f5c4d] transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold uppercase text-[#0f5c4d] dark:text-white mb-4 tracking-wide group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="font-body text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                {item.desc}
              </p>
              
              {/* Decorative dots to match theme */}
              <div className="mt-8 flex gap-1.5 opacity-20">
                 {[1,2,3].map(dot => (
                   <div key={dot} className="w-1 h-1 rounded-full bg-primary"></div>
                 ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AMENITIES HIGHLIGHT ── */}
      <section className="py-20 bg-[#0f5c4d] text-white">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
           <div>
              <span className="material-symbols-outlined text-4xl text-[#d1f04c] mb-4">clinical_notes</span>
              <h4 className="font-headline font-bold uppercase text-lg mb-2">Paperless Systems</h4>
              <p className="text-white/60 text-sm">Digital health records for efficient patient tracking.</p>
           </div>
           <div>
              <span className="material-symbols-outlined text-4xl text-[#d1f04c] mb-4">hvac</span>
              <h4 className="font-headline font-bold uppercase text-lg mb-2">Safe Ventilation</h4>
              <p className="text-white/60 text-sm">HEPA filtered air in surgeries and critical units.</p>
           </div>
           <div>
              <span className="material-symbols-outlined text-4xl text-[#d1f04c] mb-4">bolt</span>
              <h4 className="font-headline font-bold uppercase text-lg mb-2">Power Backup</h4>
              <p className="text-white/60 text-sm">24/7 uninterrupted power supply for life support systems.</p>
           </div>
        </div>
      </section>

    </div>
  );
}
