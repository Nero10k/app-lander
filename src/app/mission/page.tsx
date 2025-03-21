import React from 'react';
import Link from 'next/link';

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0A0A0A]/90 to-[rgba(2,9,23,0.9)]/90 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              POWER
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/#features" className="text-white/80 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/#benefits" className="text-white/80 hover:text-white transition-colors">
              Benefits
            </Link>
            <Link href="/#how-it-works" className="text-white/80 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="/#testimonials" className="text-white/80 hover:text-white transition-colors">
              Testimonials
            </Link>
            <Link href="/#faq" className="text-white/80 hover:text-white transition-colors">
              FAQ
            </Link>
          </nav>
          
          <div>
            <Link 
              href="/#download" 
              className="bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all"
            >
              Download
            </Link>
          </div>
        </div>
      </header>

      {/* Mission Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-[rgba(14,23,39,0.8)] z-0"></div>
        
        {/* Purple gradient accent */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[rgba(138,79,255,0.3)] to-[rgba(138,43,226,0.2)] rounded-full filter blur-3xl opacity-30 z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[rgba(142,45,226,0.8)] to-[rgba(74,0,224,0.6)] rounded-full filter blur-3xl opacity-20 z-0"></div>
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-white">Our Mission</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2]">
                Empowering Recovery
              </span>
            </h1>
            
            <p className="text-lg text-white/80 mb-8">
              At Power, we're dedicated to helping individuals break free from pornography addiction through technology, community, and science-based approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Content */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(14,23,39,0.8)] to-[#0A0A0A] z-0"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Vision */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Vision</h2>
              <p className="text-white/70">
                We envision a world where technology serves as a powerful tool for personal growth and recovery, where individuals can access support and resources to overcome addiction and lead fulfilling lives.
              </p>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Values</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <span className="text-[#8A4FFF] mr-2">•</span>
                  <span>Privacy and Anonymity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A4FFF] mr-2">•</span>
                  <span>Scientific Approach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A4FFF] mr-2">•</span>
                  <span>Community Support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8A4FFF] mr-2">•</span>
                  <span>Continuous Innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-[rgba(14,23,39,0.8)] z-0"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Be part of our mission to help individuals break free from addiction and reclaim their lives.
            </p>
            <Link 
              href="/#download" 
              className="bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all inline-block"
            >
              Download Power App
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold text-white">
                POWER
              </span>
              <p className="text-gray-500 mt-4 max-w-md">
                Empowering men to break free from porn addiction and reclaim their lives through science-based tools and community support.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-white/50 hover:text-white text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 