import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../LangContext';

const FEATURED_PROCEDURES = [
  {
    title:   'Knee Replacement',
    titleHi: 'घुटना प्रत्यारोपण',
    icon:    'orthopedics',
    color:   'from-blue-600 to-blue-800',
    badge:   'Most Popular',
    badgeColor: 'bg-blue-500',
    img:     'https://www.shalyaortho.com/images/totalkneereplacement.jpg',
    dept:    '/departments/orthopedic',
    tag:     'Orthopedic',
  },
  {
    title:   'Hip Replacement',
    titleHi: 'हिप प्रत्यारोपण',
    icon:    'accessibility_new',
    color:   'from-purple-600 to-purple-800',
    badge:   'Advanced',
    badgeColor: 'bg-purple-500',
    img:     'https://domf5oio6qrcr.cloudfront.net/medialibrary/11564/1dc98043-caaf-46ae-a380-a2fa4cea97eb.jpg',
    dept:    '/departments/orthopedic',
    tag:     'Orthopedic',
  },
  {
    title:   'Spine Surgery',
    titleHi: 'रीढ़ की सर्जरी',
    icon:    'personal_injury',
    color:   'from-cyan-600 to-cyan-800',
    badge:   'Expert Care',
    badgeColor: 'bg-cyan-500',
    img:     'https://sa1s3optim.patientpop.com/assets/images/provider/photos/2735261.jpeg',
    dept:    '/departments/orthopedic',
    tag:     'Orthopedic',
  },
  {
    title:   'IVF Treatment',
    titleHi: 'आईवीएफ उपचार',
    icon:    'child_friendly',
    color:   'from-pink-500 to-rose-700',
    badge:   'Fertility',
    badgeColor: 'bg-pink-500',
    img:     'https://ferticity.com/wp-content/uploads/2023/08/Ivf-Treatment.jpg',
    dept:    '/departments/gynecology',
    tag:     'Gynecology',
  },
  {
    title:   'Normal Delivery',
    titleHi: 'सामान्य प्रसव',
    icon:    'pregnant_woman',
    color:   'from-teal-500 to-teal-700',
    badge:   'Safe & Natural',
    badgeColor: 'bg-teal-500',
    img:     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWiU8lKevAP-AJX3d-XMoMfFeGxzM8xuEL7w&s',
    dept:    '/departments/gynecology',
    tag:     'Gynecology',
  },
  {
    title:   'C-Section',
    titleHi: 'सिजेरियन सेक्शन',
    icon:    'medical_services',
    color:   'from-emerald-600 to-emerald-800',
    badge:   'Expert Surgical',
    badgeColor: 'bg-emerald-500',
    img:     'https://panaceahospitals.in/wp-content/uploads/2026/01/Panacea-maternity-Centre-Dehradun-1.jpg',
    dept:    '/departments/gynecology',
    tag:     'Gynecology',
  },
];

