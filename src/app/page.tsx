import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Download from '@/components/Download';
import LatestArticles from '@/components/LatestArticles';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'POWER – Quit Porn For Life',
  description: 'Join 250,000+ men on a mission to quit porn forever. POWER provides neuroscience-backed tools, daily tracking, urge management, and community support.',
  alternates: { canonical: 'https://powerquitporn.com' },
  openGraph: {
    title: 'POWER – Quit Porn For Life',
    description: 'The #1 neuroscience-backed app for porn addiction recovery. Trusted by 250,000+ men worldwide.',
    url: 'https://powerquitporn.com',
    type: 'website',
  },
};

const appJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'POWER – Quit Porn',
  operatingSystem: 'iOS',
  applicationCategory: 'HealthApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '12000',
    bestRating: '5',
    worstRating: '1',
  },
  description: 'The #1 neuroscience-backed app for quitting porn addiction. Trusted by 250,000+ men worldwide. Features streak tracking, urge management, brain rewiring programs, and community support.',
  url: 'https://apps.apple.com/us/app/power-quit-porn-now/id6743706444',
  downloadUrl: 'https://apps.apple.com/us/app/power-quit-porn-now/id6743706444',
  author: {
    '@type': 'Organization',
    name: 'POWER',
    url: 'https://powerquitporn.com',
  },
  featureList: [
    'Streak tracking and daily check-ins',
    'Urge management and panic button',
    'Brain rewiring 90-day program',
    'Community support and accountability',
    'Progress analytics and insights',
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <LatestArticles />
        <FAQ />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
