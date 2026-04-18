import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useLang } from '../LangContext';

import { toSlug } from '../utils/slug';

// --- MODAL COMPONENT ---
const DoctorModal = ({ doctor, isOpen, onClose }) => {
  if (!isOpen || !doctor) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-[#0f5c4d]/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white dark:bg-[#1a1c19] w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white md:text-gray-400 transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Left: Avatar Panel */}
        <div className="w-full md:w-2/5 h-48 md:h-auto relative flex items-center justify-center" style={{ background: `${doctor.color}18` }}>
          <span className="font-headline font-black text-[8rem] uppercase leading-none" style={{ color: doctor.color }}>{doctor.name.charAt(3)}</span>
          <div className="absolute bottom-4 left-6 md:hidden">
             <h2 className="text-gray-800 text-xl font-headline font-bold uppercase">{doctor.name}</h2>
             <p className="text-gray-500 text-xs font-label uppercase tracking-widest">{doctor.role}</p>
          </div>
        </div>

        {/* Right: Info Panel */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 scrollbar-hide">
          <div className="hidden md:block mb-6">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest mb-2">
               {doctor.role}
            </div>
            <h2 className="text-2xl font-headline font-black text-[#0f5c4d] dark:text-[#d1f04c] uppercase tracking-wide leading-tight">
              {doctor.name}
            </h2>
            <p className="text-gray-500 font-body text-sm mt-1">{doctor.qualification}</p>
          </div>

          <div className="space-y-6">
            {/* description */}
            <div>
              <h4 className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 flex items-center">
                 <span className="w-6 h-[1px] bg-gray-200 mr-2"></span> About Specialist
              </h4>
              <p className="text-gray-600 dark:text-gray-300 font-body text-sm leading-relaxed">
                {doctor.description || `Specialized physician at Ornob Medicity. Highly experienced in ${doctor.role.toLowerCase()} and patient care.`}
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 flex items-center">
                 <span className="w-6 h-[1px] bg-gray-200 mr-2"></span> Services & Procedures
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {doctor.services.map((s, i) => (
                  <div key={i} className="flex items-center space-x-2 text-[13px] font-body text-gray-700 dark:text-gray-400 bg-gray-50 dark:bg-white/5 p-2.5 rounded-xl border border-gray-100 dark:border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timings */}
            <div className="bg-primary/5 dark:bg-primary/10 p-5 rounded-2xl border border-primary/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="font-label text-[9px] font-black uppercase text-primary tracking-widest mb-1">OPD Timing</h4>
                <p className="font-headline font-bold text-sm text-[#0f5c4d] dark:text-white leading-tight">{doctor.timing}</p>
              </div>
              <div className="flex gap-2">
                <a href={`tel:05252297400`} className="p-2.5 bg-white dark:bg-[#2a2c29] text-primary rounded-xl shadow-sm hover:scale-110 transition-transform"><span className="material-symbols-outlined text-xl">call</span></a>
                <a href={`https://wa.me/916702776627`} className="p-2.5 bg-[#25D366] text-white rounded-xl shadow-sm hover:scale-110 transition-transform"><span className="material-symbols-outlined text-xl">chat</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- SPECIALIST CARD ---
const SpecialistCard = ({ doc, staggered = false, onOpen, isCore = false }) => {
  return (
    <div className={`relative flex flex-col items-center pt-24 ${staggered ? 'lg:mt-16' : ''}`}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-24 dotted-line opacity-40"></div>

      <div className="bg-white dark:bg-[#1a1c19] w-full max-w-[300px] rounded-[2.5rem] p-8 pb-10 shadow-[0_30px_60px_rgba(0,0,0,0.06)] dark:shadow-none dark:border dark:border-white/5 relative flex flex-col items-center group transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)]">
        
        {/* Attachment Ring */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white dark:bg-[#1a1c19] w-12 h-12 rounded-full flex items-center justify-center shadow-md">
          <div className="w-7 h-7 rounded-full border-[6px]" style={{ borderColor: doc.color }}></div>
        </div>

        {/* Core Tag */}
        {isCore && (
          <div className="absolute top-4 right-4 bg-[#d1f04c] text-[#0f5c4d] px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm">
             Core Specialist
          </div>
        )}

        {/* Avatar */}
        <div className="w-36 h-36 rounded-full mb-6 border-4 border-white dark:border-[#2a2c29] shadow-lg flex items-center justify-center transition-transform duration-500 group-hover:scale-105" style={{ background: `${doc.color}22` }}>
          <span className="font-headline font-black text-5xl uppercase" style={{ color: doc.color }}>{doc.name.charAt(3)}</span>
        </div>

        <h3 className="font-headline text-lg font-bold text-gray-900 dark:text-white text-center leading-tight">{doc.name}</h3>
        <div className="w-8 h-1 rounded-full my-3" style={{ backgroundColor: doc.color }}></div>
        <p className="font-label text-[11px] uppercase tracking-wider font-bold text-gray-400 dark:text-gray-500 text-center mb-2 line-clamp-2 min-h-[32px]">{doc.role}</p>
        <p className="font-body text-[11px] text-gray-400 dark:text-gray-500 text-center mb-10 opacity-80">{doc.qualification}</p>

        <button 
          onClick={onOpen}
          className="w-full text-center py-3 rounded-2xl text-white font-label font-bold text-[10px] uppercase tracking-[0.2em] transition-all shadow-lg hover:brightness-110 active:scale-95"
          style={{ backgroundColor: doc.color }}
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default function Doctors() {
  const { d } = useLang();
  const location = useLocation();
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  
  const doctors = useMemo(() => d.doctorsData || [], [d.doctorsData]);
  const coreDoctors = doctors.slice(0, 2);
  const otherDoctors = doctors.slice(2);

  // Auto-open logic if coming from another page (e.g. DepartmentDetail)
  useEffect(() => {
    const targetName = location.state?.openSpecialist || location.state?.openDoctor;
    if (targetName) {
      const doc = doctors.find(d => 
        d.name === targetName || toSlug(d.name) === targetName
      );
      if (doc) setTimeout(() => setSelectedDoctor(doc), 0);
    }
  }, [location.state, doctors]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedDoctor) {
      document.body.style.overflow = 'hidden';
    } else {
       document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedDoctor]);

  return (
    <div className="bg-[#f8f9fb] dark:bg-[#121411] min-h-screen pt-12 pb-32 overflow-x-hidden">
      
      {/* Search/Header UI */}
      <div className="max-w-7xl mx-auto px-6 mt-20 mb-12 flex flex-col items-center">
         <h1 className="font-headline text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#0f5c4d] dark:text-[#d1f04c] mb-4 text-center">
           {d.meet_specialists}
         </h1>
         <div className="w-24 h-2 bg-[#d1f04c] rounded-full mb-8"></div>
      </div>

      {/* --- CORE SPECIALISTS --- */}
      <div className="max-w-[1400px] mx-auto px-6 mb-24">
        <div className="flex items-center space-x-4 mb-12">
           <span className="font-label text-xs font-black uppercase tracking-[0.3em] text-[#0f5c4d]">Core Team</span>
           <div className="h-[1px] flex-grow bg-gray-200"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
          {coreDoctors.map((doc, idx) => (
            <div key={idx} className="flex justify-center">
               <SpecialistCard 
                doc={doc} 
                isCore={true}
                onOpen={() => setSelectedDoctor(doc)} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- OTHER SPECIALISTS --- */}
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center space-x-4 mb-12">
           <span className="font-label text-xs font-black uppercase tracking-[0.3em] text-[#0f5c4d]">Multi Speciality Grid</span>
           <div className="h-[1px] flex-grow bg-gray-200"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16 lg:gap-y-0">
          {otherDoctors.map((doc, idx) => (
            <SpecialistCard 
              key={idx} 
              doc={doc} 
              staggered={idx % 2 !== 0} 
              onOpen={() => setSelectedDoctor(doc)} 
            />
          ))}
        </div>
      </div>

      {/* Doctor Info Modal */}
      <DoctorModal 
        doctor={selectedDoctor} 
        isOpen={!!selectedDoctor} 
        onClose={() => setSelectedDoctor(null)} 
      />

    </div>
  );
}
