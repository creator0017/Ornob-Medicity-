import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLang } from '../LangContext';
import { toSlug } from '../utils/slug';
import { t } from '../translations';

// Department link map by role keywords
const getDeptLink = (role = '') => {
  if (/ortho|spine|joint/i.test(role))   return { slug: 'orthopedic',      label: 'Orthopedic' };
  if (/gynec|obstet|women/i.test(role))  return { slug: 'gynecology',      label: 'Gynecology & Obstetrics' };
  if (/surgeon|lapar/i.test(role))       return { slug: 'general-surgery', label: 'General Surgery' };
  if (/physician|medicine/i.test(role))  return { slug: 'general-medicine',label: 'General Medicine' };
  if (/child|pediatr/i.test(role))       return { slug: 'pediatrics',       label: 'Pediatrics' };
  if (/neuro|brain/i.test(role))         return { slug: 'emergency-trauma', label: 'Emergency & Trauma' };
  return null;
};

// Icon by role
const getRoleIcon = (role = '') => {
  if (/ortho|spine|joint/i.test(role))   return 'orthopedics';
  if (/gynec|obstet|women/i.test(role))  return 'pregnant_woman';
  if (/eye|ophthal/i.test(role))         return 'visibility';
  if (/chest|pulm|respir/i.test(role))   return 'air';
  if (/surgeon|lapar/i.test(role))       return 'medical_services';
  if (/child|pediatr/i.test(role))       return 'child_care';
  if (/neuro|brain/i.test(role))         return 'neurology';
  if (/urol|kidney/i.test(role))         return 'water_drop';
  if (/physician|medicine/i.test(role))  return 'stethoscope';
  return 'person';
};

// Badge colors by role
const getBadgeStyle = (role = '') => {
  if (/ortho|spine/i.test(role))   return 'bg-blue-600';
  if (/gynec|obstet/i.test(role))  return 'bg-pink-500';
  if (/eye/i.test(role))           return 'bg-emerald-500';
  if (/chest|pulm/i.test(role))    return 'bg-yellow-500';
  if (/surgeon/i.test(role))       return 'bg-purple-600';
  if (/child|pediatr/i.test(role)) return 'bg-rose-500';
  if (/neuro|brain/i.test(role))   return 'bg-red-600';
  if (/urol|kidney/i.test(role))   return 'bg-cyan-600';
  return 'bg-primary';
};

