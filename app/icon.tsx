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
          color: '#ffffff',
          fontSize: '18px',
          fontWeight: 'bold',
        }}
      >
        🧭
      </div>
    ),
    {
      ...size,
    }
  );
}

