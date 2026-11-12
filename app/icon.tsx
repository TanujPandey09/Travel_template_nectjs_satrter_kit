import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #FF5B37 0%, #FFA07A 100%)',
          borderRadius: '9px',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
        >
          {/* Outer Orbit */}
          <circle cx="16" cy="16" r="10.5" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" />
          {/* 4 Cardinal Ticks */}
          <line x1="16" y1="2.5" x2="16" y2="5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="16" y1="27" x2="16" y2="29.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="2.5" y1="16" x2="5" y2="16" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="27" y1="16" x2="29.5" y2="16" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

          {/* Faceted Star */}
          <polygon points="16,5 16,16 6,16" fill="#FFFFFF" />
          <polygon points="16,5 16,16 26,16" fill="#FFE5DF" />
          <polygon points="16,27 16,16 6,16" fill="#FFC7BA" />
          <polygon points="16,27 16,16 26,16" fill="#FF9E8A" />

          {/* Pivot Pin */}
          <circle cx="16" cy="16" r="2" fill="#0B1520" />
          <circle cx="16" cy="16" r="1" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
