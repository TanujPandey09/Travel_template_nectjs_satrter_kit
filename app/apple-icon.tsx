import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #FF5B37 0%, #FF6E4D 50%, #FFA07A 100%)',
          borderRadius: '44px',
          boxShadow: '0 16px 48px rgba(255, 91, 55, 0.45)',
        }}
      >
        <svg
          width="128"
          height="128"
          viewBox="0 0 32 32"
          fill="none"
        >
          {/* Outer Orbit */}
          <circle cx="16" cy="16" r="11" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="0.8" strokeDasharray="1 1.5" />
          
          {/* 4 Cardinal Ticks */}
          <line x1="16" y1="2.5" x2="16" y2="5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="16" y1="27" x2="16" y2="29.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="2.5" y1="16" x2="5" y2="16" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="27" y1="16" x2="29.5" y2="16" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />

          {/* 4 Diagonal Micro Diamonds */}
          <polygon points="16,11 18,16 16,16 16,11" fill="#FFFFFF" fillOpacity="0.4" />
          <polygon points="21,16 16,18 16,16 21,16" fill="#FFFFFF" fillOpacity="0.3" />
          <polygon points="16,21 14,16 16,16 16,21" fill="#FFFFFF" fillOpacity="0.4" />
          <polygon points="11,16 16,14 16,16 11,16" fill="#FFFFFF" fillOpacity="0.3" />

          {/* Faceted Compass Rose */}
          <polygon points="16,5 16,16 6,16" fill="#FFFFFF" />
          <polygon points="16,5 16,16 26,16" fill="#FFE5DF" />
          <polygon points="16,27 16,16 6,16" fill="#FFC7BA" />
          <polygon points="16,27 16,16 26,16" fill="#FF9E8A" />

          {/* Center Pivot Pin */}
          <circle cx="16" cy="16" r="2.2" fill="#0B1520" />
          <circle cx="16" cy="16" r="1.1" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
