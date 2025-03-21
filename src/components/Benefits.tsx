import React from 'react';
import Image from 'next/image';

const benefits = [
  {
    title: "Increased Testosterone",
    description: "Experience higher testosterone levels, leading to improved energy, motivation, and overall vitality.",
    icon: "💪"
  },
  {
    title: "Improved Focus",
    description: "Regain your ability to concentrate and stay present, enhancing productivity and mental clarity.",
    icon: "🎯"
  },
  {
    title: "Better Relationships",
    description: "Develop healthier, more authentic connections with others based on genuine intimacy.",
    icon: "❤️"
  },
  {
    title: "Reduced Anxiety",
    description: "Experience decreased social anxiety and improved confidence in social situations.",
    icon: "😌"
  },
  {
    title: "More Free Time",
    description: "Reclaim hours of your day previously lost to addiction for productive and fulfilling activities.",
    icon: "⏰"
  },
  {
    title: "Increased Motivation",
    description: "Feel more driven to pursue your goals and engage in meaningful activities.",
    icon: "🚀"
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-[rgba(14,23,39,0.8)] z-0"></div>
      
      {/* Purple gradient accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-br from-[rgba(138,79,255,0.3)] to-[rgba(138,43,226,0.2)] rounded-full filter blur-3xl opacity-20 z-0"></div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2]">
              Benefits of Freedom
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Breaking free from pornography addiction leads to numerous physical, mental, and social improvements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
              <p className="text-white/70">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                The Science of Recovery
              </h3>
              <p className="text-white/70 mb-4">
                Research shows that the brain can heal from the effects of pornography addiction through a process called neuroplasticity. The PWR app is designed to support this healing process.
              </p>
              <p className="text-white/70 mb-6">
                Our 90-day reboot program is based on scientific research showing that it takes approximately three months for the brain to begin significant rewiring and recovery from addiction patterns.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-1 bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] rounded-full"></div>
                <span className="text-white/80 font-medium">Day 1</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full mt-2 mb-4 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] rounded-full" style={{ width: '33%' }}></div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-1 bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] rounded-full"></div>
                <span className="text-white/80 font-medium">Day 30</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full mt-2 mb-4 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] rounded-full" style={{ width: '66%' }}></div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-1 bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] rounded-full"></div>
                <span className="text-white/80 font-medium">Day 90</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="relative z-10">
                <div className="rounded-[24px] overflow-hidden">
                  <Image 
                    src="/app-screenshot2.svg" 
                    alt="PWR App Benefits" 
                    width={300} 
                    height={600}
                    className="w-full"
                    priority
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#8A4FFF] to-[#8E2DE2] rounded-full filter blur-xl opacity-30 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 