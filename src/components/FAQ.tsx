"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    question: "Is porn addiction real?",
    answer: "Yes. Brain imaging studies consistently show that compulsive pornography users display the same reward-circuit changes as drug addicts — including dopamine receptor downregulation and reduced gray matter in the prefrontal cortex. The WHO's ICD-11 recognizes Compulsive Sexual Behavior Disorder. If pornography use is hard to control and continues despite negative consequences, it is functionally an addiction."
  },
  {
    question: "How long does it take for the brain to recover after quitting porn?",
    answer: "Recovery follows a general timeline: Days 1–14 (withdrawal, intense cravings), Days 14–30 (dopamine recalibration begins, natural rewards start feeling rewarding again), Days 30–60 (prefrontal cortex activity measurably improves, cognitive clarity returns), Days 60–90 (significant neuroplastic change consolidates). Heavy, long-term users may take 6–12+ months for full recovery. The 90-day benchmark reflects genuine neuroscience around dopamine receptor recovery."
  },
  {
    question: "What is porn-induced erectile dysfunction (PIED)?",
    answer: "PIED is the inability to achieve or maintain erection with a real partner while still being able to become aroused by pornography. It affects millions of men under 40 and is caused by dopamine desensitization, novelty conditioning, and performance anxiety. Recovery requires complete abstinence from pornography. Most men see significant improvement within 3–6 months; lighter users often within 60–90 days."
  },
  {
    question: "What should I do when an urge hits?",
    answer: "The most effective immediate techniques: (1) Cold shower — triggers norepinephrine and dopamine that chemically disrupt the craving state. (2) 5-5-5 breathing — breathe in 5 seconds, hold 5, out 5; activates the parasympathetic nervous system within 90 seconds. (3) Urge surfing — observe the craving without acting on it; urges peak and fade within 10–20 minutes if you don't act. (4) Intense physical exercise — immediately. (5) Text your accountability partner. Build a personal protocol using these in order."
  },
  {
    question: "What is the flatline and is it normal?",
    answer: "The flatline is a period during early recovery (typically Days 7–30) of near-zero libido, emotional numbness, low motivation, and sometimes mild depression. It's caused by the dopamine system recalibrating after removal of artificial stimulation. It is completely normal — not a sign of permanent damage. Most men emerge from the flatline within 2–6 weeks with improving mood and returning libido. Knowing to expect it prevents panic-driven relapse."
  },
  {
    question: "How do I handle a relapse without spiraling?",
    answer: "The correct response: (1) Stop immediately. (2) Tell your accountability partner within the hour — this breaks the secrecy that allows shame to spiral. (3) Don't engage in self-punishment; shame increases, not decreases, future relapse rates. (4) Analyze the relapse within 48 hours — what triggered it? (5) Restart Day 1 immediately. The men who succeed are not those who never relapse — they're the ones who don't let relapse become surrender."
  },
  {
    question: "How does the streak tracking work in POWER?",
    answer: "The streak tracker counts real-time days, hours, minutes, and seconds since your last relapse. If you relapse, you reset the counter — previous streak data is saved in your analytics for pattern recognition. The app also tracks urge intensity, mood, and triggers alongside your streak, so you can identify what conditions make you most vulnerable and address them directly."
  },
  {
    question: "Is my data private and secure?",
    answer: "Yes. All data is encrypted in transit and at rest. We do not sell or share your personal data with third parties. You can delete your account and all associated data at any time from the settings menu. Given the sensitive nature of the subject matter, privacy is a foundational design principle of POWER."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(14,23,39,0.8)] to-[#0A0A0A] z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[rgba(138,79,255,0.3)] to-[rgba(138,43,226,0.2)] rounded-full filter blur-3xl opacity-20 z-0"></div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2]">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Answers to the most common questions about porn addiction and recovery.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4"
                >
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-white/70 leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Link to full FAQ */}
          <div className="mt-10 text-center">
            <p className="text-white/50 text-sm mb-4">
              Have more questions? We have comprehensive answers covering neuroscience, PIED, NoFap, relationships, and more.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 bg-white/5 border border-[#8A4FFF]/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 hover:border-[#8A4FFF]/60 transition-all text-sm"
            >
              View Full FAQ (40+ Questions)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#8A4FFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
