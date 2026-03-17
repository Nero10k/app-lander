import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { faqData } from '@/lib/faq-data';

export const metadata: Metadata = {
  title: 'Porn Addiction FAQ – Every Question Answered | POWER',
  description:
    'Comprehensive answers to every question about porn addiction: what it is, how to quit, brain rewiring, NoFap, PIED, relationships, withdrawal, and recovery timelines.',
  keywords: [
    'porn addiction FAQ',
    'how to quit porn',
    'is porn addiction real',
    'porn withdrawal symptoms',
    'NoFap questions',
    'PIED recovery',
    'how long to quit porn',
    'porn addiction help',
    'brain rewiring porn',
    'dopamine detox',
  ],
  openGraph: {
    title: 'Porn Addiction FAQ – Every Question Answered | POWER',
    description:
      'Comprehensive answers to every question about porn addiction, NoFap, PIED, brain rewiring, and recovery.',
    type: 'website',
  },
};

export default function FAQPage() {
  const allQuestions = faqData.flatMap((cat) =>
    cat.questions.map((q) => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: { '@type': 'Answer', text: q.a },
    }))
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions,
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-black z-0" />
          <div className="absolute top-10 right-10 w-96 h-96 bg-[#8A4FFF]/15 rounded-full blur-3xl z-0" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#8E2DE2]/10 rounded-full blur-3xl z-0" />
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <div className="mb-4 text-sm">
              <Link href="/" className="text-[#8A4FFF] hover:underline">Home</Link>
              <span className="text-white/30 mx-2">/</span>
              <span className="text-white/50">FAQ</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Porn Addiction{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2]">
                FAQ
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Comprehensive, evidence-based answers to every question about porn addiction, recovery, neuroscience, NoFap, PIED, and more.
            </p>

            {/* Category jump links */}
            <div className="flex flex-wrap gap-2 mt-8">
              {faqData.map((cat) => (
                <a
                  key={cat.category}
                  href={`#${cat.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="text-sm px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-[#8A4FFF]/40 transition-all"
                >
                  {cat.category}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <div className="container mx-auto px-4 max-w-4xl space-y-16">
          {faqData.map((cat) => (
            <section
              key={cat.category}
              id={cat.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
            >
              <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-white/10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2]">
                  {cat.category}
                </span>
              </h2>
              <FAQAccordion questions={cat.questions} />
            </section>
          ))}
        </div>

        {/* CTA */}
        <section className="container mx-auto px-4 max-w-4xl mt-20">
          <div className="bg-gradient-to-br from-[#8A4FFF]/15 to-[#8E2DE2]/10 rounded-3xl border border-[#8A4FFF]/20 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to start your recovery?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Download POWER for a personalized 90-day recovery plan built on the science behind every answer on this page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/us/app/power-quit-porn-now/id6743706444"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                Download Free on iOS
              </a>
              <Link
                href="/quiz"
                className="bg-white/5 text-white border border-[#8A4FFF]/40 px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all"
              >
                Take the Assessment
              </Link>
            </div>
          </div>
        </section>

        {/* Related articles */}
        <section className="container mx-auto px-4 max-w-4xl mt-16">
          <h2 className="text-xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: 'How to Quit Porn: A Science-Based 30-Day Plan', slug: 'how-to-quit-porn-30-day-plan' },
              { title: 'What Happens to Your Brain When You Stop Watching Porn', slug: 'what-happens-brain-when-you-stop-watching-porn' },
              { title: 'NoFap Benefits: What 90 Days Without Porn Really Does to You', slug: 'nofap-benefits-90-days' },
              { title: 'Porn-Induced Erectile Dysfunction (PIED)', slug: 'porn-induced-erectile-dysfunction-pied' },
              { title: 'How to Stop Porn Urges: 7 Proven Techniques', slug: 'how-to-stop-porn-urges' },
              { title: "Dopamine Detox: Reset Your Brain's Reward System", slug: 'dopamine-detox-reset-brain-reward-system' },
            ].map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group bg-white/5 rounded-xl border border-white/10 p-4 hover:border-[#8A4FFF]/40 transition-all"
              >
                <span className="text-sm text-white/70 group-hover:text-white transition-colors leading-snug">
                  {a.title}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
