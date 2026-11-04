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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #FF5B37 0%, #FFA07A 100%)',
          borderRadius: '44px',
          color: '#ffffff',
          boxShadow: '0 8px 32px rgba(255, 91, 55, 0.4)',
        }}
      >
        <div style={{ fontSize: '96px', lineHeight: 1 }}>🧭</div>
      </div>
    ),
    {
      ...size,
    }
  );
}

