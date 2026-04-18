import { useState } from 'react';
import { useLang } from '../LangContext';

export default function Blog() {
  const { d } = useLang();
  const blogs = d.blogs || [];
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="min-h-screen bg-[#f1f3f6] dark:bg-[#121411] text-on-surface pb-32">

      {/* ── HEADER ── */}
      <section className="pt-40 pb-20 px-8 text-center">
        <h1 className="font-headline text-4xl sm:text-6xl font-black uppercase text-[#0f5c4d] dark:text-white mb-4 tracking-tight">
          Health Resources & <span className="text-primary italic">Blog</span>
        </h1>
        <p className="font-body text-gray-500 max-w-xl mx-auto">
          Expert health tips from our doctors — simple words, easy to understand.
        </p>
      </section>

      {/* ── BLOG GRID ── */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, i) => (
            <div key={i} className="group bg-white dark:bg-[#1a1c19] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">

               {/* Icon Header */}
               <div className="h-40 bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center relative overflow-hidden">
                  <span className="material-symbols-outlined text-7xl text-primary opacity-40 group-hover:scale-110 transition-transform duration-500">{blog.icon}</span>
                  <div className="absolute top-4 left-4 bg-white/40 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-[#0f5c4d]">Article</div>
               </div>

               {/* Content */}
               <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-headline text-xl font-bold uppercase text-[#0f5c4d] dark:text-[#d1f04c] mb-3 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="font-body text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {blog.desc}
                  </p>

                  {/* Tips List */}
                  {blog.tips && blog.tips.length > 0 && (
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {(expanded === i ? blog.tips : blog.tips.slice(0, 3)).map((tip, t) => (
                          <li key={t} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                      {blog.tips.length > 3 && (
                        <button
                          onClick={() => setExpanded(expanded === i ? null : i)}
                          className="mt-3 text-primary font-label text-xs font-bold uppercase tracking-wider hover:underline"
                        >
                          {expanded === i ? 'Show Less ↑' : `Read More (${blog.tips.length - 3} more tips) ↓`}
                        </button>
                      )}
                    </div>
                  )}

                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                     <span className="font-label text-[10px] uppercase font-bold text-gray-400 tracking-wider">5 Min Read</span>
                     <button className="text-primary hover:text-[#0f5c4d] transition-colors"><span className="material-symbols-outlined">arrow_forward_ios</span></button>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
