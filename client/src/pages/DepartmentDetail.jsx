import { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLang } from '../LangContext';

// ── Procedure images mapped by procedure title ──────────────────────────────
const PROCEDURE_IMAGES = {
  // Orthopedic
  "Knee Replacement Surgery":    "https://images.openai.com/static-rsc-4/OM-OdJOXRmjHh4F_efLhFdnmS9yb26yPQgEdDExOKTLrvCZtwgobGhe02MOZIH1PUZWbqpoDyJBHT-byKP4qI2snML0Ev7SJUcqldxAMDb11tt3ROisnq0FVnkpxYYML4ZLwigliPC84v4bUtXVLW3X7DdFQM23p_JeUf7ehhL5TuySZVNFdsNHg83fAIdCT?purpose=fullsize",
  "Hip Replacement":             "https://images.openai.com/static-rsc-4/jTY-ozV6L-gKcUpXUZFpTvmeTZtXxyvrwD3e8QDw-HqeId1R_-0tcC5CZsTmDaKthKMGxFW4UTTHwJC0m7IqRl_2duyPOjMPs-rbDUluK8bLOdfE7nnmABDEhVoc9Q5eGned83wFk9G8kGpNpR1As1jZQz_yY556jhJJPxIA8hWXxe2pFrxKmXl8_UWPTrt1?purpose=fullsize",
  "Spine Surgery":               "https://images.openai.com/static-rsc-4/LaEZtQMWw2Cg8Nzb3bX3KzgipTPfbf7aF_tCo5rgeQIi3fvjMGf82gQBVkxFrtcXVtF6S1SPAkIifhPLSHniFo6sGJfRo5FlIj-BrZmhFXrK6F_K7_Frtcoy2wFgLQ3i08bvvbf3e0qcwg40eMMYBdYfUpI7n1FXZ1CwNzYMR0y6eaZACpga1_rEi4yGrJKF?purpose=fullsize",
  "Arthroscopy":                 "https://images.openai.com/static-rsc-4/j9hRZ2dubAJGzYLlzNGZ7LEnl-jCjpFi37cGPfYuylUd9TeRbiKgYzSteImlTmt2jqqN8v0CuisjzYrJz6IFVgegZsBngABvoLGoPTVAyAvyyLk-lqfE-j-w1v_4TvRK1-5ubLKRH2LaqgW0G579-MK8ZqKaJ4KtotXPNWCbH_V2y8mscK3fGsVdit23-7t9?purpose=fullsize",
  "ACL Reconstruction":          "https://images.openai.com/static-rsc-4/2z2wXzcEgfuRCkXkErOv7tucFIearNTtp8YC5QtUmkPdK7hySVUPxFo3aRA6NcaBcayZ0HGCi1vQWOe2eg5dghI6tlavTWh5Q--06DLqCMdTpr0_ZBtkMsEIcgkEs9QCFH6RsAiFjuTKxLMlxnbfEyQxaJv6BFTe0fsZMxyrLsYqzHguh7dCIrCuXPCGccgk?purpose=fullsize",

  // Gynecology & Obstetrics
  "Normal Delivery":             "https://images.openai.com/static-rsc-4/RLCsA56AIWHg80ohvSVeksGLTB2jzXLCrhPGwzEt8RMZ-zumkroX3N1s7NoVoqTyRT2-sS1uZf5jr-rBApJt75ik8TzSLZR0Ax6dgBB_1y4gXQNWzkrbvAwFhlGyvaB4KpYGzgUKWiKXSlLOX1yRtCuaqA_6fUxKzKKeP4d1Ok27PGl7izedSCMuHODdczRa?purpose=fullsize",
  "Cesarean Section (C-Section)":"https://images.openai.com/static-rsc-4/KzevdEE4gg6d4I-oNkKMEsSd6955O8VHpHWz1UsR92oWdVI0eMZx8Zk-f3XfhzZ3AUCZtl7gGAzDv-ZHcBdA4s9UxZBfSS3YjJNNfOKTQQzariEBP8B8VL8fGccwWJFbOHoicLcmEZbpZZ9ngSvSs4NQ3Wz071ThGvWxHy8nBO7gyLRvxiqRYuynEXnlA87A?purpose=fullsize",
  "IVF (In Vitro Fertilization)":"https://images.openai.com/static-rsc-4/_4IOCnTgoTRNi-3CBw1_hY3fKxzncrnltNestS__YsnZNCowSTm8r1z-rQK82tZHGysU8EV8OxblPmGD5uoV9FsRQRgQ6HjCd1QMW0r48Dhm7T7khW2PZp_CWkTkoIsAVvG7p8SZq9q6rvQ-YY6AZPXSHRG7WK_sYA6ePFBVZ8wh_CV6O3z2TwmsCJwKVgFx?purpose=fullsize",
  "IUI (Intrauterine Insemination)":"https://images.openai.com/static-rsc-4/2LzMcy6boxm-AGA0Y8ALL6CgEEROAI-tYS32WgtNdL2ywB5-ew_xz0QG8JDERqLmxGGT__TpUEJBeWpMwoCHX3QUfG2esVSOYe68tazXyYMg3vfd3HJkFgI1q5PptkZQ3xKKidtTlAjFCV4M0SQFlfZbtiDFwYhgQ0f_RuP9BxBOozdXG2sXuk2BpQeaRr7K?purpose=fullsize",
  "Hysterectomy":                "https://images.openai.com/static-rsc-4/mZy2J_UzC9DgU5EKLp0Jmf0fQxJ5_Dug6yK4EBkTrVm1MaDjjLQkA4aJUyzNBIF7a-HEQ_6FxwNXC29EGmryt771nh0KwIUyvEAWDHn5mRizo_l7R6o4ajEtlwjabOb3_Hi6Dp4Y52IVZPBloUuytEKZxUU98Wmm92nEZLJ_jfAkMlBcxshSQwRm69hyRA_k?purpose=fullsize",

  // General Surgery
  "Laparoscopic Surgery":        "https://images.openai.com/static-rsc-4/imOMLnQyKDI99q-PDKw9YaZ1oUETS-eiwOEnu8oVxViJFTvfj3Xop9Nj7DAnJ-OHGB284EN32i-LOniGmTYBTTIKyvmtR3SguT7o_GUTZGCXSc7d74kfmQ2FqpitRMaeX3dYq-mt1GuLd2wLitnL3yZ_u6CQ8TMiwJyOZ0h7Vo5m2bpJSN_9KCN3mQrQV6Z9?purpose=fullsize",
  "Appendix Removal":            "https://images.openai.com/static-rsc-4/oWaN71GhK61MSo99qIivJj2xDVr2M-Z6YnFxnKhQiOJ7x2tSl9QR59fWGksvDGdWcSl4KUgZvWfLRcxJNiLycIeFxJIxi14HX4JS0gLe_oQJaTRQhLTSXAnOhjFkuSojTFYTAzHkNgvvF8oi4rPm9eisrjoQtNIAG2R_LmrlJng1LQwo9NfBtZrLSEPYTHSq?purpose=fullsize",
  "Hernia Repair":               "https://images.openai.com/static-rsc-4/zUlOKsJAGP-qKHvZdB1XnIqFFFSmXWUfCJGB_5jhuss90fxEciFwQXv63cRUZLs2eEVfqcqtzIRIY0owqOiTbGCjyjSzmzrJnwNUNpMtYegfxy3Rhd897FXRlBAW3EGK0Ere1YfRkLgQ3a-2tOihOYFFae74N9Nlh51pVEVjyE6IsHmtjshfpCYBm1xjvOS2?purpose=fullsize",
  "Gallbladder Surgery":         "https://images.openai.com/static-rsc-4/eOdyrKh2H2FmnJt4ocT0wy-Vrb0oqdOapO3wQ0It_n32PbVUA5vDA9Tkldj1kXpuSvyy-2ZlFcDRTEpt9jrte9nf1scQxuecATe5sXSOWu-b3qLh0MdJGMiiEJSCSJFzQfP128QI3BLUsZ_btAw9yMfcYNCSmm57vXr-79cO_3lhSMyT3F6lTEZNVm3GW9aC?purpose=fullsize",
  "Piles Treatment":             "https://images.openai.com/static-rsc-4/YORub2P3613n47Uz3SvvAqSmcARgVNuy2HOVGjqyL1tVPzmPFDw8Z4xG5g79XtmgLBskYpI9kxeh0r10YUfoDveH-FgQ5Ss-at-5zux5TM2HsrkD9_jNJYoqvvVfwa3yBsOL_RuD8XaJErBA8lQxqSuvzpZIEefkFCMcctFLE-kcjeuDt_tYDTSXofH3yV3m?purpose=fullsize",

  // General Medicine
  "Health Checkups":             "https://images.openai.com/static-rsc-4/QPT-L5sR3mnXCfO8mpi0pYMySafoPkaZ_5pxiWF3uYePn8mf0JDXt7cCZVYZvy5D6vQbpKSK-JJ4bFb-uQby0NZ98wD6CJDUFO_bdc3YnhHdrAn43T45MWOTYGCR4tyQu4OXLVjvFIugv9GP0-jkhnkAY0-uTATuMAtlqlFhbjmMXhjQMGC0SsfL9AadmzEC?purpose=fullsize",
  "Disease Management Plans":    "https://images.openai.com/static-rsc-4/bjH0wPEI_FMSgTVcPFWekpKnubtbAksDj6o9dgDbGQeGunnRBNW3XAO-3J0yG9K1GCEnMfoc8hDJ2s_dKs_Ylnz0Ri_dc2lEesSscLVPkQ_suQcS_AsjLmZo8JOqbSGKGnc-WvosslbCpA6yLcwceJAzQaor2M7OjShOfKP1WvLikiJF91NQSqlj616haSVa?purpose=fullsize",
  "Preventive Care":             "https://images.openai.com/static-rsc-4/ddtppiXs37lLbye_cpZTLxhVPhsyWp8xlVKTZ66pzkA7No_QrrY_fNMw34E6vHIPQbuHxmtEJ4pq0XTKVvn8bY17C8ZIS5zIPZIHdR9wtbH9ttMgB1SYNXoj44kczzXcB_1aVbd1fqSHbeNjOFJb08saqgMR9vmtJAZKsY7yejtBZc_4blggrYD-Oo8AwgXB?purpose=fullsize",

  // Pediatrics
  "Vaccination Programs":        "https://images.openai.com/static-rsc-4/u0vSg0gwlc6jW972IR09GonfScA-fwA6Q3dJK3z5Bg-xy-apvKMzFzBE_of_oVdngtR9KVx3cWSP46MR2NriIp1BgBNzKTBg1pk3Kt9HkHViORoKMj231Zwl9pvGQeOQSCGPYn3dx0d1Xz0Sbxu1e6XgvJyMZj2k2lYylFJYxtexKRZt6qSP2PVKq-IoMXPy?purpose=fullsize",
  "Growth Monitoring":           "https://images.openai.com/static-rsc-4/leNCylJiGGNPcrpYMiFxVoyWClStLcrB-KS7_X2UMuB8Fs7XHtaNAdGK0y5ffPPY-2PqpS6LSOmzZZxn2d1YlaYT5kMdA3IRNt7r087Gfa3U3xJI0wyJ2fEFKJn1EWTZF-NID4P334CBqux-mn2alTWjxC_J-mHS9aH-cBugM9vImpBoLItUXcmZC56Y9KXn?purpose=fullsize",
  "Pediatric Consultation":      "https://images.openai.com/static-rsc-4/il-TaAtE7tYkMCgdQ50orJoxc9ekzEOJHZ05qyqxfN5LKT7Mx12GvfohHqrLIQdqJMk8X-8ovUtNCRW6wVHwHujYijI8HVCnUu_fyfW9rRui9BoyqpveOZ6r_fN7NX9E3QCypWtfP4dMxpStrhOSc8IkNrYgLaWYjNAm17RhFfTq7HAwzfFle0G7S0clLkOI?purpose=fullsize",

  // Emergency & Trauma
  "Accident & Trauma Care":      "https://images.openai.com/static-rsc-4/psTltlfSUSP9AUVnIn5IN4v36A-EtWZkiOwSBMh8GTgasfPrN5WCxDWJ0lRa2ilFJ-0sXFvMVez14M7yAVoaWsFZcaN76D0xUsWsNm2hJ8zuRcsXdYnA88TfuyTmBq7loHc3T93x1t29dePRhEUnqmEPcRfIfcrowo_vemnd1AUVU3r-JutsCZPGUH5Usstd?purpose=fullsize",
  "Emergency Surgeries":         "https://images.openai.com/static-rsc-4/YEATXtlexUkbear7I0OrIB0SfF3C0BWG9iKgmCOjRy9692Y5lRu3g2uCsbuQbfN1uy2YcY3NYHY07x4g3z50nn7D5spTpv8hfvdkallBCKICXmHBPex-G7PpcfYyJRFniGNb6m_b3Lb8W_NogaVKz4CDhhWpN-Yf8tgsVsd1QN9ygtTFj-t0bJXTx8mHWGH5?purpose=fullsize",
  "Critical Care Support":       "https://images.openai.com/static-rsc-4/KyW2lg8_N1AwRGqLEPeGJygcYVx6G40DlBIuZN4RTS_ircNGxtWNPabIGRUVxMrziZhJab-zy6lNvotbmipr19VUXOQW6nG_Nn7cYh3iX7dfCc9frvcXRY9Kwa90ad_FGPGyIuLY3cCZCf96VT1WfLKW_aqsMxDiCuQFLddKx8JqV1zdi2ksiPUYB4KFTl3R?purpose=fullsize",
  "Ambulance Services":          "https://images.openai.com/static-rsc-4/LSWGejMdYp7hoqx2Bg35979EBBOkqyM3ZG_fnCfuoTLw-rex_XkpHz3VPiRaJsji0u20VAFj94HB7dv6H_M4a8MOZCMIr-g9Zg5_KcRrG6nq5kS-632ScyO7zf0Vw9kLSfEGO-SSXGcv0ZOOIaYQjBvQnTYYWG91DpYUq84LcMzC67dSwAhtsNTgMV4zo5sd?purpose=fullsize",
};

