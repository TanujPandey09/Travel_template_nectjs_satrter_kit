'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { LogosCarousel } from '@/components/LogosCarousel';
import { CraftJourneysCollage } from '@/components/CraftJourneysCollage';
import { PartnerLogos } from '@/components/PartnerLogos';
import { TopDestinations } from '@/components/TopDestinations';
import { BrandBanner } from '@/components/BrandBanner';
import { ExperienceInMotion } from '@/components/ExperienceInMotion';
import { DarkDestinationChoice } from '@/components/DarkDestinationChoice';
import { ReviewsAndStats } from '@/components/ReviewsAndStats';
import { PhotoCollageStats } from '@/components/PhotoCollageStats';
import { BookingFlowSteps } from '@/components/BookingFlowSteps';
import { CtaBanner } from '@/components/CtaBanner';
import { FaqAccordion } from '@/components/FaqAccordion';
import { EditorialHighlights } from '@/components/EditorialHighlights';
import { InstagramFeed } from '@/components/InstagramFeed';
import { ScenicLandscapeFooter } from '@/components/ScenicLandscapeFooter';
import { PlanJourneyModal } from '@/components/PlanJourneyModal';

export default function HomePage() {
  const [plannerModalOpen, setPlannerModalOpen] = useState<boolean>(false);
  const [plannerContext, setPlannerContext] = useState<string>('');

  const handleOpenPlanner = (context?: string) => {
    setPlannerContext(context || 'Custom Expedition Dossier or Fleet Charter');
    setPlannerModalOpen(true);
  };

  const handleSelectDestination = (destName: string) => {
    handleOpenPlanner(`Expedition to ${destName}`);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] relative font-sans selection:bg-[#FF5B37]/20 selection:text-[#FF5B37] w-full overflow-x-hidden">
      {/* Skip to Content for Accessibility */}
      <a
        href="#destinations"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-[#FF5B37] focus:px-4 focus:py-2 focus:text-white focus:text-xs focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Floating Glass Navbar */}
      <Navbar onOpenPlanner={handleOpenPlanner} />

      {/* Main Full-Page Flow Matching Reference Screenshot 1:1 */}
      <main className="w-full">
        {/* 1. Full-Screen Cinematic Hero with Pexels Images & Video Carousel + Water Splash Canvas */}
        <Hero
          onSearchPackages={(filters) => handleOpenPlanner(`Search ${filters.region} tour`)}
          onOpenPlanner={handleOpenPlanner}
        />

        {/* 2. "We don't sell trips, We craft journeys" + 4-Card Fanned Collage + 6 Pillars */}
        <CraftJourneysCollage />

        {/* 3. Partner Hospitality Marks Strip (12000+ Happy sponsors) */}
        <PartnerLogos />

        {/* 4. "Top destinations travelers love" (Same-Height Bento Grid) */}
        <TopDestinations onSelectDestination={handleSelectDestination} />

        {/* 5. Clean Background Infinite Kinetic Typography Carousel ("Destination. Explore. Travel.") */}
        <BrandBanner />

        {/* 6. "Experience the deep in motion" (Video / Motion Photo Split + Value Pillars) */}
        <ExperienceInMotion />

        {/* 7. Dark Section: "Top notch destination for your next adventure" (Video Background + Carousel) */}
        <DarkDestinationChoice onSelectDestination={handleSelectDestination} />

        {/* 9. "Unforgettable journeys around the globe" (4.9 Rating Medallion + 2 Editorial Reviews) */}
        <ReviewsAndStats />

        {/* 10. "30+ Countries Explored" + Fanned Photo Stack */}
        <PhotoCollageStats onOpenPlanner={handleOpenPlanner} />

        {/* 11. "Seamless planning with effortless booking flow" (3 Numbered Steps) */}
        <BookingFlowSteps />

        {/* 12. Full-Width "Start your journey with us today" Dark CTA Banner */}
        <CtaBanner onOpenPlanner={handleOpenPlanner} />

        {/* 13. "Everything You Need To Know Before You Travel" FAQ Accordion */}
        <FaqAccordion onOpenPlanner={handleOpenPlanner} />

        {/* 14. Architectural Highlights: 3 Vertical Masterwork Cards */}
        <EditorialHighlights />

        {/* 15. Alpinex Instagram Feed: Infinite Left-to-Right Carousel */}
        <InstagramFeed onOpenPlanner={handleOpenPlanner} />
      </main>

      {/* 16. Universal Scenic Mountain Framer Footer */}
      <ScenicLandscapeFooter />

      {/* Concierge Route Planner Modal */}
      <PlanJourneyModal
        isOpen={plannerModalOpen}
        initialContext={plannerContext}
        onClose={() => setPlannerModalOpen(false)}
      />
    </div>
  );
}
