import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Compass,
  MapPin,
  Mountains,
  CalendarBlank,
  AirplaneTilt,
  Train,
  Star,
  CheckCircle,
  ShieldCheck,
  PhoneCall,
  WhatsappLogo,
  ArrowRight,
  CaretRight,
  Sparkle,
  SuitcaseSimple,
  SunHorizon,
} from '@phosphor-icons/react/dist/ssr';
import { DESTINATIONS_DATA } from '@/data/destinationsData';
import { DestinationDetailClient } from './DestinationDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DESTINATIONS_DATA.map((dest) => ({
    slug: dest.slug,
  }));
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = DESTINATIONS_DATA.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  // Find related destinations in the same or adjacent category
  const relatedDestinations = DESTINATIONS_DATA.filter(
    (d) => d.slug !== destination.slug
  ).slice(0, 3);

  return (
    <DestinationDetailClient
      destination={destination}
      relatedDestinations={relatedDestinations}
    />
  );
}

