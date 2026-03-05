"use client";

import { useState } from 'react';

interface Question {
  q: string;
  a: string;
}

export default function FAQAccordion({ questions }: { questions: Question[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {questions.map((item, i) => (
        <div
          key={i}
          className="bg-white/5 rounded-xl border border-white/10 overflow-hidden transition-all hover:border-white/20"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-6 py-5 flex justify-between items-start gap-4"
          >
            <h3 className="text-white font-medium leading-snug">{item.q}</h3>
            <span
              className={`flex-shrink-0 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-200 mt-0.5 ${
                open === i ? 'rotate-45 border-[#8A4FFF]' : ''
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="px-6 pb-5 text-white/60 leading-relaxed text-sm">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