export default function DoctorDetail() {
  const { slug } = useParams();
  const { d } = useLang();

  // Always find by slug from English names (slugs are English-based)
  const enDoctors = t.en.doctorsData || [];
  const enIdx = enDoctors.findIndex(doc => toSlug(doc.name) === slug);
  const doc    = d.doctorsData?.[enIdx];   // translated (EN or HI)
  const enDoc  = enDoctors[enIdx];          // always English (img, color, timing)

  if (!doc || !enDoc) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface text-on-surface pt-24">
        <span className="material-symbols-outlined text-6xl text-primary mb-4">person_off</span>
        <h1 className="font-headline text-3xl font-bold text-primary mb-4">Doctor Not Found</h1>
        <p className="text-on-surface-variant mb-8">No matching doctor profile found.</p>
        <Link to="/doctors" className="bg-primary text-on-primary px-8 py-3 rounded-md font-label text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
          Back to Doctors
        </Link>
      </div>
    );
  }

  const deptLink = getDeptLink(enDoc.role);
  const badgeBg  = getBadgeStyle(enDoc.role);
  const roleIcon = getRoleIcon(enDoc.role);

  return (
    <div className="min-h-screen bg-surface text-on-surface">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${enDoc.color}22 0%, #ffffff00 100%)` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-container/90" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: enDoc.color, filter: 'blur(80px)', transform: 'translate(30%, -30%)' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 pt-32 sm:pt-36 pb-12 sm:pb-16">
          {/* Breadcrumb */}
          <Link to="/doctors" className="inline-flex items-center text-on-primary/70 hover:text-on-primary text-xs sm:text-sm font-label uppercase tracking-wider mb-6 sm:mb-8 transition-colors group">
            <span className="material-symbols-outlined mr-1 text-base group-hover:-translate-x-1 transition-transform">arrow_back</span>
            All Doctors
          </Link>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Doctor Photo */}
            <div className="flex-shrink-0">
              <div
                className="w-44 h-44 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-2xl border-4"
                style={{ borderColor: enDoc.color }}
              >
                <img src={enDoc.img} alt={doc.name} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-on-primary">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className={`${badgeBg} text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1.5`}>
                  <span className="material-symbols-outlined text-sm">{roleIcon}</span>
                  {doc.role}
                </span>
                {deptLink && (
                  <Link
                    to={`/departments/${deptLink.slug}`}
                    className="bg-on-primary/15 hover:bg-on-primary/25 text-on-primary text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full border border-on-primary/20 transition-colors"
                  >
                    🏥 {deptLink.label} Dept →
                  </Link>
                )}
              </div>

              <h1 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-wide mb-2 text-white drop-shadow-lg">
                {doc.name}
              </h1>
              <p className="text-on-primary/80 font-body text-lg mb-1">{doc.qualification}</p>
              <p className="text-on-primary/60 font-body text-sm">{doc.description}</p>

              {/* Quick stat pills */}
              <div className="flex flex-wrap gap-3 mt-6">
                <div className="flex items-center gap-2 bg-on-primary/15 border border-on-primary/20 rounded-full px-4 py-2 text-sm text-on-primary font-label">
                  <span className="material-symbols-outlined text-base">schedule</span>
                  {enDoc.timing}
                </div>
                <div className="flex items-center gap-2 bg-on-primary/15 border border-on-primary/20 rounded-full px-4 py-2 text-sm text-on-primary font-label">
                  <span className="material-symbols-outlined text-base">location_on</span>
                  Ornob Medicity, Payagpur
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT GRID ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left: Procedures + About */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">

          {/* About */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-sm border border-surface-container-high/20">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: `${enDoc.color}22` }}>
                <span className="material-symbols-outlined text-lg sm:text-xl" style={{ color: enDoc.color }}>info</span>
              </div>
              <h2 className="font-headline text-lg sm:text-xl font-bold uppercase text-primary tracking-wide">About</h2>
            </div>
            <p className="text-on-surface-variant font-body leading-relaxed text-sm sm:text-base">
              {doc.description} — practicing at <strong>Ornob Medicity, Payagpur</strong>. Highly experienced in {doc.role.toLowerCase()}, committed to compassionate and evidence-based treatment.
            </p>
          </div>

          {/* Procedures Performed */}
          <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm border border-surface-container-high/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: `${enDoc.color}22` }}>
                <span className="material-symbols-outlined text-xl" style={{ color: enDoc.color }}>healing</span>
              </div>
              <h2 className="font-headline text-xl font-bold uppercase text-primary tracking-wide">
                {d.services_and_treatments || 'Procedures & Services'}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {doc.services.map((s, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-surface-container-high/30 bg-surface-container-low hover:-translate-y-0.5 transition-transform">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold font-headline"
                    style={{ backgroundColor: `${enDoc.color}22`, color: enDoc.color }}>
                    {i + 1}
                  </div>
                  <span className="font-body text-on-surface text-sm leading-snug pt-1">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Department Link */}
          {deptLink && (
            <Link
              to={`/departments/${deptLink.slug}`}
              className="flex items-center justify-between bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition-transform group"
            >
              <div>
                <p className="text-xs font-label uppercase tracking-widest opacity-70 mb-1">Related Department</p>
                <p className="font-headline font-bold text-xl uppercase tracking-wide">{deptLink.label}</p>
              </div>
              <span className="material-symbols-outlined text-3xl opacity-70 group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          )}
        </div>

        {/* Right: Sidebar */}
        <div className="space-y-6">

          {/* OPD Timings card */}
          <div className="bg-surface-container-lowest rounded-2xl p-7 shadow-sm border border-surface-container-high/20">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: `${enDoc.color}22` }}>
                <span className="material-symbols-outlined text-xl" style={{ color: enDoc.color }}>schedule</span>
              </div>
              <h2 className="font-headline text-lg font-bold uppercase text-primary tracking-wide">
                {d.consultation_timings || 'OPD Timings'}
              </h2>
            </div>
            <div className="bg-surface-container-low rounded-xl p-4 border border-surface-container-high/20">
              <p className="font-body text-on-surface font-medium text-sm leading-relaxed">{enDoc.timing}</p>
            </div>
            <p className="text-on-surface-variant font-body text-xs mt-3">
              📍 Ornob Medicity, Gonda Road, Payagpur, UP
            </p>
          </div>

          {/* Qualification */}
          <div className="bg-surface-container-lowest rounded-2xl p-7 shadow-sm border border-surface-container-high/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: `${enDoc.color}22` }}>
                <span className="material-symbols-outlined text-xl" style={{ color: enDoc.color }}>school</span>
              </div>
              <h2 className="font-headline text-lg font-bold uppercase text-primary tracking-wide">Qualification</h2>
            </div>
            <p className="font-body font-medium text-on-surface text-sm">{doc.qualification}</p>
          </div>

          {/* Book Appointment CTA */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <div className="p-6 text-center" style={{ background: `linear-gradient(135deg, ${enDoc.color}, ${enDoc.color}cc)` }}>
              <span className="material-symbols-outlined text-4xl text-white mb-2 block">calendar_month</span>
              <p className="font-headline font-bold text-white text-lg uppercase tracking-wide mb-4">
                {d.book_appointment || 'Book Appointment'}
              </p>
              <div className="space-y-3">
                <a
                  href="tel:05252297400"
                  id={`call-${slug}`}
                  className="flex items-center justify-center gap-2 w-full bg-white text-gray-900 py-3 rounded-xl font-label text-sm font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors shadow-md"
                >
                  <span className="material-symbols-outlined text-base">phone</span>
                  {d.call || 'Call Now'}
                </a>
                <a
                  href="https://wa.me/916702776627"
                  id={`whatsapp-${slug}`}
                  className="flex items-center justify-center gap-2 w-full bg-white/20 hover:bg-white/30 text-white border border-white/40 py-3 rounded-xl font-label text-sm font-bold uppercase tracking-wider transition-colors"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  {d.whatsapp_now || 'WhatsApp Now'}
                </a>
              </div>
            </div>
          </div>

          {/* Ayushman badge */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center">
            <span className="text-2xl block mb-2">🟢</span>
            <p className="text-emerald-800 font-body font-bold text-sm">Ayushman Bharat Empanelled</p>
            <p className="text-emerald-600 font-body text-xs mt-1">Free treatment for card holders</p>
          </div>
        </div>
      </section>
    </div>
  );
}
