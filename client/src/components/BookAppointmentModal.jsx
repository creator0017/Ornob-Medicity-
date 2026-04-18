import React, { useState, useEffect } from 'react';
import { useLang } from '../LangContext';

const DEPARTMENTS = [
  { en: 'Orthopedic', hi: 'हड्डी रोग' },
  { en: 'Gynecology', hi: 'स्त्री रोग' },
  { en: 'General Surgery', hi: 'सामान्य सर्जरी' },
  { en: 'General Medicine', hi: 'सामान्य चिकित्सा' },
  { en: 'Pediatrics', hi: 'बाल रोग' },
  { en: 'Emergency & Trauma', hi: 'आपातकाल और ट्रॉमा' },
];

export default function BookAppointmentModal({ open, onClose }) {
  const { lang } = useLang();
  const isHi = lang === 'hi';

  const [form, setForm] = useState({
    name: '',
    phone: '',
    department: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', phone: '', department: '', date: '', message: '' });
        setErrors({});
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!open) return null;

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = isHi ? 'नाम आवश्यक है' : 'Name is required';
    if (!/^\d{10}$/.test(form.phone)) e.phone = isHi ? '10 अंकों का मोबाइल नंबर दर्ज करें' : 'Enter a valid 10-digit phone number';
    if (!form.department) e.department = isHi ? 'विभाग चुनें' : 'Select a department';
    if (!form.date) e.date = isHi ? 'तारीख चुनें' : 'Select a date';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    const msg = encodeURIComponent(
      `*Appointment Request*\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Department: ${form.department}\n` +
      `Date: ${form.date}\n` +
      (form.message ? `Message: ${form.message}` : '')
    );
    window.open(`https://wa.me/916702776627?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(3px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="bg-[#004337] px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-white text-3xl">calendar_month</span>
            <div>
              <h2 className="text-white font-bold text-xl leading-tight">
                {isHi ? 'अपॉइंटमेंट बुक करें' : 'Book Appointment'}
              </h2>
              <p className="text-green-200 text-xs mt-0.5">
                {isHi ? 'Ornob Medicity, पायगपुर' : 'Ornob Medicity, Payagpur'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-green-200 transition-colors p-1 rounded-full hover:bg-white/10"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <div className="px-6 py-5">
          {submitted ? (
            <div className="text-center py-8">
              <span className="material-symbols-outlined text-green-600 text-6xl">check_circle</span>
              <h3 className="text-xl font-bold text-gray-800 mt-3">
                {isHi ? 'धन्यवाद!' : 'Thank You!'}
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                {isHi
                  ? 'आपकी अपॉइंटमेंट रिक्वेस्ट WhatsApp पर भेज दी गई है। हम जल्द संपर्क करेंगे।'
                  : 'Your appointment request has been sent via WhatsApp. We will contact you shortly.'}
              </p>
              <button
                onClick={onClose}
                className="mt-6 bg-[#004337] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#0f5c4d] transition-colors"
              >
                {isHi ? 'बंद करें' : 'Close'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {isHi ? 'पूरा नाम *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={isHi ? 'अपना नाम लिखें' : 'Enter your name'}
                  className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#004337] transition ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {isHi ? 'मोबाइल नंबर *' : 'Mobile Number *'}
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/, '').slice(0, 10) })}
                  placeholder="10-digit number"
                  className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#004337] transition ${errors.phone ? 'border-red-400' : 'border-gray-300'}`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* Department + Date row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    {isHi ? 'विभाग *' : 'Department *'}
                  </label>
                  <select
                    value={form.department}
                    onChange={(e) => setForm({ ...form, department: e.target.value })}
                    className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#004337] transition bg-white ${errors.department ? 'border-red-400' : 'border-gray-300'}`}
                  >
                    <option value="">{isHi ? 'चुनें' : 'Select'}</option>
                    {DEPARTMENTS.map((d) => (
                      <option key={d.en} value={d.en}>{isHi ? d.hi : d.en}</option>
                    ))}
                  </select>
                  {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    {isHi ? 'तारीख *' : 'Date *'}
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className={`w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#004337] transition ${errors.date ? 'border-red-400' : 'border-gray-300'}`}
                  />
                  {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {isHi ? 'संदेश (वैकल्पिक)' : 'Message (optional)'}
                </label>
                <textarea
                  rows={2}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={isHi ? 'कोई जानकारी या प्रश्न...' : 'Any additional info or questions...'}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#004337] transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#004337] hover:bg-[#0f5c4d] text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <span className="material-symbols-outlined text-xl">calendar_month</span>
                {isHi ? 'अपॉइंटमेंट बुक करें' : 'Book Appointment'}
              </button>

              <p className="text-center text-gray-400 text-xs">
                {isHi
                  ? 'आपकी जानकारी सुरक्षित है और केवल अपॉइंटमेंट के लिए उपयोग की जाएगी।'
                  : 'Your information is secure and used only for appointment purposes.'}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
