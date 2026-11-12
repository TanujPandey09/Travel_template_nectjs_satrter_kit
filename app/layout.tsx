import type { Metadata } from 'next';
import './globals.css';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://traveli.com'),
  title: {
    default: 'Traveli • Your Next Adventure Is One Click Away | Luxury Tours & Fleet',
    template: '%s | Traveli Journeys',
  },
  description:
    'Award-winning modern travel agency. Explore curated holiday tour packages, luxury Maharaja Tempo Travellers, and chauffeur-driven cabs with 100% transparent pricing and 24/7 dedicated travel support.',
  keywords: [
    'travel agency',
    'tour packages',
    'luxury cab booking',
    'maharaja tempo traveller',
    'force urbania van rental',
    'ladakh tour package',
    'kerala honeymoon tour',
    'rajasthan royal tour',
    'chauffeur driven outstation cab',
    'transparent fare calculator',
  ],
  authors: [{ name: 'Traveli Tour & Travels Pvt Ltd' }],
  creator: 'Traveli Journeys',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icon.svg',
  },
  alternates: {
    canonical: 'https://traveli.com',
  },
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} • ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} • ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} • ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/opengraph-image'],
    creator: siteConfig.links.twitter,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD Structured Data for TravelAgency (Maximum SEO power)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: siteConfig.name,
    image: `${siteConfig.url}/opengraph-image`,
    '@id': siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneRaw,
    priceRange: '₹₹ - ₹₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.addressSecondary,
      addressLocality: 'New Delhi',
      postalCode: '110001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.6289,
      longitude: 77.2272,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.stats.rating,
      reviewCount: siteConfig.stats.reviewsCount,
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#F8F9FA] text-[#0F172A] antialiased selection:bg-[#FF5B37]/20 selection:text-[#FF5B37]">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
