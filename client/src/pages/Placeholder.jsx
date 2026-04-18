import React from 'react';
import { useLang } from '../LangContext';

export default function Placeholder({ titleKey }) {
  const { d } = useLang();
  const title = d[titleKey] || "Page";

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center pt-32">
      <h1 className="font-headline text-4xl lg:text-5xl font-bold uppercase tracking-wide text-primary mb-6">
        {title}
      </h1>
      <p className="font-body text-xl text-on-surface-variant max-w-2xl border-t border-outline/20 pt-6">
        This is a placeholder page for the {title} section. More content will be added here soon.
      </p>
    </div>
  );
}
