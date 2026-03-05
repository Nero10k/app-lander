import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default function LatestArticles() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="py-20 bg-[#050505] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8A4FFF]/30 to-transparent" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#8A4FFF]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[#8A4FFF] text-sm font-medium uppercase tracking-wider mb-2">From the Blog</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Latest{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2]">
                Recovery Articles
              </span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 text-[#8A4FFF] hover:text-purple-400 transition-colors font-medium text-sm"
          >
            View all articles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-[#8A4FFF]/40 transition-all flex flex-col"
            >
              <span className="text-xs text-[#8A4FFF] font-medium mb-2">{post.category}</span>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-[#8A4FFF] transition-colors flex-1">
                {post.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed line-clamp-2 mb-4">
                {post.description}
              </p>
              <div className="flex items-center justify-between text-white/30 text-xs mt-auto pt-4 border-t border-white/10">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile "view all" link */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/blog"
            className="text-[#8A4FFF] hover:text-purple-400 transition-colors font-medium text-sm inline-flex items-center gap-1"
          >
            View all articles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
