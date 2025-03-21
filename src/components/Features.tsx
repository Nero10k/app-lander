"use client";

import React from 'react';

const features = [
  {
    title: "Streak Tracking",
    description: "Monitor your progress with a day counter and detailed analytics to visualize your recovery journey.",
    emoji: "🔥"
  },
  {
    title: "Brain Rewiring",
    description: "Track your neurological recovery progress as you reach milestones in your 90-day reboot.",
    emoji: "🧠"
  },
  {
    title: "Community Support",
    description: "Connect with others on the same journey through a moderated community forum where you can share experiences.",
    emoji: "👥"
  },
  {
    title: "Emergency Tools",
    description: "Access immediate help during moments of temptation with the panic button and relapse prevention techniques.",
    emoji: "🚨"
  },
  {
    title: "AI Chatbot",
    description: "Get personalized support and advice through an AI assistant that understands addiction recovery.",
    emoji: "🤖"
  },
  {
    title: "Daily Tips",
    description: "Receive daily motivation and practical strategies to maintain your commitment.",
    emoji: "💡"
  },
  {
    title: "Journaling",
    description: "Track thoughts, triggers, and victories to identify patterns and celebrate progress.",
    emoji: "📝"
  },
  {
    title: "Content Filtering",
    description: "Set up protective measures to block harmful content on your devices.",
    emoji: "🛡️"
  },
  {
    title: "Pledge System",
    description: "Make daily commitments to strengthen your resolve and accountability.",
    emoji: "✋"
  },
  {
    title: "Telegram Community",
    description: "Join our supportive Telegram group for additional real-time encouragement and accountability.",
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
              Key Features
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Our comprehensive solution provides all the tools you need to overcome addiction and reclaim control of your life.
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
                A Complete Recovery System
              </h3>
              <p className="text-white/70 mb-4">
                The PWR app combines all these features into a seamless experience designed to support every aspect of your recovery journey. From tracking progress to emergency support, we've built a comprehensive solution to help you succeed.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-[#8A4FFF]/20 text-white px-3 py-1 rounded-full text-sm border border-[#8A4FFF]/30">Science-based</span>
                <span className="bg-[#8A4FFF]/20 text-white px-3 py-1 rounded-full text-sm border border-[#8A4FFF]/30">Community-driven</span>
                <span className="bg-[#8A4FFF]/20 text-white px-3 py-1 rounded-full text-sm border border-[#8A4FFF]/30">Privacy-focused</span>
                <span className="bg-[#8A4FFF]/20 text-white px-3 py-1 rounded-full text-sm border border-[#8A4FFF]/30">24/7 Support</span>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#8A4FFF] to-[#8E2DE2] rounded-full flex items-center justify-center text-white text-5xl md:text-6xl shadow-lg shadow-[#8A4FFF]/20">
                💪
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 