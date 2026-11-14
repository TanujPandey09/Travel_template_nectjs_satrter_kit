'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Compass,
  CalendarBlank,
  Clock,
  ArrowRight,
  CaretRight,
  ShareNetwork,
  BookmarkSimple,
  CheckCircle,
  Lightbulb,
  PhoneCall,
  WhatsappLogo,
  ArrowLeft,
  Sparkle,
} from '@phosphor-icons/react';
import { Navbar } from '@/components/Navbar';
import { ScenicLandscapeFooter } from '@/components/ScenicLandscapeFooter';
import { PlanJourneyModal } from '@/components/PlanJourneyModal';
import { BlogPost } from '@/data/blogData';
import { AGENCY_CONFIG } from '@/data/travelData';

interface BlogDetailClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export const BlogDetailClient: React.FC<BlogDetailClientProps> = ({
  post,
  relatedPosts,
}) => {
  const [plannerModalOpen, setPlannerModalOpen] = useState(false);
  const [plannerContext, setPlannerContext] = useState('');

  const handleOpenPlanner = (context?: string) => {
    setPlannerContext(context || `Inquiry from Article: ${post.title}`);
    setPlannerModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] relative font-sans selection:bg-[#FF5B37]/20 selection:text-[#FF5B37] w-full overflow-x-hidden">
      {/* Edge-to-Edge Clean Top Navbar */}
      <Navbar onOpenPlanner={handleOpenPlanner} />

      <main className="w-full pt-24 sm:pt-28">
        {/* =========================================================================
            BREADCRUMBS
           ========================================================================= */}
        <div className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-4 max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <CaretRight size={12} weight="bold" />
          <Link href="/blog" className="hover:text-slate-900 transition-colors">
            Travel Journal
          </Link>
          <CaretRight size={12} weight="bold" />
          <span className="text-slate-900 font-bold truncate">{post.title}</span>
        </div>

        {/* =========================================================================
            ARTICLE HERO
           ========================================================================= */}
        <article className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-12 max-w-7xl mx-auto">
          {/* Header Block */}
          <div className="max-w-4xl mx-auto text-center mb-8 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-50 text-[#FF5B37] text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-slate-900 tracking-tight leading-[1.12]">
              {post.title}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
              {post.excerpt}
            </p>

            {/* Author Meta Strip */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2.5">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div className="text-left">
                  <p className="font-extrabold text-slate-900 leading-tight">
                    {post.author.name}
                  </p>
                  <p className="text-[11px] text-slate-500 leading-tight">{post.author.role}</p>
                </div>
              </div>

              <span>&bull;</span>

              <span className="flex items-center gap-1.5 font-medium">
                <CalendarBlank size={15} weight="bold" className="text-slate-400" />
                <span>{post.publishDate}</span>
              </span>

              <span>&bull;</span>

              <span className="flex items-center gap-1.5 font-medium">
                <Clock size={15} weight="bold" className="text-slate-400" />
                <span>{post.readingTime}</span>
              </span>
            </div>
          </div>

          {/* Panoramic Cover Image */}
          <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden aspect-[16/9] sm:aspect-[21/9] bg-slate-900 shadow-2xl mb-14">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover filter brightness-[0.95]"
            />
          </div>

          {/* =========================================================================
              ARTICLE BODY & SIDEBAR
             ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
            {/* Main Article Content */}
            <div className="lg:col-span-8 space-y-10">
              {/* Executive Overview Box */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 text-slate-800 text-sm sm:text-base leading-relaxed font-normal shadow-2xs">
                <p className="font-medium">{post.overview}</p>
              </div>

              {/* Sections */}
              <div className="space-y-10">
                {post.sections.map((sec, idx) => (
                  <section key={idx} className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                      {sec.heading}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {sec.body}
                    </p>

                    {sec.tip && (
                      <div className="p-4 sm:p-5 rounded-2xl bg-orange-50/70 border border-orange-200/80 text-slate-800 text-xs sm:text-sm flex items-start gap-3">
                        <Lightbulb size={20} weight="fill" className="text-[#FF5B37] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 block mb-0.5">Field Protocol:</strong>
                          <span>{sec.tip}</span>
                        </div>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Key Takeaways Checklist Box */}
              <div className="p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-white shadow-sm space-y-4">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <CheckCircle size={22} weight="fill" className="text-emerald-600" />
                  <span>Key Expedition Takeaways</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {post.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
                  Related Tags:
                </span>
                {post.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* Author Bio Card */}
              <div className="p-6 rounded-3xl border border-slate-200/90 bg-slate-50 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-900">
                    Written by {post.author.name}
                  </h4>
                  <p className="text-xs font-bold text-[#FF5B37]">{post.author.role}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Local mountain leader and contributor to Alpinex’s Himalayan Safety &amp; Route Logistics Commission.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar Sticky CTA Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B37] block mb-1">
                    Inspired by this Guide?
                  </span>
                  <h3 className="text-xl font-black text-slate-900 leading-tight">
                    Plan This Exact Himalayan Route
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Our concierge team handles hotel vouchers, biometric passes, and dedicated hill-certified chauffeurs.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenPlanner(`Inquiry from Guide: ${post.title}`)}
                  className="w-full py-3.5 rounded-full bg-slate-950 hover:bg-[#FF5B37] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span>Book This Expedition</span>
                  <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-1" />
                </button>

                <div className="pt-2 border-t border-slate-100 space-y-2 text-xs">
                  <a
                    href={`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=Hi%2C%20I%20just%20read%20your%20guide%20on%20${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-emerald-50 text-emerald-800 font-bold flex items-center justify-center gap-2 hover:bg-emerald-100 transition-colors"
                  >
                    <WhatsappLogo size={16} weight="fill" className="text-emerald-600" />
                    <span>WhatsApp Concierge</span>
                  </a>

                  <a
                    href={`tel:${AGENCY_CONFIG.phoneDisplay.replace(/\s+/g, '')}`}
                    className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors"
                  >
                    <PhoneCall size={16} weight="fill" className="text-[#FF5B37]" />
                    <span>{AGENCY_CONFIG.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* =========================================================================
            RELATED GUIDES
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-20 max-w-7xl mx-auto border-t border-slate-100 pt-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF5B37] block mb-1">
                More Travel Intelligence
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Related Field Notes &amp; Guides
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-xs sm:text-sm font-bold text-slate-700 hover:text-[#FF5B37] transition-colors flex items-center gap-1"
            >
              <span>View All Articles</span>
              <ArrowRight size={13} weight="bold" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="group rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:border-[#FF5B37]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                  <img
                    src={rel.coverImage}
                    alt={rel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-extrabold text-slate-900">
                    {rel.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between space-y-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#FF5B37] transition-colors line-clamp-2">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {rel.excerpt}
                  </p>
                  <div className="text-[11px] text-slate-400 font-semibold pt-2">
                    {rel.publishDate} &bull; {rel.readingTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Universal Scenic Mountain Footer */}
      <ScenicLandscapeFooter />

      {/* Concierge Planner Modal */}
      <PlanJourneyModal
        isOpen={plannerModalOpen}
        onClose={() => setPlannerModalOpen(false)}
        initialContext={plannerContext}
      />
    </div>
  );
};

