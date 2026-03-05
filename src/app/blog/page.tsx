import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getAllCategories } from '@/lib/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog | POWER – Porn Addiction Recovery',
  description:
    'Expert articles, science-backed guides, and success stories to help you quit porn, rewire your brain, and reclaim your life.',
  keywords: [
    'porn addiction recovery',
    'quit porn',
    'nofap',
    'brain rewiring',
    'NoFap benefits',
    'how to stop watching porn',
  ],
  openGraph: {
    title: 'POWER Blog – Porn Addiction Recovery',
    description: 'Science-backed guides and success stories to help you break free from porn.',
    type: 'website',
  },
};

export default function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string; page?: string };
}) {
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const selectedCategory = searchParams.category ?? 'All';
  const currentPage = Number(searchParams.page ?? '1');
  const POSTS_PER_PAGE = 9;

  const filtered =
    selectedCategory === 'All'
      ? allPosts
      : allPosts.filter((p) => p.category === selectedCategory);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  const featured = allPosts.filter((p) => p.featured).slice(0, 1)[0];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-black z-0" />
          <div className="absolute top-10 right-10 w-80 h-80 bg-[#8A4FFF]/15 rounded-full blur-3xl z-0" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-[#8E2DE2]/10 rounded-full blur-3xl z-0" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Recovery{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2]">
                Knowledge Base
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Science-backed guides, proven strategies, and real recovery stories — everything you need to quit porn and reclaim your life.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featured && selectedCategory === 'All' && currentPage === 1 && (
          <section className="container mx-auto px-4 mb-12 max-w-6xl">
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="bg-gradient-to-br from-[#8A4FFF]/10 to-[#8E2DE2]/5 rounded-3xl border border-[#8A4FFF]/20 p-8 md:p-10 hover:border-[#8A4FFF]/40 transition-all">
                <span className="inline-block bg-[#8A4FFF] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                  Featured
                </span>
                <div className="max-w-2xl">
                  <span className="text-[#8A4FFF] text-sm font-medium">{featured.category}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-3 group-hover:text-[#8A4FFF] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-white/60 mb-4 leading-relaxed">{featured.description}</p>
                  <div className="flex items-center gap-3 text-white/40 text-sm">
                    <time dateTime={featured.date}>
                      {new Date(featured.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                    <span>·</span>
                    <span>{featured.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Category Filter */}
        <section className="container mx-auto px-4 mb-8 max-w-6xl">
          <div className="flex flex-wrap gap-2">
            {['All', ...categories].map((cat) => {
              const isActive = cat === selectedCategory;
              const href = cat === 'All' ? '/blog' : `/blog?category=${encodeURIComponent(cat)}`;
              return (
                <Link
                  key={cat}
                  href={href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#8A4FFF] text-white'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Post Grid */}
        <section className="container mx-auto px-4 pb-20 max-w-6xl">
          {paginated.length === 0 ? (
            <p className="text-white/50 text-center py-20">No articles found in this category.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-[#8A4FFF]/40 hover:bg-white/8 transition-all flex flex-col"
                >
                  <span className="text-xs text-[#8A4FFF] font-medium mb-2">{post.category}</span>
                  <h2 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-[#8A4FFF] transition-colors flex-1">
                    {post.title}
                  </h2>
                  <p className="text-white/50 text-sm mb-4 leading-relaxed line-clamp-3">
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
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                const href =
                  selectedCategory === 'All'
                    ? `/blog?page=${page}`
                    : `/blog?category=${encodeURIComponent(selectedCategory)}&page=${page}`;
                return (
                  <Link
                    key={page}
                    href={href}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                      page === currentPage
                        ? 'bg-[#8A4FFF] text-white'
                        : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {page}
                  </Link>
                );
              })}
            </div>
          )}
        </section>

        {/* Newsletter */}
        <section className="bg-gradient-to-b from-black to-[#0A0A0A] py-16">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Get Weekly Recovery{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2]">
                Insights
              </span>
            </h2>
            <p className="text-white/50 mb-6 text-sm">
              New articles, practical strategies, and community updates — delivered weekly.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/10 focus:border-[#8A4FFF] focus:outline-none text-white placeholder-white/30 text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] text-white font-medium text-sm hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
