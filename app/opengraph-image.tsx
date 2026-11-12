import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'Traveli • Handcrafted Himalayan Expeditions & Luxury Chauffeur Fleet';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 80px',
          background: 'linear-gradient(145deg, #070D14 0%, #0F1A26 45%, #080D14 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Ambient Sunrise Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-140px',
            right: '-120px',
            width: '560px',
            height: '560px',
            borderRadius: '999px',
            background: 'radial-gradient(circle, rgba(255, 91, 55, 0.24) 0%, rgba(255, 91, 55, 0) 70%)',
          }}
        />

        {/* Ambient Bottom-Left Subtle Azure Glow */}
        <div
          style={{
            position: 'absolute',
            bottom: '-160px',
            left: '-100px',
            width: '480px',
            height: '480px',
            borderRadius: '999px',
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(14, 165, 233, 0) 70%)',
          }}
        />

        {/* Top Header Row: Brand Identity + Trust Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            zIndex: 1,
          }}
        >
          {/* Brand Mark + Typography */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Squircle Emblem */}
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, #FF5B37 0%, #FF6E4D 50%, #FFA07A 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 12px 32px rgba(255, 91, 55, 0.4)',
              }}
            >
              <svg
                width="44"
                height="44"
                viewBox="0 0 32 32"
                fill="none"
              >
                {/* Orbit ring */}
                <circle cx="16" cy="16" r="11" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="0.8" />
                {/* 4 Cardinal Ticks */}
                <line x1="16" y1="2.5" x2="16" y2="5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="16" y1="27" x2="16" y2="29.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="2.5" y1="16" x2="5" y2="16" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="27" y1="16" x2="29.5" y2="16" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
                {/* Faceted Star */}
                <polygon points="16,5 16,16 6,16" fill="#FFFFFF" />
                <polygon points="16,5 16,16 26,16" fill="#FFE5DF" />
                <polygon points="16,27 16,16 6,16" fill="#FFC7BA" />
                <polygon points="16,27 16,16 26,16" fill="#FF9E8A" />
                {/* Pivot */}
                <circle cx="16" cy="16" r="2.2" fill="#0B1520" />
                <circle cx="16" cy="16" r="1.1" fill="#FFFFFF" />
              </svg>
            </div>

            {/* Logotype */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '32px',
                  fontWeight: 900,
                  letterSpacing: '5px',
                  color: '#ffffff',
                  lineHeight: 1,
                }}
              >
                TRAVELI
              </span>
              <span
                style={{
                  fontSize: '11px',
                  color: '#FFA07A',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginTop: '5px',
                }}
              >
                Curated Expeditions
              </span>
            </div>
          </div>

          {/* Trust Rating Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#FBBF24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>4.9 / 5 Rating</span>
            <span style={{ opacity: 0.5 }}>•</span>
            <span style={{ color: '#94A3B8' }}>2,480+ Reviews</span>
          </div>
        </div>

        {/* Center Editorial Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '960px',
            zIndex: 1,
            marginTop: '24px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              fontSize: '13px',
              fontWeight: 800,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#FF5B37',
            }}
          >
            2026 Himalayan Portfolio &amp; Fleet
          </div>

          <h1
            style={{
              fontSize: '56px',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-1px',
              color: '#ffffff',
              margin: 0,
            }}
          >
            Handcrafted Himalayan Expeditions &amp; Luxury Chauffeur Fleet
          </h1>

          <p
            style={{
              fontSize: '20px',
              color: '#CBD5E1',
              lineHeight: 1.5,
              margin: 0,
              maxWidth: '860px',
            }}
          >
            Curated holiday itineraries, Maharaja Tempo Travellers, and verified local mountain chauffeurs with complete pricing transparency.
          </p>
        </div>

        {/* Bottom Feature Badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#F1F5F9',
              fontSize: '13px',
              fontWeight: 600,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34E0A1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            100% Transparent Tariff
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#F1F5F9',
              fontSize: '13px',
              fontWeight: 600,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34E0A1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            24/7 Dedicated Concierge
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#F1F5F9',
              fontSize: '13px',
              fontWeight: 600,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34E0A1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Verified Commercial Fleet
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '12px',
              background: 'rgba(255, 91, 55, 0.12)',
              border: '1px solid rgba(255, 91, 55, 0.3)',
              color: '#FFA07A',
              fontSize: '13px',
              fontWeight: 700,
              marginLeft: 'auto',
            }}
          >
            Next.js 16 Starter Kit
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