export default function Home({ onBookAppointment }) {
  const { lang, d } = useLang();
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);

  // Auto-slide logic
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % d.testimonials.list.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [d.testimonials.list.length]);


  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-[100px] sm:pt-[120px] pb-12 sm:pb-24 px-4 sm:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-center">
        <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
          <div className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-4 py-2 rounded-full font-label text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            {d.ayushman_banner}
          </div>
          <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold uppercase leading-snug sm:leading-tight tracking-wide text-primary">
            {d.hero_title}
          </h1>
          <p className="text-base sm:text-xl text-on-surface-variant font-body mb-6 sm:mb-8">
            {d.hero_subtitle}
          </p>
          <div className="flex flex-col xs:flex-row space-y-4 xs:space-y-0 xs:space-x-4 sm:space-x-6 pt-4 justify-center lg:justify-start">
            <button onClick={onBookAppointment} className="bg-tertiary-fixed text-on-tertiary-fixed px-6 sm:px-8 py-3 sm:py-4 rounded-md font-label text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-tertiary-fixed-dim transition-colors whitespace-nowrap">{d.book_appointment}</button>
            <button className="bg-primary text-on-primary px-6 sm:px-8 py-3 sm:py-4 rounded-md font-label text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-primary-container transition-colors whitespace-nowrap">{d.whatsapp_now}</button>
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container rounded-3xl transform rotate-3 scale-105 -z-10 opacity-20"></div>
          <img
            alt="Modern hospital exterior and medical professionals"
            className="rounded-3xl w-full h-auto object-cover shadow-[0px_20px_40px_rgba(26,28,25,0.06)]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz1YddK_nklkHk56m3avsktsFWBY7rFAmMUNQyilMqdBZpfXMuK6l18wnzU3Ql8wKEHIxHnFd_rNm88ruVCB34kPYl8ybkOcngYOT1lua3B1FUGG7BBRncIJZIaLFiaq1-IlKmdxmhF1qgs6D0h7WPvH2GDXa4Teukw7ovV4RXsAdiD6vevlvGt7m90ySxEEBjsqMKI6gC-RGnoxVxCpYxUAw1-8cV_WAcyhweYhttxsPiZTIgwHjwUxXUfp-U9y3txlANe_sPBFU"
          />
        </div>
      </section>

      {/* ── HIGHLIGHT STRIP ── */}
      <div className="bg-surface-container-low py-4 sm:py-6 px-4 sm:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center sm:justify-between items-center text-primary font-headline uppercase font-bold text-[10px] sm:text-sm tracking-widest opacity-80 gap-4 sm:gap-8">
          <span>{d.strip_knee}</span>
          <span>{d.strip_ivf}</span>
          <span className="hidden xs:inline">{d.strip_spine}</span>
          <span className="hidden sm:inline">{d.strip_delivery}</span>
          <span className="hidden md:inline">{d.strip_ayushman}</span>
        </div>
      </div>

      {/* ── QUICK SERVICES GRID ── */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {[
            { icon: 'bone',        label: d.ortho,    slug: 'orthopedic',     color: 'text-primary' },
            { icon: 'pregnant_woman',  label: d.gyno,     slug: 'gynecology',     color: 'text-primary' },
            { icon: 'emergency',       label: d.emergency,slug: 'emergency-trauma',color: 'text-error'   },
            { icon: 'medical_services',label: d.gensurg,  slug: 'general-surgery',color: 'text-primary' },
          ].map((item) => (
            <Link
              key={item.slug}
              to={`/departments/${item.slug}`}
              className="bg-surface-container-lowest p-4 sm:p-8 rounded-xl flex flex-col items-center justify-center text-center shadow-[0px_20px_40px_rgba(26,28,25,0.06)] hover:shadow-lg transition-all bg-gradient-to-br from-surface to-surface-container-low hover:-translate-y-1 transform duration-300"
            >
              <span className={`material-symbols-outlined text-4xl ${item.color} mb-4`}>{item.icon}</span>
              <h3 className="font-headline font-bold uppercase text-primary tracking-wider">{item.label}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROCEDURES (HIGH CONVERSION) ── */}
      <section className="py-14 sm:py-24 px-4 sm:px-8 bg-gradient-to-br from-[#0a1628] to-[#0f2744] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-white/10 text-white/70 px-5 py-2 rounded-full font-label text-xs font-bold uppercase tracking-widest mb-4 border border-white/10">
              ⚡ High Conversion Procedures
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase text-white tracking-wide mb-4">
              {d.featured_procedures_title || 'Featured Procedures'}
            </h2>
            <p className="text-white/60 font-body max-w-xl mx-auto text-base leading-relaxed">
              {d.featured_procedures_sub || 'World-class surgical and medical treatments performed by expert specialists at Ornob Medicity, Payagpur.'}
            </p>
          </div>

          {/* Procedure Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {FEATURED_PROCEDURES.map((proc) => (
              <Link
                key={proc.title}
                to={proc.dept}
                className="group relative rounded-2xl overflow-hidden shadow-2xl hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={proc.img}
                    alt={proc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${proc.color} opacity-80 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-7 flex flex-col h-full min-h-[280px] justify-between">
                  <div className="flex items-start justify-between">
                    {/* Badge */}
                    <span className={`${proc.badgeColor} text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full`}>
                      {proc.badge}
                    </span>
                    {/* Tag */}
                    <span className="bg-white/15 text-white/80 text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full border border-white/20">
                      {proc.tag}
                    </span>
                  </div>

                  <div>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/20">
                      <span className="material-symbols-outlined text-white text-2xl">{proc.icon}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-headline font-bold text-white text-2xl uppercase tracking-wide leading-tight mb-1">
                      {lang === 'hi' ? proc.titleHi : proc.title}
                    </h3>

                    {/* Dept link */}
                    <div className="flex items-center text-white/70 text-sm font-label uppercase tracking-wider group-hover:text-white transition-colors mt-3">
                      <span>{d.explore || 'Explore'}</span>
                      <span className="material-symbols-outlined text-base ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-14">
            <Link
              to="/departments"
              className="inline-flex items-center bg-white text-[#0a1628] px-10 py-4 rounded-md font-label text-sm font-bold uppercase tracking-widest hover:bg-white/90 transition-colors shadow-lg"
            >
              <span className="material-symbols-outlined mr-2 text-base">apps</span>
              {d.view_all_departments || 'View All Departments'}
            </Link>
          </div>
        </div>
      </section>

      {/* ── DEPARTMENTS OF EXCELLENCE ── */}
      <section className="py-14 sm:py-24 px-4 sm:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-4xl font-bold uppercase text-primary mb-16 tracking-wide text-center">{d.dept_title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { label: d.ortho,      desc: d.desc_ortho,   slug: 'orthopedic'       },
              { label: `${d.gyno} & Obstetrics`, desc: d.desc_gyno, slug: 'gynecology' },
              { label: d.gensurg,   desc: d.desc_gensurg, slug: 'general-surgery'   },
              { label: d.genmed,    desc: d.desc_genmed,  slug: 'general-medicine'  },
              { label: d.pediatrics,desc: d.desc_peds,    slug: 'pediatrics'        },
              { label: d.trauma,    desc: d.desc_trauma,  slug: 'emergency-trauma'  },
            ].map((dept) => (
              <div key={dept.slug} className="bg-surface-container-lowest p-5 sm:p-10 rounded-xl hover:-translate-y-1 transition-transform duration-300 shadow-[0px_20px_40px_rgba(26,28,25,0.06)]">
                <h3 className="font-headline font-bold uppercase text-xl text-primary mb-4">{dept.label}</h3>
                <p className="text-on-surface-variant font-body mb-6">{dept.desc}</p>
                <Link
                  to={`/departments/${dept.slug}`}
                  className="text-primary font-headline uppercase text-sm font-bold tracking-wider hover:text-tertiary-fixed transition-colors inline-flex items-center group"
                >
                  {d.explore}
                  <span className="material-symbols-outlined text-base ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-14 sm:py-24 px-4 sm:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold uppercase text-primary tracking-wide mb-4">
              {d.why_choose_us.title}
            </h2>
            <div className="w-20 h-1.5 bg-tertiary-fixed mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {d.why_choose_us.list.map((item, idx) => (
              <div key={idx} className="bg-surface-container-low p-8 rounded-[2rem] border border-surface-container-high/30 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-surface-container-highest flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="font-headline text-xl font-bold uppercase text-primary mb-3 tracking-wide">{item.title}</h3>
                <p className="font-body text-on-surface-variant leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-14 sm:py-24 px-4 sm:px-8 bg-surface-container-low overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
               <h2 className="font-headline text-4xl font-bold uppercase text-primary tracking-wide mb-4">
                {d.testimonials.title}
              </h2>
              <p className="text-on-surface-variant font-body">Real experiences shared by our valued patients across Google Reviews and face-to-face feedback.</p>
            </div>
          </div>

          <div className="relative overflow-hidden min-h-[350px]">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {d.testimonials.list.map((t, idx) => (
                <div key={idx} className="min-w-full px-2">
                  <div className="bg-surface-container-lowest p-6 sm:p-10 rounded-[2.5rem] shadow-sm flex flex-col h-full border border-surface-container-high/20 max-w-3xl mx-auto text-center">
                    {/* Google branding row */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Google Review</span>
                    </div>
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-5">
                      {[...Array(t.rating)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[#FFD700] fill-1 text-2xl">star</span>
                      ))}
                    </div>
                    <p className="font-body text-base sm:text-lg text-on-surface dark:text-gray-200 italic mb-8 leading-relaxed">"{t.text}"</p>
                    <div className="flex flex-col items-center gap-3 mt-auto">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-headline font-black text-xl uppercase shadow-inner">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-headline font-black uppercase text-sm tracking-widest text-[#0f5c4d] dark:text-white">{t.name}</h4>
                        <p className="text-[10px] font-semibold text-gray-400 tracking-wider mt-0.5">{t.badge}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Dots */}
            <div className="flex justify-center gap-3 mt-12">
              {d.testimonials.list.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeTestimonial === i ? 'w-8 bg-primary' : 'w-2 bg-primary/20 hover:bg-primary/40'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
