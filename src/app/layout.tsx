import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://powerquitporn.com'),
  title: {
    default: 'POWER – Quit Porn For Life',
    template: '%s | POWER',
  },
  description: "Join 250,000+ men on a mission to quit porn forever. POWER provides neuroscience-backed tools, daily tracking, urge management, and community support for your recovery journey.",
  keywords: ["porn addiction", "recovery", "addiction app", "quit porn", "brain rewiring", "streak tracker", "nofap", "porn free"],
  openGraph: {
    siteName: 'POWER',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@powerquitporn',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'POWER',
  url: 'https://powerquitporn.com',
  logo: 'https://powerquitporn.com/logo.png',
  description: 'POWER is the #1 app for quitting porn addiction, trusted by 250,000+ men worldwide. Built on neuroscience.',
  sameAs: [
    'https://apps.apple.com/us/app/power-quit-porn-now/id6743706444',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    url: 'https://powerquitporn.com/contact',
  },
};

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'POWER',
  url: 'https://powerquitporn.com',
  description: 'Science-backed tools and guides to quit porn addiction for life.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://powerquitporn.com/blog?category={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
