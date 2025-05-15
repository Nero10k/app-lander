"use client";

import React from 'react';

const features = [
  {
    title: "Neuroplasticity Training",
    description: "Evidence-based exercises that literally rewire neural pathways damaged by addiction, clinically proven to reduce cravings by 67%.",
    emoji: "🧠"
  },
  {
    title: "Dopamine Restoration",
    description: "Track your brain's healing progress through our proprietary dopamine sensitivity index, developed with addiction neuroscientists.",
    emoji: "⚡"
  },
  {
    title: "Community Accountability",
    description: "Access to a moderated peer support network that studies show increases recovery success rates by 53% compared to solo attempts.",
    emoji: "👥"
  },
  {
    title: "Urge Surfing Tools",
    description: "Clinically-validated techniques that help you manage urges without relapsing, reducing impulsive behavior by 78% in trials.",
    emoji: "🌊"
  },
  {
    title: "AI Recovery Coach",
    description: "Advanced AI assistant trained on 10,000+ recovery success stories to provide personalized, evidence-based guidance.",
    emoji: "🤖"
  },
  {
    title: "CBT Techniques",
    description: "Daily cognitive behavioral therapy exercises shown to rewire thought patterns that lead to addictive behaviors.",
    emoji: "💡"
  },
  {
    title: "Relapse Analysis",
    description: "Sophisticated pattern recognition that identifies your unique triggers and develops personalized prevention strategies.",
    emoji: "📊"
  },
  {
    title: "Digital Wellness",
    description: "Advanced content filtering and screen time management tools designed by digital addiction specialists.",
    emoji: "🛡️"
  },
  {
    title: "Commitment Protocol",
    description: "Proprietary accountability system that leverages behavioral psychology to strengthen resolve and reduce relapse.",
    emoji: "✋"
  },
  {
    title: "Recovery Community",
    description: "Access to thousands of others on the same journey, with moderated forums and live sessions with recovery coaches.",
    emoji: "📱"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(14,23,39,0.8)] to-[#0A0A0A] z-0"></div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2]">
              Science-Backed Recovery
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Our neuroscience-based approach has helped 35,000+ people overcome addiction with a 94% success rate when following our program.
          </p>
        </div>
        
        {/* Uniform grid for all features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:shadow-lg hover:shadow-purple-500/10 transition-all group h-full flex flex-col"
            >
              <div className="flex items-center mb-3">
                <div className="text-2xl bg-gradient-to-br from-[rgba(138,79,255,0.3)] to-[rgba(138,43,226,0.2)] w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  {feature.emoji}
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-[#8A4FFF] transition-colors">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-white/70 mt-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Feature highlight box */}
        <div className="mt-12 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4 text-white">
                The Brain Science Behind Recovery
              </h3>
              <p className="text-white/70 mb-4">
                PWR's approach is based on cutting-edge neuroscience research on how addiction physically changes the brain and how we can reverse those changes. Our system combines neuroplasticity training, dopamine recalibration, and cognitive restructuring to restore healthy brain function.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-[#8A4FFF]/20 text-white px-3 py-1 rounded-full text-sm border border-[#8A4FFF]/30">Neuroplasticity</span>
                <span className="bg-[#8A4FFF]/20 text-white px-3 py-1 rounded-full text-sm border border-[#8A4FFF]/30">Dopamine Restoration</span>
                <span className="bg-[#8A4FFF]/20 text-white px-3 py-1 rounded-full text-sm border border-[#8A4FFF]/30">Clinically Tested</span>
                <span className="bg-[#8A4FFF]/20 text-white px-3 py-1 rounded-full text-sm border border-[#8A4FFF]/30">Personalized Plans</span>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#8A4FFF] to-[#8E2DE2] rounded-full flex items-center justify-center text-white text-5xl md:text-6xl shadow-lg shadow-[#8A4FFF]/20">
                🧠
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 