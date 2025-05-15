"use client";

import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "After struggling with porn addiction for 12 years, PWR's neuroscience approach changed everything. My sleep improved by week 2, I noticed increased energy by day 30, and my relationship with my partner completely transformed by day 60. The brain rewiring visualizations kept me going when I wanted to quit.",
    name: "Michael J.",
    age: 28,
    streak: "187 days",
    profession: "Software Engineer"
  },
  {
    id: 2,
    quote: "I tried 5 different apps and 3 therapists before PWR. The difference is their science-based approach. I can literally feel my dopamine sensitivity returning - colors are brighter, food tastes better, and I'm experiencing genuine joy in everyday activities for the first time in years.",
    name: "David K.",
    age: 32,
    streak: "145 days",
    profession: "Marketing Director"
  },
  {
    id: 3,
    quote: "As a psychologist myself, I was skeptical of any app claiming to help with addiction. But PWR's methodology is aligned with current neuroscience research. The neuroplasticity exercises literally rewired my brain's response patterns. My focus has improved 70% and anxiety decreased by roughly 60%.",
    name: "Dr. James L.",
    age: 36,
    streak: "220 days",
    profession: "Clinical Psychologist"
  },
  {
    id: 4,
    quote: "The urge surfing technology saved me during critical moments. Before PWR, I'd relapse every 3-5 days. Now I'm able to identify triggers before they escalate and apply the precise techniques needed in that moment. I've gone from constant shame to feeling in control of my brain again.",
    name: "Robert T.",
    age: 30,
    streak: "97 days",
    profession: "Financial Analyst"
  },
  {
    id: 5,
    quote: "I measured my recovery with data. PWR helped me track sleep quality, energy levels, mood, and productivity. After 180 days: sleep improved 83%, energy up 65%, productivity increased 71%, and most importantly - my marriage saved. This isn't placebo, it's brain science that works.",
    name: "Thomas W.",
    age: 35,
    streak: "312 days",
    profession: "Data Scientist"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-[rgba(14,23,39,0.8)] z-0"></div>
      
      {/* Purple gradient accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-[rgba(138,79,255,0.3)] to-[rgba(138,43,226,0.2)] rounded-full filter blur-3xl opacity-20 z-0"></div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2]">
              Real Results, Real People
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            See the measurable impact PWR has had on users' brain health, relationships, and productivity.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 relative">
            {/* Quote marks */}
            <div className="absolute top-6 left-8 text-[#8A4FFF]/20 text-7xl font-serif">"</div>
            <div className="absolute bottom-6 right-8 text-[#8A4FFF]/20 text-7xl font-serif">"</div>
            
            <div className="relative">
              <p className="text-xl md:text-2xl text-white/90 mb-8 text-center">
                {testimonials[activeIndex].quote}
              </p>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] flex items-center justify-center text-white text-xl font-bold mb-3">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div className="text-center">
                  <p className="text-white font-medium text-lg">{testimonials[activeIndex].name}, {testimonials[activeIndex].age}</p>
                  <p className="text-white/60 text-sm mb-1">{testimonials[activeIndex].profession}</p>
                  <p className="text-[#8A4FFF] font-semibold">Current streak: {testimonials[activeIndex].streak}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex 
                      ? 'bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2]' 
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">94%</div>
              <p className="text-white/70">of users report significant neurological improvement after 90 days</p>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">78%</div>
              <p className="text-white/70">reduction in urges and cravings after completing our neuroplasticity program</p>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">35K+</div>
              <p className="text-white/70">people have transformed their brain health with our science-based approach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 