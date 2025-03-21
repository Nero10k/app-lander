"use client";

import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "After struggling with addiction for years, the PWR app has been a game-changer. The streak tracking and community support keep me accountable, and the emergency tools have saved me countless times during moments of weakness.",
    name: "Michael",
    age: 28,
    streak: "90+ days"
  },
  {
    id: 2,
    quote: "The brain rewiring visualization really helps me understand the progress I'm making. Seeing those percentages increase gives me the motivation to keep going, even on difficult days.",
    name: "David",
    age: 32,
    streak: "45 days"
  },
  {
    id: 3,
    quote: "I've tried many apps before, but none provided the comprehensive approach that PWR does. The combination of tracking, community, and emergency tools addresses all aspects of recovery.",
    name: "James",
    age: 24,
    streak: "120 days"
  },
  {
    id: 4,
    quote: "The AI chat feature has been incredibly helpful. Having 24/7 support and personalized advice has made a huge difference in my recovery journey.",
    name: "Robert",
    age: 30,
    streak: "60 days"
  },
  {
    id: 5,
    quote: "I was skeptical at first, but the PWR app has truly helped me regain control of my life. The benefits I've experienced - increased energy, better focus, improved relationships - have been life-changing.",
    name: "Thomas",
    age: 35,
    streak: "180+ days"
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
              Success Stories
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Hear from users who have transformed their lives with the Power app.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 relative">
            {/* Quote marks */}
            <div className="absolute top-6 left-8 text-[#8A4FFF]/20 text-7xl font-serif">"</div>
            <div className="absolute bottom-6 right-8 text-[#8A4FFF]/20 text-7xl font-serif">"</div>
            
            <div className="relative">
              <p className="text-xl md:text-2xl text-white/90 mb-8 text-center italic">
                {testimonials[activeIndex].quote}
              </p>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] flex items-center justify-center text-white text-xl font-bold mb-3">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div className="text-center">
                  <p className="text-white font-medium text-lg">{testimonials[activeIndex].name}, {testimonials[activeIndex].age}</p>
                  <p className="text-[#8A4FFF]">Current streak: {testimonials[activeIndex].streak}</p>
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
      </div>
    </section>
  );
} 