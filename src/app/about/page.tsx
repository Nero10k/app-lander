import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
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

      {/* About Us Content */}
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <h1 className="text-5xl font-bold mb-6">About Power</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            We're on a mission to empower men to break free from porn addiction and reclaim their lives through science-based tools and community support.
          </p>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Power was founded by a team of experts in psychology, technology, and addiction recovery who recognized the need for a more effective, science-based approach to overcoming porn addiction.
              </p>
              <p className="text-gray-300">
                We combined cutting-edge research in addiction science with modern technology to create a comprehensive solution that addresses both the psychological and behavioral aspects of recovery.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/app-screenshot.svg"
                alt="Power App Interface"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg">
              To provide men with the tools, knowledge, and support they need to overcome porn addiction and build healthier, more fulfilling lives. We believe in the power of science, community, and technology to create lasting positive change.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0A0A0A] p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4">Science-Based</h3>
              <p className="text-gray-300">
                Every feature and tool in Power is grounded in scientific research and evidence-based practices.
              </p>
            </div>
            <div className="bg-[#0A0A0A] p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4">Privacy First</h3>
              <p className="text-gray-300">
                We prioritize user privacy and data security, ensuring a safe and confidential recovery journey.
              </p>
            </div>
            <div className="bg-[#0A0A0A] p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4">Community Support</h3>
              <p className="text-gray-300">
                We foster a supportive community where users can share experiences and find strength in numbers.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0A0A0A] p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4">Expert Advisors</h3>
              <p className="text-gray-300">
                Our team includes leading experts in addiction psychology, neuroscience, and behavioral therapy who guide our product development and ensure our approach remains grounded in science.
              </p>
            </div>
            <div className="bg-[#0A0A0A] p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4">Tech Innovators</h3>
              <p className="text-gray-300">
                Our development team combines cutting-edge technology with user-centered design to create an intuitive and effective recovery platform.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Us on This Journey</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards a healthier, more fulfilling life. Download Power today and join thousands of men who have already begun their recovery journey.
            </p>
            <Link 
              href="/#download" 
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-colors inline-block"
            >
              Download Power
            </Link>
          </div>
        </section>
      </main>

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