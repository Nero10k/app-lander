import { ImageResponse } from 'next/og';

export const alt = 'POWER – Quit Porn For Life';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1a0533 60%, #0A0A0A 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
        }}
      >
        {/* Top: Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: 'linear-gradient(135deg, #8A4FFF, #8E2DE2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              fontWeight: 900,
              color: 'white',
            }}
          >
            P
          </div>
          <span style={{ fontSize: 28, fontWeight: 800, color: 'white', display: 'flex' }}>POWER</span>
        </div>

        {/* Middle: Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 80,
              fontWeight: 900,
              color: 'white',
              lineHeight: 1.0,
              letterSpacing: '-2px',
            }}
          >
            Quit Porn For Life
          </div>
          <div style={{ display: 'flex', fontSize: 28, color: 'rgba(255,255,255,0.65)', maxWidth: 700 }}>
            The #1 neuroscience-backed app for porn addiction recovery.
          </div>
        </div>

        {/* Bottom: Social proof */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              background: 'rgba(138,79,255,0.15)',
              border: '1px solid rgba(138,79,255,0.4)',
              borderRadius: 100,
              padding: '10px 24px',
              fontSize: 20,
              fontWeight: 700,
              color: '#8A4FFF',
            }}
          >
            250,000+ men recovered
          </div>
          <div style={{ display: 'flex', fontSize: 20, color: 'rgba(255,255,255,0.4)' }}>
            4.8/5 App Store Rating
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
