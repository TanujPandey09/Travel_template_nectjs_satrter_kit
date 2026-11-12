/**
 * =========================================================================
 * TRAVELI • MASTER TEMPLATE CONFIGURATION
 * =========================================================================
 * 
 * Customize your travel agency branding, contact information, social handles,
 * and regional settings here in ONE central place.
 * All navbar links, footers, modal triggers, and SEO metadata automatically
 * read from this configuration.
 */

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    facebook: string;
    instagram: string;
    youtube: string;
  };
  contact: {
    phoneDisplay: string;
    phoneRaw: string;
    whatsappNumber: string;
    whatsappUrl: string;
    email: string;
    addressPrimary: string;
    addressSecondary: string;
    tourismRegNumber: string;
    gstin: string;
  };
  stats: {
    rating: string;
    reviewsCount: string;
    countriesExplored: string;
    satisfiedTravelers: string;
    fleetVehicles: string;
  };
  author: {
    name: string;
    website: string;
    role: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'TRAVELI',
  shortName: 'Traveli',
  tagline: 'Curated Expeditions & Bespoke Mountain Journeys',
  description:
    'Award-winning luxury travel template and Next.js starter kit. Curated holiday circuits, high-altitude chauffeur fleet, and transparent pricing.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://traveli.in',
  ogImage: '/opengraph-image',
  links: {
    twitter: 'https://twitter.com/traveli_expeditions',
    facebook: 'https://facebook.com/traveli.expeditions',
    instagram: 'https://instagram.com/traveli.expeditions',
    youtube: 'https://youtube.com/@traveli_expeditions',
  },
  contact: {
    phoneDisplay: '+91 98114 72940',
    phoneRaw: '+919811472940',
    whatsappNumber: '919811472940',
    whatsappUrl: 'https://wa.me/919811472940',
    email: 'concierge@traveli.in',
    addressPrimary: 'Tapovan, Laxman Jhula Road, Rishikesh, Uttarakhand 249192',
    addressSecondary: 'Statesman House, Barakhamba Road, Connaught Place, New Delhi 110001',
    tourismRegNumber: 'UK-TOUR-2026-99214',
    gstin: '05AABCT9841K1Z8',
  },
  stats: {
    rating: '4.9',
    reviewsCount: '2,480+',
    countriesExplored: '30+',
    satisfiedTravelers: '12,000+',
    fleetVehicles: '24+',
  },
  author: {
    name: 'Tanujtanujbuildsite',
    website: 'https://tanujbuildsite.com/',
    role: 'Lead Designer & Fullstack Engineer',
  },
};

