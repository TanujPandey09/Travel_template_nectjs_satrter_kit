import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'Traveli • Handcrafted Himalayan Expeditions & Luxury Fleet';
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
          padding: '60px 80px',
          background: 'linear-gradient(135deg, #0B1520 0%, #152535 50%, #080E16 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle decorative background glow */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-120px',
            width: '450px',
            height: '450px',
            borderRadius: '999px',
            background: 'radial-gradient(circle, rgba(255, 91, 55, 0.25) 0%, rgba(255, 91, 55, 0) 70%)',
          }}
        />

        {/* Top Header / Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            zIndex: 1,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, #FF5B37 0%, #FFA07A 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: '32px',
                fontWeight: 'bold',
                boxShadow: '0 8px 24px rgba(255, 91, 55, 0.35)',
              }}
            >
              🧭
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '30px',
                  fontWeight: 900,
                  letterSpacing: '5px',
                  color: '#ffffff',
                }}
              >
                TRAVELI
              </span>
              <span
                style={{
                  fontSize: '12px',
                  color: '#94A3B8',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                Beyond Borders • Expeditions
              </span>
            </div>
          </div>

          <div
            style={{
              padding: '10px 22px',
              borderRadius: '999px',
              background: 'rgba(255, 91, 55, 0.15)',
              border: '1px solid rgba(255, 91, 55, 0.4)',
              color: '#FF7A5C',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            ★ 4.9 Rating • 2,400+ Verified Travelers
          </div>
        </div>

        {/* Center Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '920px',
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontSize: '54px',
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: '-1px',
              color: '#ffffff',
              margin: 0,
            }}
          >
            Handcrafted Himalayan Expeditions &amp; Luxury Chauffeur Fleet
          </h1>
          <p
            style={{
              fontSize: '21px',
              color: '#CBD5E1',
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Curated holiday itineraries, Maharaja Tempo Travellers, and verified local chauffeurs with complete pricing transparency.
          </p>
        </div>

        {/* Bottom Feature Badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#F1F5F9',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            ✓ 100% Transparent Tariff
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#F1F5F9',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            ✓ 24/7 Dedicated Concierge
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#F1F5F9',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            ✓ Verified AITP Commercial Fleet
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