// ── Procedures Slider Component ─────────────────────────────────────────────
function ProceduresSlider({ procedures }) {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const dragStart = useRef(null);

  const proc = procedures[active];
  const img  = PROCEDURE_IMAGES[proc.title] || null;

  const prev = () => setActive(i => (i - 1 + procedures.length) % procedures.length);
  const next = () => setActive(i => (i + 1) % procedures.length);

  // Touch / mouse drag support
  const onPointerDown = e => { dragStart.current = e.clientX; };
  const onPointerUp   = e => {
    if (dragStart.current === null) return;
    const delta = e.clientX - dragStart.current;
    if (delta < -40) next();
    else if (delta > 40) prev();
    dragStart.current = null;
  };

  return (
    <div className="space-y-6">

      {/* ── Image Preview ── */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container-low" style={{ height: 420 }}>
        {img ? (
          <img
            key={active}
            src={img}
            alt={proc.title}
            className="w-full h-full object-contain animate-fade-in"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="material-symbols-outlined text-7xl text-primary opacity-20">healing</span>
          </div>
        )}
        {/* Gradient + title overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-end justify-between">
          <div>
            <p className="text-white font-headline font-bold uppercase text-base leading-tight drop-shadow">{proc.title}</p>
            <p className="text-white/70 font-body text-xs mt-0.5 leading-snug">{proc.desc}</p>
          </div>
          <span className="bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full font-label uppercase tracking-wider flex-shrink-0">
            {active + 1} / {procedures.length}
          </span>
        </div>
      </div>

      {/* ── Horizontal Card Track ── */}
      <div className="relative">
        {/* Prev button */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-9 h-9 rounded-full bg-white shadow-lg border border-gray-100 text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-200"
          aria-label="Previous"
        >
          <span className="material-symbols-outlined text-xl">chevron_left</span>
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          className="overflow-hidden mx-6"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          <div
            className="flex gap-3 transition-transform duration-400 ease-in-out"
            style={{ transform: `translateX(calc(-${active} * (100% / 3 + 4px)))` }}
          >
            {procedures.map((p, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 w-[calc(33.333%-8px)] sm:w-[calc(33.333%-8px)] flex flex-col gap-2 p-4 rounded-xl border text-left transition-all duration-200 select-none
                  ${active === i
                    ? 'bg-primary border-primary shadow-lg'
                    : 'bg-surface-container-lowest border-surface-container-high/30 hover:border-primary/40 hover:shadow-sm'
                  }`}
              >
                <span className={`w-7 h-7 rounded-full flex items-center justify-center font-headline font-bold text-xs flex-shrink-0
                  ${active === i ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'}`}>
                  {i + 1}
                </span>
                <p className={`font-headline font-bold uppercase text-xs tracking-wide leading-tight
                  ${active === i ? 'text-white' : 'text-primary'}`}>
                  {p.title}
                </p>
                <p className={`font-body text-[11px] leading-relaxed line-clamp-2
                  ${active === i ? 'text-white/75' : 'text-on-surface-variant'}`}>
                  {p.desc}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Next button */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-9 h-9 rounded-full bg-white shadow-lg border border-gray-100 text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-200"
          aria-label="Next"
        >
          <span className="material-symbols-outlined text-xl">chevron_right</span>
        </button>
      </div>

      {/* ── Dot indicators ── */}
      <div className="flex justify-center gap-2">
        {procedures.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? 'w-6 bg-primary' : 'w-1.5 bg-primary/25 hover:bg-primary/50'}`}
          />
        ))}
      </div>
    </div>
  );
}

// ── Main Page ───────────────────────────────────────────────────────────────
export default function DepartmentDetail() {
  const { slug } = useParams();
  const { d } = useLang();

  const details = d.departmentDetails?.[slug];

  if (!details) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface text-on-surface pt-24">
        <span className="material-symbols-outlined text-6xl text-primary mb-4">search_off</span>
        <h1 className="font-headline text-3xl font-bold text-primary mb-4">Department Not Found</h1>
        <p className="text-on-surface-variant mb-8">This department page is coming soon.</p>
        <Link to="/departments" className="bg-primary text-on-primary px-8 py-3 rounded-md font-label text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
          Back to Departments
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface text-on-surface">

      {/* ── 1. HERO ── */}
      <section className="relative pt-32 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-8 overflow-hidden">
        {details.image ? (
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${details.image})` }}>
            <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-90" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container" />
        )}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #ffffff 0%, transparent 60%)' }} />

        <div className="max-w-5xl mx-auto relative z-10 text-on-primary">
          <Link to="/departments" className="inline-flex items-center text-on-primary/70 hover:text-on-primary text-xs sm:text-sm font-label uppercase tracking-wider mb-4 sm:mb-6 transition-colors group">
            <span className="material-symbols-outlined mr-1 group-hover:-translate-x-1 transition-transform text-base">arrow_back</span>
            All Departments
          </Link>
          <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold uppercase leading-tight tracking-wide mb-4 drop-shadow-xl text-white">
            {details.title}
          </h1>
          <p className="text-white/90 text-lg sm:text-xl font-body mb-8 sm:mb-10 max-w-2xl drop-shadow-md">
            {details.subtitle}
          </p>
          <a href="tel:+91XXXXXXXXXX" className="inline-flex items-center bg-tertiary-fixed text-on-tertiary-fixed px-6 sm:px-8 py-3 sm:py-4 rounded-md font-label text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-tertiary-fixed-dim transition-colors shadow-lg">
            <span className="material-symbols-outlined mr-2 text-base">calendar_month</span>
            {d.book_appointment || 'Book Appointment'}
          </a>
        </div>
      </section>

      {/* ── 2. OVERVIEW ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-lg sm:text-xl">info</span>
          </div>
          <h2 className="font-headline text-xl sm:text-2xl font-bold uppercase text-primary tracking-wider">Overview</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {details.overview.map((para, i) => (
            <p key={i} className="text-on-surface-variant font-body leading-relaxed text-sm sm:text-base bg-surface-container-lowest p-5 sm:p-6 rounded-xl border border-surface-container-high/30 shadow-sm">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* ── 3. CONDITIONS WE TREAT ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 bg-surface-container-low">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-error-container flex items-center justify-center">
              <span className="material-symbols-outlined text-error text-lg sm:text-xl">symptoms</span>
            </div>
            <h2 className="font-headline text-xl sm:text-2xl font-bold uppercase text-primary tracking-wider">Conditions We Treat</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {details.conditions.map((condition, i) => (
              <div key={i} className="flex items-start gap-3 bg-surface-container-lowest p-4 sm:p-5 rounded-xl shadow-sm border border-surface-container-high/30 hover:-translate-y-1 transition-transform duration-200">
                <span className="material-symbols-outlined text-primary mt-0.5 text-base sm:text-lg flex-shrink-0">check_circle</span>
                <span className="font-body text-on-surface text-xs sm:text-sm leading-snug">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PROCEDURES & TREATMENTS ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-tertiary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-tertiary text-lg sm:text-xl">healing</span>
          </div>
          <h2 className="font-headline text-xl sm:text-2xl font-bold uppercase text-primary tracking-wider">Procedures & Treatments</h2>
        </div>
        <ProceduresSlider procedures={details.procedures} />
      </section>

      {/* ── 5. OUR SPECIALIST ── */}
      <section className="py-16 px-8 bg-surface-container-low">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-xl">stethoscope</span>
            </div>
            <h2 className="font-headline text-2xl font-bold uppercase text-primary tracking-wider">Our Specialist</h2>
          </div>
          <div className="bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 shadow-lg">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-on-primary/20 flex items-center justify-center flex-shrink-0 border-4 border-on-primary/10 overflow-hidden">
              {(() => {
                const doc = d.doctorsData?.find(docItem => details.specialist && details.specialist.includes(docItem.name));
                if (doc && doc.img) {
                  return <img src={doc.img} alt={doc.name} className="w-full h-full object-cover" />;
                }
                return <span className="material-symbols-outlined text-4xl text-on-primary">person</span>;
              })()}
            </div>
            <div className="text-center sm:text-left">
              <p className="font-headline font-bold text-xl uppercase tracking-wide">{details.specialist}</p>
              <p className="text-on-primary/80 font-body text-sm mt-1">Available at Ornob Medicity, Payagpur</p>
            </div>
            <Link
              to="/doctors"
              state={{ openSpecialist: details.specialist }}
              className="sm:ml-auto w-full sm:w-auto text-center bg-on-primary/20 hover:bg-on-primary/30 text-on-primary px-6 py-3 rounded-md font-label text-sm font-bold uppercase tracking-wider transition-colors flex-shrink-0"
            >
              View Profile
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. WHY CHOOSE US ── */}
      <section className="py-16 px-8 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-tertiary text-xl">verified</span>
          </div>
          <h2 className="font-headline text-2xl font-bold uppercase text-primary tracking-wider">Why Choose Us</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {details.whyChooseUs.map((point, i) => (
            <div key={i} className="bg-surface-container-lowest p-6 rounded-xl border border-surface-container-high/30 shadow-sm flex items-center gap-4 hover:-translate-y-1 transition-transform duration-200">
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed/20 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-tertiary-fixed text-xl">star</span>
              </div>
              <span className="font-body text-on-surface text-sm leading-snug font-medium">{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. CTA SECTION ── */}
      <section className="py-20 px-8 bg-gradient-to-br from-primary-container to-surface-container-highest">
        <div className="max-w-3xl mx-auto text-center">
          <span className="material-symbols-outlined text-5xl text-primary mb-4 block">local_hospital</span>
          <h2 className="font-headline text-3xl font-bold text-primary uppercase tracking-wide mb-4">
            {details.ctaMessage}
          </h2>
          <p className="text-on-surface-variant font-body mb-10">
            {d.ayushman_banner || 'Ayushman Bharat Empanelled Hospital — Free treatment for card holders'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:05252297400"
              id={`cta-call-${slug}`}
              className="inline-flex items-center justify-center bg-primary text-on-primary px-8 py-4 rounded-md font-label text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-lg"
            >
              <span className="material-symbols-outlined mr-2 text-base">phone</span>
              {d.call || 'Call Now'}
            </a>
            <a
              href="https://wa.me/916702776627"
              id={`cta-whatsapp-${slug}`}
              className="inline-flex items-center justify-center bg-tertiary-fixed text-on-tertiary-fixed px-8 py-4 rounded-md font-label text-sm font-bold uppercase tracking-wider hover:bg-tertiary-fixed-dim transition-colors shadow-lg"
            >
              <span className="material-symbols-outlined mr-2 text-base">chat</span>
              {d.whatsapp_now || 'WhatsApp Now'}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
