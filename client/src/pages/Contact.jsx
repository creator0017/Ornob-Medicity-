import React from 'react';
import { useLang } from '../LangContext';

export default function Contact() {
  const { d } = useLang();
  const c = d.contact_page;

  if (!c) return null;

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      
      {/* ── HEADER ── */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-8 text-center bg-gradient-to-br from-[#004337] to-[#0f5c4d] text-white">
        <h1 className="font-headline text-4xl sm:text-6xl font-black uppercase tracking-tight mb-4 text-[#d1f04c]">
          {c.title}
        </h1>
        <p className="font-body text-white/70 max-w-xl mx-auto">
          We are here to help. Reach out for appointments, emergencies, or inquiries.
        </p>
      </section>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 px-4 sm:px-8 py-10 sm:py-20">
        
        {/* ── LEFT: INFO & MAP ── */}
        <div className="lg:col-span-12 xl:col-span-5 space-y-10">
          
          {/* Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-6">
            <div className="bg-surface-container-low p-8 rounded-[2rem] border border-surface-container-high/20 flex gap-5">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-sm uppercase text-primary mb-1">{c.address_label}</h3>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">{c.address_val}</p>
              </div>
            </div>

            <div className="bg-surface-container-low p-8 rounded-[2rem] border border-surface-container-high/20 flex gap-5">
              <div className="w-12 h-12 rounded-2xl bg-tertiary-fixed/10 text-tertiary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">phone</span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-sm uppercase text-tertiary-fixed mb-1">{c.phone_label}</h3>
                <p className="text-on-surface-variant text-sm font-body leading-relaxed">{c.phone_val}</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-[#1a1c19] h-[350px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1d6410.886364791641!2d81.78219285869136!3d27.402872849563824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999b9006930b3e7%3A0x3504a22a57fb2f74!2sOrnob%20Medicity%20payagpur!5e1!3m2!1sen!2sin!4v1776497874750!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Hospital Location"
            ></iframe>
          </div>
        </div>

        {/* ── RIGHT: FORM ── */}
        <div className="lg:col-span-12 xl:col-span-7">
          <div className="bg-white dark:bg-[#1a1c19] p-8 sm:p-12 rounded-[3rem] shadow-[0_30px_80px_rgba(0,0,0,0.08)] border border-gray-100 dark:border-white/5">
             <h2 className="font-headline text-2xl sm:text-3xl font-black text-[#0f5c4d] dark:text-[#d1f04c] uppercase mb-8">
               {c.form_title}
             </h2>
             
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">{c.f_name}</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-gray-50 dark:bg-[#20221f] border border-gray-100 dark:border-white/5 p-4 rounded-2xl font-body text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">{c.f_phone}</label>
                    <input type="tel" placeholder="+91 00000 00000" className="w-full bg-gray-50 dark:bg-[#20221f] border border-gray-100 dark:border-white/5 p-4 rounded-2xl font-body text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">{c.f_dept}</label>
                  <select className="w-full bg-gray-50 dark:bg-[#20221f] border border-gray-100 dark:border-white/5 p-4 rounded-2xl font-body text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none">
                    <option>{d.ortho}</option>
                    <option>{d.gyno}</option>
                    <option>{d.trauma}</option>
                    <option>{d.gensurg}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">{c.f_msg}</label>
                  <textarea rows="4" placeholder="How can we help you?" className="w-full bg-gray-50 dark:bg-[#20221f] border border-gray-100 dark:border-white/5 p-4 rounded-2xl font-body text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"></textarea>
                </div>

                <button className="w-full bg-primary text-on-primary py-5 rounded-2xl font-label font-bold uppercase tracking-[0.2em] shadow-xl hover:brightness-110 active:scale-95 transition-all">
                  {c.f_btn}
                </button>
             </form>
          </div>
        </div>

      </div>

    </div>
  );
}
