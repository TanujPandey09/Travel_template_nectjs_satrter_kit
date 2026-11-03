'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Compass,
  MagnifyingGlass,
  CalendarBlank,
  Clock,
  ArrowRight,
  Sparkle,
  BookOpen,
  Tag,
} from '@phosphor-icons/react';
import { Navbar } from '@/components/Navbar';
import { ScenicLandscapeFooter } from '@/components/ScenicLandscapeFooter';
import { PlanJourneyModal } from '@/components/PlanJourneyModal';
import { CtaBanner } from '@/components/CtaBanner';
import { BLOG_POSTS, BlogPost } from '@/data/blogData';

const BLOG_CATEGORIES = [
  'All Articles',
  'Char Dham & Pilgrimage',
  'Ski & Snow',
  'Wildlife & Safari',
  'Mountain Road Safety',
  'Offbeat Treks',
  'Royal Heritage',
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [plannerModalOpen, setPlannerModalOpen] = useState(false);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCat =
        selectedCategory === 'All Articles' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0F172A] relative font-sans selection:bg-[#FF5B37]/20 selection:text-[#FF5B37] w-full overflow-x-hidden">
      {/* Edge-to-Edge Clean Top Navbar */}
      <Navbar onOpenPlanner={() => setPlannerModalOpen(true)} />

      <main className="w-full pt-24 sm:pt-28">
        {/* =========================================================================
            SECTION 1: HERO - Matching About page signature cinematic card
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-14 sm:mb-20">
          <div className="relative w-full max-w-7xl mx-auto rounded-3xl sm:rounded-[40px] overflow-hidden min-h-[360px] sm:min-h-[460px] md:min-h-[500px] flex flex-col items-center justify-center p-8 sm:p-16 text-center text-white shadow-2xl bg-slate-950">
            {/* Mountain trail scenic background photo */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <img
                src="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=2000"
                alt="Scenic Himalayan valley lake and pine ridges"
                className="w-full h-full object-cover filter brightness-[0.52] contrast-[1.15]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-slate-950/50" />
            </div>

            {/* Inner Content */}
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
              {/* Tilted Floating Pill Tag */}
              <div className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-md border border-white/25 rounded-full shadow-sm text-xs font-semibold text-white -rotate-2 hover:rotate-0 transition-transform mb-6">
                <span>Travel Journal &amp; Field Notes</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] max-w-3xl">
                Expedition dispatches &amp;<br className="hidden sm:inline" /> Himalayan guides
              </h1>

              {/* Subtle supporting narrative */}
              <p className="mt-5 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl leading-relaxed font-normal">
                In-depth pilgrimage logistics, mountain road safety advice from veteran chauffeurs, wildlife tracking reports, and offbeat trail secrets across Devbhoomi.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            FEATURED HERO ARTICLE
           ========================================================================= */}
        {featuredPost && (
          <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-16 max-w-7xl mx-auto">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block rounded-3xl sm:rounded-[36px] border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-2xl hover:border-[#FF5B37]/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                {/* Cover Image */}
                <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[320px] sm:min-h-[420px] bg-slate-900 overflow-hidden">
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-[#FF5B37] text-white text-xs font-black uppercase tracking-wider shadow-md">
                    Featured Masterclass
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-[#FF5B37] uppercase tracking-wider block">
                      {featuredPost.category}
                    </span>

                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-[#FF5B37] transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  {/* Meta & Author */}
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <p className="text-xs font-bold text-slate-900 leading-tight">
                          {featuredPost.author.name}
                        </p>
                        <p className="text-[11px] text-slate-500 leading-tight">
                          {featuredPost.publishDate} &bull; {featuredPost.readingTime}
                        </p>
                      </div>
                    </div>

                    <span className="w-10 h-10 rounded-full bg-slate-900 group-hover:bg-[#FF5B37] text-white flex items-center justify-center transition-colors shadow-sm shrink-0">
                      <ArrowRight size={16} weight="bold" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* =========================================================================
            SEARCH & CATEGORY TABS
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-10 max-w-7xl mx-auto">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs flex flex-col gap-4 sm:gap-5">
            {/* Top Row: Search and Count */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
              <div className="relative flex-1 max-w-md">
                <MagnifyingGlass
                  size={18}
                  weight="bold"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles by title, route, or keyword..."
                  className="w-full h-12 pl-11 pr-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:bg-white focus:border-[#FF5B37] focus:ring-2 focus:ring-[#FF5B37]/10 focus:outline-none transition-all"
                />
              </div>

              <span className="text-xs sm:text-sm text-slate-500 font-medium whitespace-nowrap">
                Showing <strong className="text-slate-900 font-bold">{filteredPosts.length}</strong> field articles
              </span>
            </div>

            {/* Bottom Row: Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {BLOG_CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`h-10 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      active
                        ? 'bg-slate-950 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            ARTICLES GRID
           ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 mb-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-xs hover:shadow-xl hover:border-[#FF5B37]/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-extrabold text-slate-900">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 font-semibold mb-2">
                      <span className="flex items-center gap-1">
                        <CalendarBlank size={13} weight="bold" />
                        <span>{post.publishDate}</span>
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} weight="bold" />
                        <span>{post.readingTime}</span>
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-[#FF5B37] transition-colors mb-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Author & Read More */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-slate-200"
                      />
                      <span className="text-xs font-bold text-slate-700">
                        {post.author.name}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold text-slate-900 group-hover:text-[#FF5B37] flex items-center gap-1 transition-colors"
                    >
                      <span>Read Guide</span>
                      <ArrowRight size={13} weight="bold" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SIGNATURE EXPEDITION CTA BANNER
           ========================================================================= */}
        <CtaBanner
          onOpenPlanner={() => setPlannerModalOpen(true)}
          pillBadge="Field Dossier"
          title="Ready to turn these field dispatches into your real journey?"
          subtitle="Speak directly with our Rishikesh expedition desk. We curate customized road-tested routes, high-clearance 4x4 convoys, and private forest naturalist permits."
          badgeMain="24/7"
          badgeSub="DESK READY"
          buttonText="Plan My Expedition"
          context="Blog Reader Direct Consultation"
        />
      </main>

      {/* Universal Scenic Mountain Footer */}
      <ScenicLandscapeFooter />

      {/* Concierge Planner Modal */}
      <PlanJourneyModal
        isOpen={plannerModalOpen}
        onClose={() => setPlannerModalOpen(false)}
        initialContext="Blog Reader Consultation"
      />
    </div>
  );
}

