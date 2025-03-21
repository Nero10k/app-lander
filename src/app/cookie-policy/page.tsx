import React from 'react';
import Link from 'next/link';

export default function CookiePolicyPage() {
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

      {/* Cookie Policy Content */}
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
                <p className="text-gray-300">
                  Cookies are small text files that are placed on your device when you visit our website or use our app. They help us provide you with a better experience by remembering your preferences and understanding how you use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
                <p className="mb-4">We use cookies for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Essential cookies: Required for the website to function properly</li>
                  <li>Analytics cookies: Help us understand how visitors interact with our site</li>
                  <li>Preference cookies: Remember your settings and preferences</li>
                  <li>Authentication cookies: Keep you logged in to your account</li>
                  <li>Performance cookies: Help us improve our website's performance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
                    <p className="text-gray-300">
                      These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Analytics Cookies</h3>
                    <p className="text-gray-300">
                      We use analytics cookies to understand how visitors interact with our website. This helps us improve our services and user experience.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Preference Cookies</h3>
                    <p className="text-gray-300">
                      These cookies remember your settings and preferences to provide a more personalized experience.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Managing Cookies</h2>
                <p className="text-gray-300">
                  You can control and manage cookies in various ways. Please note that removing or blocking cookies can impact your experience and the functionality of our website.
                </p>
                <p className="mt-4 text-gray-300">
                  You can manage your cookie preferences through your browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-2">
                  <li>View cookies stored on your device</li>
                  <li>Block all or specific types of cookies</li>
                  <li>Delete cookies from your device</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Updates to This Policy</h2>
                <p className="text-gray-300">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any significant changes by posting the new policy on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about our use of cookies, please contact us at support@powerapp.com
                </p>
              </section>
            </div>
          </div>
        </div>
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