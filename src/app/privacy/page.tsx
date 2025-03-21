import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
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

      {/* Privacy Policy Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-8">
              At Power, your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our app. By accessing or using Power, you consent to the practices described below.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="mb-4">We collect the following types of information to provide and improve our services:</p>
              
              <h3 className="text-xl font-semibold mb-2">1.1 Personal Information:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Account details such as name, email address, and date of birth (if provided)</li>
                <li>Payment information for subscription services (processed securely by third-party providers)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">1.2 Usage Data:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>App activity, such as feature usage and session duration</li>
                <li>Device information, including operating system, app version, and IP address</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">1.3 Optional Data:</h3>
              <ul className="list-disc pl-6">
                <li>Community contributions (e.g., forum posts, comments) shared by you within the app</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6">
                <li>Provide, personalize, and improve the app's functionality</li>
                <li>Communicate with you about updates, features, and support</li>
                <li>Analyze usage trends to enhance user experience</li>
                <li>Process payments and manage subscriptions</li>
                <li>Ensure compliance with our Terms and Conditions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Data Sharing</h2>
              <p className="mb-4">We do not sell or rent your personal information to third parties. However, we may share information in the following cases:</p>
              
              <h3 className="text-xl font-semibold mb-2">3.1 Service Providers:</h3>
              <p className="mb-4">Trusted third parties that assist with payment processing, analytics, and app hosting.</p>

              <h3 className="text-xl font-semibold mb-2">3.2 Legal Compliance:</h3>
              <p className="mb-4">When required to comply with legal obligations or protect the rights, safety, and property of Power, its users, or others.</p>

              <h3 className="text-xl font-semibold mb-2">3.3 Business Transfers:</h3>
              <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information. However, no method of electronic storage or transmission is 100% secure. While we strive to protect your data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the following rights regarding your data:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access and Portability: Request access to or a copy of your personal data</li>
                <li>Correction: Update or correct inaccurate information</li>
                <li>Deletion: Request the deletion of your account and associated data</li>
                <li>Restriction: Limit the processing of your data in certain circumstances</li>
                <li>Withdrawal of Consent: Revoke consent for specific data uses</li>
              </ul>
              <p>To exercise these rights, contact us at support@powerapp.com</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
              <p>
                We retain your personal data for as long as necessary to provide the app's services or comply with legal obligations. Upon account deletion, we will securely delete or anonymize your data unless required by law to retain it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="mb-4">Power uses cookies and similar technologies to:</p>
              <ul className="list-disc pl-6">
                <li>Understand app usage and improve functionality</li>
                <li>Deliver a seamless and personalized experience</li>
              </ul>
              <p className="mt-4">You can control cookie preferences through your device settings.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Third-Party Links</h2>
              <p>
                Our app may include links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties. We encourage you to review their privacy policies before providing any information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Updates to this Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices or for legal reasons. We will notify you of significant updates and encourage you to review this document regularly.
              </p>
            </section>
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