import { Link } from 'react-router-dom';

const INFO = [
  { icon: 'location_on', label: 'Location', value: 'Gonda Road, Payagpur, Uttar Pradesh' },
  { icon: 'call', label: 'Phone', value: '05252-297400' },
  { icon: 'phone_android', label: 'Mobile / WhatsApp', value: '+91 6702776627' },
  { icon: 'emergency', label: 'Emergency', value: '24 × 7 Emergency Care Available' },
  { icon: 'verified_user', label: 'Ayushman Bharat', value: 'Empanelled Hospital — Free treatment for card holders' },
];

const DEPARTMENTS = [
  { icon: 'orthopedics', name: 'Orthopedic & Spine' },
  { icon: 'pregnant_woman', name: 'Gynecology & Obstetrics' },
  { icon: 'medical_services', name: 'General Surgery' },
  { icon: 'stethoscope', name: 'General Medicine' },
  { icon: 'child_care', name: 'Pediatrics' },
  { icon: 'emergency', name: 'Emergency & Trauma' },
];

const FACILITIES = [
  'Modular Operation Theatre (OT)',
  '24×7 Emergency & Trauma Unit',
  'Ventilator & ICU Support',
  'HDU (High Dependency Unit)',
  'IPD — General & Private Wards',
  'Multi-Speciality OPD',
  'X-Ray & Ultrasound (In-House)',
  'Full Pathology Laboratory',
  '24×7 In-House Pharmacy',
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#f8f9fb] dark:bg-[#121411] text-on-surface pb-32">

      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-[#0a1628] to-[#0f2744] pt-36 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,#17C3CE,transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-block bg-white/10 text-white/80 px-5 py-2 rounded-full font-label text-xs font-bold uppercase tracking-widest mb-6 border border-white/10">
            Ornob Medicity — Payagpur
          </div>
          <h1 className="font-headline text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-tight mb-4">
            About Our Hospital
          </h1>
          <p className="text-white/70 font-body text-lg max-w-xl mx-auto">
            A trusted multi-speciality hospital serving Payagpur and surrounding areas with advanced medical care, 24×7 emergency services, and compassionate staff.
          </p>
        </div>
      </section>

      {/* ── HOSPITAL IMAGE ── */}
      <section className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-[#1a1c19]">
          <img
            src="hospital.jpg"
            alt="Ornob Medicity Hospital Building"
            className="w-full h-72 sm:h-96 object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div
            className="hidden w-full h-72 sm:h-96 bg-gradient-to-br from-primary/20 to-primary/40 items-center justify-center"
          >
            <div className="text-center">
              <span className="material-symbols-outlined text-7xl text-primary opacity-60">apartment</span>
              <p className="text-primary font-headline font-bold uppercase mt-4">Ornob Medicity</p>
              <p className="text-gray-500 text-sm mt-1">Payagpur, Uttar Pradesh</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT TEXT ── */}
      <section className="max-w-5xl mx-auto px-6 mt-16">
        <div className="bg-white dark:bg-[#1a1c19] rounded-[2rem] p-10 shadow-sm">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Who We Are</span>
          <h2 className="font-headline text-3xl font-bold uppercase text-[#0f5c4d] dark:text-[#d1f04c] mb-6 tracking-wide">
            Ornob Medicity — ऑरनॉब मेडिसिटी
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 font-body leading-relaxed text-base">
            <p>
              Ornob Medicity is a modern multi-speciality hospital located on Gonda Road, Payagpur, Uttar Pradesh. We are dedicated to providing high-quality, affordable healthcare to patients from Payagpur, Bahraich, and all surrounding areas.
            </p>
            <p>
              Our hospital offers advanced surgical and medical care across multiple specialities — including Orthopedics, Gynecology, General Surgery, General Medicine, Pediatrics, and 24×7 Emergency & Trauma care.
            </p>
            <p>
              We are proud to be an <strong className="text-primary">Ayushman Bharat (PM-JAY) empanelled hospital</strong>, meaning eligible card holders can receive free treatment and surgeries worth up to ₹5 Lakhs per year at absolutely no cost.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO ── */}
      <section className="max-w-5xl mx-auto px-6 mt-10">
        <h2 className="font-headline text-2xl font-bold uppercase text-[#0f5c4d] dark:text-white mb-6 tracking-wide">Contact & Location</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {INFO.map((item, i) => (
            <div key={i} className="bg-white dark:bg-[#1a1c19] rounded-2xl p-6 flex items-start gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
              </div>
              <div>
                <p className="font-label text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                <p className="font-headline font-bold text-[#0f5c4d] dark:text-white text-sm leading-snug">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="tel:05252297400"
            className="flex-1 bg-primary text-on-primary text-center py-4 rounded-xl font-label font-bold uppercase text-sm shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-xl">call</span>
            Call Now: 05252-297400
          </a>
          <a
            href="https://wa.me/916702776627"
            className="flex-1 bg-[#25D366] text-white text-center py-4 rounded-xl font-label font-bold uppercase text-sm shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-xl">chat</span>
            WhatsApp: 6702776627
          </a>
        </div>
      </section>

      {/* ── DEPARTMENTS ── */}
      <section className="max-w-5xl mx-auto px-6 mt-14">
        <h2 className="font-headline text-2xl font-bold uppercase text-[#0f5c4d] dark:text-white mb-6 tracking-wide">Our Departments</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {DEPARTMENTS.map((dept, i) => (
            <div key={i} className="bg-white dark:bg-[#1a1c19] rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined text-primary text-4xl mb-3">{dept.icon}</span>
              <p className="font-headline font-bold uppercase text-[#0f5c4d] dark:text-white text-sm tracking-wide">{dept.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link to="/departments" className="inline-flex items-center bg-primary text-on-primary px-8 py-3 rounded-xl font-label text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-md gap-2">
            <span className="material-symbols-outlined text-base">apps</span>
            View All Departments
          </Link>
        </div>
      </section>

      {/* ── FACILITIES ── */}
      <section className="max-w-5xl mx-auto px-6 mt-14">
        <h2 className="font-headline text-2xl font-bold uppercase text-[#0f5c4d] dark:text-white mb-6 tracking-wide">Hospital Facilities</h2>
        <div className="bg-white dark:bg-[#1a1c19] rounded-[2rem] p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FACILITIES.map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm font-body">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
