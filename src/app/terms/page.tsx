import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
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

      {/* Terms & Conditions Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-8">
              Welcome to Power, a science-based sobriety app designed to help users overcome porn addiction and develop healthier habits. By downloading or using our app, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Power, you agree to these Terms and Conditions and any additional terms applicable to certain features or services. If you do not agree, please discontinue use of the app immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
              <p>
                You must be at least 16 years old to use Power. By using the app, you confirm that you meet this age requirement. Parents or legal guardians are responsible for monitoring the use of the app by minors under their supervision.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Account Registration</h2>
              <p className="mb-4">To access certain features, you may be required to create an account. You agree to:</p>
              <ul className="list-disc pl-6">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Keep your login credentials secure</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Use of the App</h2>
              <p className="mb-4">
                Power is designed to provide educational resources, tools, and community support. You agree to use the app responsibly and in accordance with these Terms. You may not:
              </p>
              <ul className="list-disc pl-6">
                <li>Use the app for unlawful purposes or activities</li>
                <li>Disrupt or interfere with the app's functionality</li>
                <li>Attempt to reverse-engineer or exploit the app's software</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Privacy and Data</h2>
              <p>
                We are committed to protecting your privacy. Please review our <Link href="/privacy" className="text-purple-400 hover:text-purple-300">Privacy Policy</Link> to understand how your data is collected, used, and stored. By using the app, you consent to the practices described in the Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Paid Subscriptions and Billing</h2>
              <p className="mb-4">Certain features of Power are available through a paid subscription. By purchasing a subscription, you agree to:</p>
              <ul className="list-disc pl-6">
                <li>Pay all applicable fees promptly</li>
                <li>Allow us to charge your provided payment method for recurring subscriptions until you cancel</li>
                <li>Understand that cancellation and refunds are subject to our discretion and applicable app store policies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Disclaimer of Warranties</h2>
              <p>
                Power is provided on an "as-is" and "as-available" basis. We do not guarantee the app will be free of errors, interruptions, or security vulnerabilities. Results may vary for individual users.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p className="mb-4">To the fullest extent permitted by law, Power and its creators are not liable for:</p>
              <ul className="list-disc pl-6">
                <li>Any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the app</li>
                <li>Loss of data, reputation, or profits arising from the app's use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Community Guidelines</h2>
              <p className="mb-4">Power fosters a supportive community for individuals seeking sobriety. By participating in our forums or chats, you agree to:</p>
              <ul className="list-disc pl-6">
                <li>Respect other users' privacy and opinions</li>
                <li>Refrain from posting offensive, harmful, or illegal content</li>
                <li>Understand that violation of these guidelines may result in suspension or termination of your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Intellectual Property</h2>
              <p>
                All content, trademarks, and materials provided through Power are the property of the app's creators or licensed to us. You may not reproduce, distribute, or modify this content without prior permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
              <p>
                We may update these Terms and Conditions periodically. Continued use of the app after such changes constitutes your acceptance of the new terms. We recommend reviewing this document regularly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">12. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to Power at our sole discretion, without prior notice, for violation of these Terms or any applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">13. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
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