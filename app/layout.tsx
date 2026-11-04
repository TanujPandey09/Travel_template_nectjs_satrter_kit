import type { Metadata } from 'next';
import './globals.css';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';

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
    url: 'https://traveli.com',
    title: 'Traveli • Your Next Adventure Is One Click Away',
    description:
      'Curated holiday expeditions, day-by-day itineraries, luxury Maharaja Tempo Travellers, and verified chauffeurs with zero hidden fees.',
    siteName: 'Traveli Journeys',
    images: [
      {
        url: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Traveli Luxury Tour Packages & Chauffeur Fleet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Traveli • Your Next Adventure Is One Click Away',
    description:
      'Curated holiday expeditions, day-by-day itineraries, and luxury Maharaja Tempo Travellers.',
    images: ['https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1200'],
    creator: '@traveli_journeys',
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
    name: 'Traveli Tours & Chauffeur Fleet',
    image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1200',
    '@id': 'https://traveli.com',
    url: 'https://traveli.com',
    telephone: '+91-98112-23344',
    priceRange: '₹₹ - ₹₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Barakhamba Road, Connaught Place',
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
      ratingValue: '4.9',
      reviewCount: '2480',
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
