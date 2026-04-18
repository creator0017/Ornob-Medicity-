import React from 'react';
import { useLang } from '../LangContext';

function Section({ title, children, icon, light = false }) {
  return (
    <div className={`py-12 sm:py-20 px-6 sm:px-8 ${light ? 'bg-surface-container-low' : 'bg-surface'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-2xl">{icon}</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold uppercase text-primary tracking-wide">
            {title}
          </h2>
        </div>
        <div className="text-on-surface-variant font-body leading-relaxed text-base sm:text-lg">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function AyushmanScheme() {
  const { d } = useLang();
  const page = d.ayushman_page;

  if (!page) return null;

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 px-8 overflow-hidden bg-[#004337]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #d1f04c 0%, transparent 50%)' }} />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
           <div className="inline-flex items-center gap-2 bg-[#d1f04c] text-[#004337] px-4 py-2 rounded-full font-label text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-[#004337] animate-pulse"></span>
              Government Panel Hospital
           </div>
           <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-tight mb-6 drop-shadow-lg">
             {page.title}
           </h1>
           <p className="text-[#d1f04c] font-body text-lg sm:text-xl font-medium max-w-2xl mx-auto">
             Get quality treatment and surgeries up to ₹5 Lakhs annually at NO COST.
           </p>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <Section title={page.about.title} icon="info">
        <p>{page.about.desc}</p>
      </Section>

      {/* ── FREE TREATMENT ── */}
      <Section title={page.free_treatment.title} icon="medical_services" light>
        <p className="mb-8">{page.free_treatment.desc}</p>
        <div className="bg-white dark:bg-[#1a1c19] p-8 rounded-[2rem] border-2 border-dashed border-tertiary-fixed/30 shadow-xl">
           <h3 className="font-headline font-bold text-xl text-primary uppercase mb-6 flex items-center gap-2">
             <span className="material-symbols-outlined text-tertiary-fixed">check_circle</span>
             {page.covered_surgeries.title}
           </h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {page.covered_surgeries.list.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-surface-container-low p-4 rounded-xl border border-surface-container-high/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed"></span>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
           </div>
        </div>
      </Section>

      {/* ── ELIGIBILITY & DOCS ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto my-12 gap-8 px-6">
         {/* Eligibility */}
         <div className="bg-primary/5 p-10 rounded-[2.5rem] border border-primary/10">
            <h3 className="font-headline text-2xl font-bold uppercase text-primary mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined">groups</span>
              {page.eligibility.title}
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              {page.eligibility.desc}
            </p>
         </div>

         {/* Documents */}
         <div className="bg-tertiary-fixed/5 p-10 rounded-[2.5rem] border border-tertiary-fixed/10">
            <h3 className="font-headline text-2xl font-bold uppercase text-tertiary-fixed mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined">description</span>
              {page.documents.title}
            </h3>
            <ul className="space-y-4">
              {page.documents.list.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-on-surface-variant font-medium">
                  <span className="w-8 h-8 rounded-full bg-tertiary-fixed/20 text-tertiary-fixed flex items-center justify-center font-headline font-bold text-xs">{i+1}</span>
                  {item}
                </li>
              ))}
            </ul>
         </div>
      </div>

      {/* ── HOW TO AVAIL ── */}
      <Section title={page.how_to_avail.title} icon="help_center" light>
        <div className="bg-white dark:bg-[#1a1c19] p-8 rounded-3xl shadow-lg border border-primary/10">
           <p className="mb-4">{page.how_to_avail.desc}</p>
           <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="tel:05252297400" className="flex-1 bg-primary text-on-primary text-center py-4 rounded-xl font-label font-bold uppercase text-sm shadow-md hover:opacity-90 transition-opacity">
                Call Ayushman Mitra
              </a>
              <a href="https://wa.me/916702776627" className="flex-1 bg-white border-2 border-primary text-primary text-center py-4 rounded-xl font-label font-bold uppercase text-sm hover:bg-primary/5 transition-colors">
                Quick Enquiry
              </a>
           </div>
        </div>
      </Section>

      {/* ── FOOTER NOTICE ── */}
      <section className="py-20 bg-gradient-to-br from-tertiary-fixed to-primary text-center px-8">
         <span className="material-symbols-outlined text-6xl text-white mb-6">verified_user</span>
         <h2 className="text-white font-headline text-3xl font-black uppercase mb-4">Quality Care for Everyone</h2>
         <p className="text-white/80 font-body max-w-xl mx-auto">
            Ornob Medicity is proud to be a part of the PMJAY mission to provide accessible healthcare to all citizens of India.
         </p>
      </section>

    </div>
  );
}
