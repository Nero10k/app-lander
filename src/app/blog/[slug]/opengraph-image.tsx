import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/blog';

export const alt = 'POWER Blog';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  const title = post?.title ?? 'POWER Blog';
  const category = post?.category ?? 'Recovery';
  const readTime = post?.readTime ?? '5 min read';

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
          padding: '60px 72px',
        }}
      >
        {/* Top: Brand + category */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #8A4FFF, #8E2DE2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                fontWeight: 900,
                color: 'white',
              }}
            >
              P
            </div>
            <span style={{ display: 'flex', fontSize: 22, fontWeight: 800, color: 'white' }}>POWER</span>
            <span style={{ display: 'flex', fontSize: 22, color: 'rgba(255,255,255,0.3)', margin: '0 4px' }}>·</span>
            <span style={{ display: 'flex', fontSize: 22, color: 'rgba(255,255,255,0.5)' }}>Blog</span>
          </div>
          <div
            style={{
              display: 'flex',
              background: 'rgba(138,79,255,0.2)',
              border: '1px solid rgba(138,79,255,0.4)',
              borderRadius: 100,
              padding: '6px 18px',
              fontSize: 18,
              fontWeight: 600,
              color: '#8A4FFF',
            }}
          >
            {category}
          </div>
        </div>

        {/* Middle: Title */}
        <div
          style={{
            display: 'flex',
            fontSize: title.length > 50 ? 48 : 58,
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.1,
            letterSpacing: '-1px',
            maxWidth: 980,
          }}
        >
          {title}
        </div>

        {/* Bottom: Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8A4FFF, #6D28D9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14,
              fontWeight: 700,
              color: 'white',
            }}
          >
            P
          </div>
          <span style={{ display: 'flex', fontSize: 18, color: 'rgba(255,255,255,0.6)' }}>POWER Editorial Team</span>
          <span style={{ display: 'flex', color: 'rgba(255,255,255,0.3)', fontSize: 18 }}>·</span>
          <span style={{ display: 'flex', fontSize: 18, color: 'rgba(255,255,255,0.6)' }}>{readTime}</span>
          <span style={{ display: 'flex', color: 'rgba(255,255,255,0.3)', fontSize: 18 }}>·</span>
          <span style={{ display: 'flex', fontSize: 18, color: 'rgba(255,255,255,0.4)' }}>powerquitporn.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
