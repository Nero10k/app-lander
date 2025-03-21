"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const appPages = [
  {
    id: "dashboard",
    title: "Dashboard",
    description: "Track your streak, brain rewiring progress, and access quick actions like daily pledges and emergency tools.",
    features: [
      "Streak Tracking: Days, hours, minutes, and seconds of sobriety",
      "Brain Rewiring Progress: Visual progress bar (0-90 days)",
      "Quick Action Buttons: Pledge, Reset, Join Chat",
      "Daily Tips: Motivational and educational content",
      "Goal Tracking: Projected completion date for 90-day reboot"
    ],
    image: "/app-screenshot.svg"
  },
  {
    id: "analytics",
    title: "Analytics",
    description: "Visualize your progress with detailed statistics, charts, and milestone tracking.",
    features: [
      "Streak Statistics: Current and longest streak data",
      "Brain Rewiring Visualization: Detailed progress charts",
      "Milestone Tracking: Achievements and upcoming milestones",
      "Benefits Timeline: Visual representation of recovery benefits",
      "Historical Data: View past streaks and patterns"
    ],
    image: "/app-screenshot3.svg"
  },
  {
    id: "community",
    title: "Community",
    description: "Connect with others on the same journey through our supportive community forum.",
    features: [
      "Discussion Forum: Post and respond to community topics",
      "Anonymous Posting: Option to post without revealing identity",
      "Content Categories: Organized sections for different topics",
      "Reaction System: Like and support other users' content",
      "Comment System: Engage in conversations on posts"
    ],
    image: "/community-new.svg"
  },
  {
    id: "ai-chat",
    title: "AI Chat",
    description: "Get personalized support through our AI-powered assistant that understands addiction recovery.",
    features: [
      "24/7 Support: AI assistant available anytime",
      "Personalized Advice: Tailored recommendations",
      "Urge Management: Techniques for handling cravings",
      "Educational Content: Information about addiction and recovery",
      "Strategy Development: Create personalized recovery plans"
    ],
    image: "/ai-chat-screenshot.svg"
  },
  {
    id: "journal",
    title: "Journal",
    description: "Track your thoughts, triggers, and victories to identify patterns and celebrate progress.",
    features: [
      "Daily Entries: Record your experiences and emotions",
      "Trigger Tracking: Identify and analyze what causes urges",
      "Mood Tracking: Monitor emotional patterns over time",
      "Victory Log: Document and celebrate your successes",
      "Reflection Prompts: Guided journaling questions"
    ],
    image: "/blog-image3.svg"
  },
  {
    id: "panic-button",
    title: "Panic Button",
    description: "Access immediate help during moments of temptation with emergency tools and techniques.",
    features: [
      "Immediate Interventions: Quick access to coping strategies",
      "Breathing Exercises: Guided breathing to reduce urges",
      "Motivation Reminders: Why you started this journey",
      "Distraction Activities: Suggestions to redirect focus",
      "Emergency Contact: Connect with accountability partners"
    ],
    image: "/app-screenshot3.svg"
  }
];

export default function HowItWorks() {
  const [activePage, setActivePage] = useState("dashboard");
  
  const currentPage = appPages.find(page => page.id === activePage) || appPages[0];
  
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(14,23,39,0.8)] to-[#0A0A0A] z-0"></div>
      
      {/* Purple gradient accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[rgba(138,79,255,0.3)] to-[rgba(138,43,226,0.2)] rounded-full filter blur-3xl opacity-20 z-0"></div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2]">
              How Power App Works
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Explore the key features of each page in our comprehensive recovery app.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6 text-white">App Pages</h3>
              
              <div className="space-y-3">
                {appPages.map(page => (
                  <button
                    key={page.id}
                    onClick={() => setActivePage(page.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activePage === page.id 
                        ? 'bg-gradient-to-r from-[#8A4FFF]/20 to-[#8E2DE2]/20 border border-[#8A4FFF]/30 text-white' 
                        : 'hover:bg-white/5 text-white/70 hover:text-white'
                    }`}
                  >
                    {page.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-3 text-white">{currentPage.title} Page</h3>
                  <p className="text-white/70 mb-3">{currentPage.description}</p>
                  
                  <h4 className="text-lg font-medium mb-2 text-white">Key Functionality:</h4>
                  <ul className="space-y-2">
                    {currentPage.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#8A4FFF] mr-2">•</span>
                        <span className="text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="md:w-1/2 relative">
                  {/* App screenshot without phone frame */}
                  <div className="relative">
                    <Image 
                      src={currentPage.image} 
                      alt={`PWR App ${currentPage.title} Page`} 
                      width={300} 
                      height={600}
                      className="w-full rounded-[24px] object-contain"
                      priority={currentPage.id === "dashboard"}
                    />
                    
                    {/* Decorative elements */}
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#8A4FFF] to-[#8E2DE2] rounded-full filter blur-xl opacity-30 z-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 