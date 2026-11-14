# Alpinex • Luxury Travel & Tour Operator Next.js Starter Kit

[![Next.js](https://img.shields.io/badge/Next.js-16.4.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
[![License](https://img.shields.io/badge/License-Commercial-FF5B37?style=for-the-badge)](https://tanujbuildsite.com/)

**Alpinex** is an elite, high-converting luxury travel agency and expedition tour operator starter kit built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**.

Designed for travel companies, luxury safari charters, high-altitude expedition operators, chauffeur fleets, and boutique hospitality agencies who want an award-winning, editorial-grade web presence that converts visitors into bookings.

---

## ✨ Key Features & Product Highlights

- **⚡ Modern Next.js 16 App Router & React 19:** Server Components by default with client-side interactive islands where needed.
- **🎨 Tailwind CSS v4 Engine:** Ultra-fast stylesheet compilation powered by the modern `@tailwindcss/postcss` pipeline.
- **📱 120Hz Mobile Native Scroll vs Desktop Lenis Parallax:**
  - Desktop uses silky **Lenis Smooth Scroll** with custom exponential easing.
  - Mobile & touch screens seamlessly bypass virtual scroll to unlock the device's native **120Hz hardware-accelerated momentum scrolling**.
- **🧭 7 Core Production Pages + Dynamic Routes:**
  1. **Home (`/`)** — Full-screen cinematic hero with Pexels media, interactive Radix search card, 4-card fanned collage, bento catalog, kinetic type carousel, reviews medallion, and mountain Framer footer.
  2. **Destinations (`/destinations`)** — Searchable, filterable travel catalog with categories, sorting (price, rating, featured), and quick dossier inquiry.
  3. **Destination Detail (`/destinations/[id]`)** — Day-by-day itinerary breakdown, hotel categories, vehicle inclusions, and direct WhatsApp quote generator.
  4. **Fleet & Tariff Pricing (`/pricing`)** — Interactive per-kilometer fare calculator with vehicle presets (Innova Crysta, Maharaja Tempo, Urbania).
  5. **About Us (`/about`)** — Heritage story, safety pillars, corporate statistics, and partner sponsor strip.
  6. **Team & Stewards (`/team`)** — Leadership dossiers, certified mountain chauffeurs, and wilderness naturalists.
  7. **Travel Journal (`/blog`)** — Offbeat field notes, packing guides, and high-converting destination editorial articles.
  8. **Contact Concierge (`/contact`)** — Dual office headquarters (Tapovan Rishikesh & CP New Delhi), glassmorphic contact pills, and live lead capture.
- **📅 Custom Accessible Radix Popover Date Picker:** Built with `@radix-ui/react-popover`, featuring automatic minimum-date enforcement for return dates.
- **📍 Radix Select Destination Dropdown:** Searchable, keyboard-accessible destination picker with contextual subtitles.
- **📨 Built-in Lead Capture API Routes:**
  - `POST /api/booking` — Processes tour bookings and fleet inquiries.
  - `POST /api/contact` — Processes general concierge inquiries.
- **🖼️ Automated Dynamic OpenGraph Image (`1200x630`):** Generated server-side using `@vercel/og` (`next/og`) in `app/opengraph-image.tsx`.
- **🏷️ Dynamic SVG & Apple Touch Favicons:** Dynamic 32x32 PNG generator (`app/icon.tsx`), Apple Touch icon (`app/apple-icon.tsx`), and SVG favicons.
- **⚙️ 1-Minute Master Configuration (`src/config/site.ts`):** Change agency name, phone, email, WhatsApp, and social links in ONE file.

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js**: `v20.x` or higher (`v22.x` recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🛠️ Project Structure

```
├── app/                           # Next.js App Router Pages & APIs
│   ├── api/                       # Backend lead ingestion endpoints
│   │   ├── booking/route.ts       # Booking inquiry handler
│   │   └── contact/route.ts       # Contact form handler
│   ├── destinations/              # /destinations & /destinations/[id]
│   ├── pricing/                   # /pricing (Fleet tariff & calculator)
│   ├── about/                     # /about (Agency story & safety)
│   ├── team/                      # /team (Expedition leaders)
│   ├── blog/                      # /blog & /blog/[slug] (Journal)
│   ├── contact/                   # /contact (Concierge desk)
│   ├── opengraph-image.tsx        # Dynamic 1200x630 OG Card generator
│   ├── icon.tsx                   # Dynamic 32x32 PNG favicon generator
│   ├── apple-icon.tsx             # Dynamic 180x180 Apple Touch icon
│   ├── sitemap.ts                 # Dynamic XML sitemap generator
│   ├── robots.ts                  # Robots.txt generator
│   ├── layout.tsx                 # Root layout & canonical SEO tags
│   └── page.tsx                   # Main Full-page flow
├── src/
│   ├── components/                # 25+ Luxury UI components
│   │   ├── Navbar.tsx             # Edge-to-edge dark header + Mobile drawer
│   │   ├── Hero.tsx               # Full-screen carousel + Radix booking card
│   │   ├── DatePicker.tsx         # Accessible Radix popover date picker
│   │   ├── WaterSplashCanvas.tsx  # Interactive refraction ripple canvas
│   │   ├── CraftJourneysCollage.tsx # 4-card fanned collage + mobile grid
│   │   ├── TopDestinations.tsx    # Filterable bento catalog
│   │   ├── ReviewsAndStats.tsx    # 4.9 rating medallion & parallax reviews
│   │   ├── PhotoCollageStats.tsx  # 3-card flight scrub & stats
│   │   ├── CtaBanner.tsx          # Full-width booking call-to-action
│   │   ├── ScenicLandscapeFooter.tsx # Signature Framer mountain footer
│   │   └── PlanJourneyModal.tsx   # Fast tour planner & WhatsApp modal
│   ├── config/
│   │   └── site.ts                # MASTER RE-BRANDING CONFIGURATION
│   └── data/
│       ├── destinationsData.ts    # Tour itineraries & destinations catalog
│       ├── travelData.ts          # Fleet vehicles & tour packages
│       ├── teamData.ts            # Leadership & steward profiles
│       └── blogData.ts            # Articles & field guide posts
├── public/                        # Static vector assets and icons
├── package.json                   # Project scripts and dependencies
└── tsconfig.json                  # TypeScript compiler settings
```

---

## ⚡ 1-Minute Customization & Re-Branding

To adapt this template to your own brand, edit **`src/config/site.ts`**:

```typescript
export const siteConfig = {
  name: 'YOUR_AGENCY_NAME',
  tagline: 'Your Agency Tagline Here',
  contact: {
    phoneDisplay: '+1 (800) 555-0199',
    phoneRaw: '+18005550199',
    whatsappNumber: '18005550199',
    whatsappUrl: 'https://wa.me/18005550199',
    email: 'hello@yourdomain.com',
    addressPrimary: 'Your Headquarters Address',
  },
  author: {
    name: 'Your Name or Agency',
    website: 'https://yourdomain.com',
  },
};
```
All navigation links, footer contact blocks, modal WhatsApp connectors, and metadata dynamically synchronize with this file!

---

## 🚢 Deploying to Vercel

The fastest way to deploy your Alpinex template is via [Vercel](https://vercel.com/):

1. Push your repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Go to **Vercel Dashboard** -> Click **"Add New Project"**.
3. Import your repository.
4. Framework Preset: **Next.js** (automatically detected).
5. Add your Environment Variable:
   - `NEXT_PUBLIC_SITE_URL`: `https://your-custom-domain.com`
6. Click **"Deploy"**. Your site will be live globally in under 2 minutes!

---

## 📄 License & Commercial Usage

Designed & developed by **Tanuj Sharma** ([tanujbuildsite.com](https://tanujbuildsite.com/)).  
This template is licensed for **commercial and personal use**. You are free to build client websites, commercial agencies, and production applications with this starter kit.

