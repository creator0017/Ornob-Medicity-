import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../LangContext';

export default function Departments() {
  const { d } = useLang();

  const departments = [
    { titleKey: 'ortho',  descKey: 'desc_ortho',   icon: 'skeleton',        slug: 'orthopedic'         },
    { titleKey: 'gyno',   descKey: 'desc_gyno',    icon: 'pregnant_woman',  slug: 'gynecology',  suffix: ' & Obstetrics' },
    { titleKey: 'gensurg',descKey: 'desc_gensurg', icon: 'medical_services',slug: 'general-surgery'    },
    { titleKey: 'genmed', descKey: 'desc_genmed',  icon: 'stethoscope',     slug: 'general-medicine'   },
    { titleKey: 'pediatrics', descKey: 'desc_peds',icon: 'child_care',      slug: 'pediatrics'         },
    { titleKey: 'trauma', descKey: 'desc_trauma',  icon: 'emergency',       slug: 'emergency-trauma'   }
  ];

  return (
    <div className="pt-[60px] min-h-screen bg-surface text-on-surface">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-container text-on-primary py-16 sm:py-20 px-4 sm:px-8 text-center mt-8 sm:mt-12">
        <h1 className="font-headline text-3xl sm:text-5xl font-bold uppercase tracking-wide mb-3">
          {d.dept_title || 'Departments of Excellence'}
        </h1>
        <p className="text-on-primary/75 font-body text-base sm:text-lg max-w-xl mx-auto">
          Specialised care across every medical discipline, all under one roof.
        </p>
      </section>

      {/* Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {departments.map((dept) => {
            const hasDetail = !!d.departmentDetails?.[dept.slug];
            const card = (
              <div className="bg-surface-container-lowest p-6 sm:p-10 rounded-2xl shadow-[0px_10px_30px_rgba(26,28,25,0.06)] hover:shadow-[0px_20px_40px_rgba(26,28,25,0.12)] hover:-translate-y-2 transition-all duration-300 border border-surface-container-high/20 flex flex-col items-start h-full">
                <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-3xl">{dept.icon}</span>
                </div>
                <h3 className="font-headline font-bold uppercase text-2xl text-primary mb-4 tracking-wider">
                  {d[dept.titleKey] || dept.titleKey}{dept.suffix || ''}
                </h3>
                <p className="text-on-surface-variant font-body mb-8 flex-grow leading-relaxed">
                  {d[dept.descKey]}
                </p>
                <span className="text-primary font-headline uppercase text-sm font-bold tracking-wider hover:text-tertiary-fixed transition-colors flex items-center group cursor-pointer">
                  {d.explore || 'Explore'}
                  <span className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform text-base">
                    arrow_forward
                  </span>
                </span>
              </div>
            );

            return hasDetail ? (
              <Link key={dept.slug} to={`/departments/${dept.slug}`} className="h-full">
                {card}
              </Link>
            ) : (
              <div key={dept.slug}>{card}</div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
